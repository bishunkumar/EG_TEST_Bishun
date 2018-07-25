/*************************************************************************
*
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2012 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by trade secret or copyright law.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/

CUI.rte.plugins.TablePlugin = new Class({

    toString: "TablePlugin",

    extend: CUI.rte.plugins.AbstractTablePlugin,

    mergeCellsRightUI: null,

    mergeCellsDownUI: null,

    mergeCellsUI: null,

    splitCellsHorizontalUI: null,

    splitCellsVerticalUI: null,

    modifyTableOrCellUI: null,

    tableAndCellPropsDialog: null,

    insertParaPosition: null,

    tableToolbarTbType: "tableEditOptions",

    /**
     * In case of table mode, the table edit toolbar needs to be the default FSM toolbar. To do this we switch to
     * tableToolbar the first time updateState is called, so we need this to keep track if default switch to table
     * toolbar is done.
     * @private
     */
    defaultSwitchDone: false,

    isTableToolbarMode: function() {
        return true;
    },

    switchToTableToolbar: function() {
        if (!this.editorKernel.hasBackgroundToolbar(this.tableToolbarTbType)) {
            this.editorKernel.addBackgroundToolbar({
                "tbType": this.tableToolbarTbType,
                "isFullScreen": true
            });
            this.editorKernel.addPluginListener("commandexecuted", this.destroyTableEditToolbar, this,
                this, false);
        }
        this.editorKernel.setActiveToolbar(this.tableToolbarTbType);
    },

    // overrides CUI.rte.plugins.AbstractTablePlugin#showTablePropsUI
    showTablePropsUI: function(propConfig, context) {
        var dm = this.editorKernel.getDialogManager();
        if (propConfig.cmd == "createtable") {
            if (!this.tablePropsDialog || dm.mustRecreate(this.tablePropsDialog)) {
                propConfig.editContext = context;
                propConfig.pluginConfig = this.config;
                propConfig.execFn = CUI.rte.Utils.scope(this.execCreateOrEditTable, this);
                this.tablePropsDialog = dm.create(CUI.rte.ui.DialogManager.DLG_TABLEPROPS, propConfig);
            }
            dm.show(this.tablePropsDialog);
        } else {
            this.switchToTableToolbar();
        }

    },

    destroyTableEditToolbar: function(event) {
        if (event.cmd == "fullscreen-finish") {
            this.editorKernel.removeBackgroundToolbar(this.tableToolbarTbType);
        }
    },

    showTableAndCellPropsUI: function(propConfig, context) {
        var dm = this.editorKernel.getDialogManager();
        if (!this.tableAndCellPropsDialog || dm.mustRecreate(this.tableAndCellPropsDialog)) {
            propConfig.editContext = context;
            propConfig.pluginConfig = this.config;
            propConfig.execFn = CUI.rte.Utils.scope(this.execEditTableAndCell, this);
            this.tableAndCellPropsDialog = dm.create(CUI.rte.ui.DialogManager.DLG_TABLEANDCELLPROPS, propConfig);
        }
        dm.show(this.tableAndCellPropsDialog);
    },

    execEditTableAndCell: function(cmd, tableAndCellConfig, context) {
        this.editorKernel.selectQualifiedRangeBookmark(context, this.savedRange);
        var tableConfig = {}, cellConfig = {};
        for (var key in tableAndCellConfig) {
            if (tableAndCellConfig.hasOwnProperty(key)) {
                if (key.indexOf("cell-") == 0) {
                    cellConfig[key.split("cell-")[1]] = tableAndCellConfig[key];
                } else {
                    tableConfig[key] = tableAndCellConfig[key];
                }
            }
        }
        if (cmd == "modifytableandcell" && tableAndCellConfig) {
            this.editorKernel.relayCmd("modifytable", tableConfig);
            this.editorKernel.relayCmd("modifyCell", cellConfig);
        }
    },

    modifyTableAndCell: function(options) {
        var table = this.editorKernel.queryState("table");
        if (table) {
            var context = options.editContext;
            this.savedRange = options.savedRange;
            this.editorKernel.selectQualifiedRangeBookmark(context, this.savedRange);
            var propConfig = {
                "editContext": context,
                "cmd": "modifytableandcell",
                "table": table,
                "parameters": {
                    "command": this.pluginId + "#modifytableandcell"
                }
            };
            var dm = this.editorKernel.getDialogManager();
            if (dm.isShown(this.tableAndCellPropsDialog) && dm.toggleVisibility(this.tableAndCellPropsDialog)) {
                dm.hide(this.tableAndCellPropsDialog);
                return;
            }
            this.showTableAndCellPropsUI(propConfig, context);
        }
        
    },

    // overrides CUI.rte.plugins.AbstractTablePlugin#execute
    execute: function(cmdId, value, options) {
        var cmd = cmdId;
        var sepPos = cmdId.indexOf(".", cmdId);
        if (sepPos > 0) {
            cmd = cmdId.substring(0, sepPos);
            value = cmdId.substring(sepPos + 1, cmdId.length);
        }
        if (!value && (cmd == "selectrow" || cmd == "selectcolumn") && this.currentSelectionDef) {
            var tableInfo = this.getTableInfo(this.currentSelectionDef, options.editContext);
            value = {
                "tableMatrix": tableInfo["tableMatrix"],
                "cell": tableInfo["singleCell"]
            }
        }
        if (cmd == "ensureparagraph") {
            var tableInfo = this.getTableInfo(this.currentSelectionDef, options.editContext);
            var tableMatrix = tableInfo["tableMatrix"];
            if (this.insertParaPosition) {
                value = this.insertParaPosition;
            }
        }
        if (cmd == "modifytableandcell") {
            var context = options.editContext;
            if (!options.savedRange) {
                options.savedRange = this.editorKernel.createQualifiedRangeBookmark(context);
            }
            this.modifyTableAndCell(options);
        } else if (cmd == "exitTableEditing") {
            this.editorKernel.setActiveToolbar("fullscreen");
        } else {
            CUI.rte.Utils.scope(this.superClass.execute, this)(cmdId, value, options);
        }
    },

    // overrides CUI.rte.plugins.AbstractTablePlugin#updateState
    updateState: function(selDef) {
        CUI.rte.Utils.scope(this.superClass.updateState, this)(selDef);
        var com = CUI.rte.Common;
        var activeToolbar = this.editorKernel.getToolbar();
        if (this.isTableMode() && activeToolbar.tbType == "fullscreen" && !this.defaultSwitchDone) {
            this.switchToTableToolbar();
            this.defaultSwitchDone = true;
        }
        if (!activeToolbar || activeToolbar.tbType != this.tableToolbarTbType) {
            return;
        }
        var context = selDef.editContext;
        var tableInfo = this.getTableInfo(selDef, context);
        this.insertParaPosition = null;
        if (!tableInfo.isTable) {
            this.editorKernel.setActiveToolbar("fullscreen");
        } else {
            var tableMatrix = tableInfo["tableMatrix"];
            var isSingleCell = tableInfo["isSingleCell"];
            var selection = selDef.selection;
            var cellSel = null;
            if (!isSingleCell && selection.cellSelection) {
                cellSel = tableMatrix.createSelection(selection.cellSelection.cells);
            }
            if (isSingleCell) {
                //single cell is selected, enable all elements first and later disable them based on selection
                this.editorKernel.enableToolbar(this.tableToolbarTbType);
                var cellInfo = tableMatrix.getCellInfo(tableInfo["singleCell"]);
                var pNode = tableInfo["tableDom"].parentNode;
                var tableIndex = com.getChildIndex(tableInfo["tableDom"]);
                this.mergeCellsUI.setDisabled(true);
                if (this.mergeCellsDownUI && cellInfo.isLastRow) {
                    this.mergeCellsDownUI.setDisabled(true);
                }
                if (this.mergeCellsRightUI && cellInfo.isLastCol) {
                    this.mergeCellsRightUI.setDisabled(true);
                }
                if (this.ensureParagraphUI) {
                    if (com.isRootNode(context, pNode)) {
                        this.insertParaPosition = cellInfo.isLastRow && ((tableIndex == (pNode.childNodes.length - 1)) ||
                            com.isTag(pNode.childNodes[tableIndex + 1], "table")) ? "after" : null;
                        if (!this.insertParaPosition) {
                            this.insertParaPosition = cellInfo.isFirstRow && ((tableIndex == 0) ||
                            com.isTag(pNode.childNodes[tableIndex - 1], "table")) ? "before" : null;
                        }
                        this.ensureParagraphUI.setDisabled(this.insertParaPosition ? false : true);
                    } else {
                        this.ensureParagraphUI.setDisabled(true);
                    }
                }
                if (this.isTableMode()) {
                    var size = tableMatrix.getTableSize();
                    this.removeColUI.setDisabled(size.cols <= 1);
                    this.removeRowUI.setDisabled(size.rows <= 1);
                }
            } else {
                this.editorKernel.disableToolbar(this.tableToolbarTbType);
                if (cellSel.selectionProps.isRect) {
                    this.mergeCellsUI.setDisabled(false);
                }
                this.modifyTableOrCellUI.setDisabled(false);
                this.exitTableEditingUI.setDisabled(false);
            }
        }
    },

    // overrides CUI.rte.plugins.AbstractTablePlugin#removeTableSelection
    removeTableSelection: function() {
        CUI.rte.Utils.scope(this.superClass.removeTableSelection, this)();
        this.editorKernel.enableToolbar(this.tableToolbarTbType);
    },

    // overrides CUI.rte.plugins.AbstractTablePlugin#initializeUI
    initializeUI: function(tbGenerator) {
        CUI.rte.Utils.scope(this.superClass.initializeUI, this)(tbGenerator);
        var plg = CUI.rte.plugins;
        var isTableMode = this.isTableMode();
        if (this.isFeatureEnabled("mergecells")) {
            this.mergeCellsRightUI = tbGenerator.createElement("mergecells-right", this,
                    false, this.getTooltip("mergecells-right"), null, {
                        "cmd": "mergecells",
                        "cmdValue": {"direction": "right", "isTableMode": isTableMode}
                    });
            tbGenerator.addElement("table.cell", plg.Plugin.SORT_TABLE_TABLEMODE + 3,
                    this.mergeCellsRightUI, 10);
            this.mergeCellsDownUI = tbGenerator.createElement("mergecells-down", this,
                    false, this.getTooltip("mergecells-down"), null, {
                        "cmd": "mergecells",
                        "cmdValue": {"direction": "down", "isTableMode": isTableMode}
                    });
            tbGenerator.addElement("table.cell", plg.Plugin.SORT_TABLE_TABLEMODE + 3,
                    this.mergeCellsDownUI, 20);
            this.mergeCellsUI = tbGenerator.createElement("mergecells", this,
                    false, this.getTooltip("mergecells"), null, {
                        "cmd": "mergecells",
                        "cmdValue": {"isTableMode": isTableMode}
                    });
            tbGenerator.addElement("table.cell", plg.Plugin.SORT_TABLE_TABLEMODE + 3,
                    this.mergeCellsUI, 30);

        }
        if (this.isFeatureEnabled("splitcell")) {
            this.splitCellHorizontalUI = tbGenerator.createElement("splitcell-horizontal", this,
                    false, this.getTooltip("splitcell-horizontal"), null, {
                        "cmd": "splitcell",
                        "cmdValue": "horizontal"
                    });
            tbGenerator.addElement("table.cell", plg.Plugin.SORT_TABLE_TABLEMODE + 4,
                    this.splitCellHorizontalUI, 10);
            this.splitCellVerticalUI = tbGenerator.createElement("splitcell-vertical", this,
                    false, this.getTooltip("splitcell-vertical"), null, {
                        "cmd": "splitcell",
                        "cmdValue": "vertical"
                    });
            tbGenerator.addElement("table.cell", plg.Plugin.SORT_TABLE_TABLEMODE + 4,
                    this.splitCellVerticalUI, 20);

        }
        if (this.isFeatureEnabled("selectrow")) {
            this.selectRowUI = tbGenerator.createElement("selectrow", this, false,
                    this.getTooltip("selectrow"));
            tbGenerator.addElement("table", plg.Plugin.SORT_TABLE_TABLEMODE + 5,
                    this.selectRowUI, 10);
        }
        if (this.isFeatureEnabled("selectcolumn")) {
            this.selectColumnUI = tbGenerator.createElement("selectcolumn", this, false,
                    this.getTooltip("selectcolumn"));
            tbGenerator.addElement("table", plg.Plugin.SORT_TABLE_TABLEMODE + 5,
                    this.selectColumnUI, 20);
        }
        if (!isTableMode) {
            this.ensureParagraphUI = tbGenerator.createElement("ensureparagraph", this, false,
                this.getTooltip("ensureparagraph"));
            tbGenerator.addElement("table", plg.Plugin.SORT_TABLE_TABLEMODE + 6,
                this.ensureParagraphUI, 10);
        }
        if (this.isFeatureEnabled("table") || this.isFeatureEnabled("cellprops")) {
            this.modifyTableOrCellUI = tbGenerator.createElement("modifytableandcell", this, false,
                    this.getTooltip("table"));
            tbGenerator.addElement("table", plg.Plugin.SORT_TABLE_TABLEMODE + 7,
                    this.modifyTableOrCellUI, 10);
        }
        if (!isTableMode) {
            if (this.isFeatureEnabled("removetable")) {
                this.removeTableUI = tbGenerator.createElement("removetable", this, false,
                    this.getTooltip("removetable"));
                tbGenerator.addElement("table", plg.Plugin.SORT_TABLE_TABLEMODE + 7,
                    this.removeTableUI, 20);
            }
        }

        this.exitTableEditingUI = tbGenerator.createElement("exitTableEditing", this, false,
              this.getTooltip("table"), "x-edit-table-properties");
        tbGenerator.addElement("table", plg.Plugin.SORT_TABLE_TABLEMODE + 8,
              this.exitTableEditingUI, 10);
    }
});

CUI.rte.plugins.TablePlugin.EDITMODE_DEFAULT = CUI.rte.plugins.AbstractTablePlugin.EDITMODE_DEFAULT;

CUI.rte.plugins.TablePlugin.EDITMODE_TABLE = CUI.rte.plugins.AbstractTablePlugin.EDITMODE_TABLE;

// register plugin
CUI.rte.plugins.PluginRegistry.register("table", CUI.rte.plugins.TablePlugin);