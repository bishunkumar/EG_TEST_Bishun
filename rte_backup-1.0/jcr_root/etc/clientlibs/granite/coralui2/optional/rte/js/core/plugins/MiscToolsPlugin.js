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

/**
 * @class CUI.rte.plugins.MiscToolsPlugin
 * @extends CUI.rte.plugins.Plugin
 * <p>This class implements miscellaneous tools (sourceview, special chars) as a plugin.</p>
 * <p>The plugin ID is "<b>misctools</b>".</p>
 * <p><b>Features</b></p>
 * <ul>
 *   <li><b>specialchars</b> - adds an icon to invoke a dialog that may be used for
 *     inserting characters that are not easily accessible via the keyboard</li>
 *   <li><b>sourceedit</b> - adds an icon that allows to switch to source edit mode</li>
 * </ul>
 */
CUI.rte.plugins.MiscToolsPlugin = new Class({

    toString: "MiscToolsPlugin",

    extend: CUI.rte.plugins.Plugin,

    /**
     * @cfg {Object} specialCharsConfig
     * <p>Configuration of the special characters component. Valid config properties are:
     * </p>
     * <ul>
     *   <li><code>chars</code> : Object<br>
     *     Table of characters to be added to the special character dialog. Choose the
     *     property name for each element at your discretion. Each element defines a single
     *     character or a range of characters:
     *     <ul>
     *       <li>Use an "entity" property (String) to specify the HTML entity of a single
     *         character (for example: "&amp;copy;").</li>
     *       <li>Use "rangeStart" (Number)/"rangeEnd" (Number) properties to specify a range
     *         of unicode characters. Both rangeStart and rangeEnd must specify the numeric
     *         representation of a unicode character. Note that the character specified as
     *         rangeEnd is also included in the specified range.</li>
     *     </ul>
     *   </li>
     *   <li><code>tableCls</code> : String<br>
     *     The CSS class to be used for formatting the table that displays the special
     *     characters.</li>
     *   <li><code>cellCls</code> : String<br>
     *     The CSS class to be used for formatting cells of the character table.</li>
     *   <li><code>overCls</code> : String<br>
     *     The CSS class to be used for formatting cells of the character table if
     *     rolledover.</li>
     *   <li><code>magnifyCls</code> : String<br>
     *     CSS class to be used for the magnified view of the currently rolledover
     *     character.</li>
     * </ul>
     * <p>Defaults to:</p>
<pre>
{
    "tableCls": "richtext-scd-table",
    "cellCls": "richtext-scd-cell",
    "overCls": "richtext-scd-cell-over",
    "magnifyCls": "richtext-scd-magnify",
    "chars": {
        "copyright": {
            "entity": "&copy;"
        },
        "registered": {
            "entity": "&reg;"
        },
        "trademark": {
            "entity": "&trade;"
        }
    }
}
</pre>
     * @since 5.3
     */

    /**
     * @private
     */
    specialCharsUI: null,

    /**
     * @private
     */
    sourceEditUI: null,

    /**
     * @private
     */
    specialCharsDialog: null,

    /**
     * @private
     */
    savedRange: null,


    getFeatures: function() {
        return [ "specialchars", "sourceedit" ];
    },

    initializeUI: function(tbGenerator) {
        var plg = CUI.rte.plugins;
        var ui = CUI.rte.ui;
        if (this.isFeatureEnabled("specialchars")) {
            this.specialCharsUI = tbGenerator.createElement("specialchars", this, false,
                    this.getTooltip("specialchars"));
            tbGenerator.addElement("misc", plg.Plugin.SORT_MISC, this.specialCharsUI, 100);
        }
        if (this.isFeatureEnabled("sourceedit") && this.editorKernel.canEditSource()) {
            this.sourceEditUI = tbGenerator.createElement("sourceedit", this, true,
                    this.getTooltip("sourceedit"));
            tbGenerator.addElement("misc", plg.Plugin.SORT_MISC, this.sourceEditUI, 110);
        }
    },

    /**
     * Inserts a special character using the corresponding dialog.
     * @private
     */
    insertSpecialChars: function(context) {
        var com = CUI.rte.Common;
        var dm = this.editorKernel.getDialogManager();
        if (dm.isShown(this.specialCharsDialog)
                && dm.toggleVisibility(this.specialCharsDialog)) {
            dm.hide(this.specialCharsDialog);
            return;
        }
        this.savedRange = CUI.rte.Selection.saveNativeSelection(context);
        if (!this.specialCharsDialog || dm.mustRecreate(this.specialCharsDialog)) {
            var defaultConfig = {
                "insertCharacter": CUI.rte.Utils.scope(function(charToInsert) {
                    this.insertCharacter(charToInsert);
                }, this),
                "parameters": {
                    "command": this.pluginId + "#specialchars"
                }
            };
            var dialogConfig = this.config.specialCharsConfig || { };
            CUI.rte.Utils.applyDefaults(dialogConfig, defaultConfig);
            this.specialCharsDialog = dm.create(CUI.rte.ui.DialogManager.DLG_SPECCHARS,
                    dialogConfig);
            // would throw a SecurityError if set in dialogConfig or while creating the
            // dialog
            this.specialCharsDialog.editContext = context;
        }
        dm.show(this.specialCharsDialog);
    },

    insertCharacter: function(charToInsert) {
        var com = CUI.rte.Common;
        CUI.rte.Selection.restoreNativeSelection(this.specialCharsDialog.editContext, this.savedRange);
        this.editorKernel.relayCmd("InsertHTML", charToInsert);
    },

    notifyPluginConfig: function(pluginConfig) {
        // configuring "special characters" dialog
        pluginConfig = pluginConfig || { };
        var defaults = {
            // TODO use toolkit-specific dialog configuration
            "specialCharsConfig": {
                "tableCls": "richtext-scd-table",
                "rowCls": undefined,
                "cellCls": "richtext-scd-cell",
                "overCls": "richtext-scd-cell-over",
                "magnifyCls": "richtext-scd-magnify",
                "chars": {
                    "copyright": {
                        "entity": "&copy;"
                    },
                    "registered": {
                        "entity": "&reg;"
                    },
                    "trademark": {
                        "entity": "&trade;"
                    }
                }
            },
            "tooltips": {
                "sourceedit": {
                    "title": CUI.rte.Utils.i18n("plugins.miscTools.sourceEditTitle"),
                    "text": CUI.rte.Utils.i18n("plugins.miscTools.sourceEditText")
                },
                "specialchars": {
                    "title": CUI.rte.Utils.i18n("plugins.miscTools.specialCharsTitle"),
                    "text": CUI.rte.Utils.i18n("plugins.miscTools.specialCharsText")
                }
            }
        };
        if (pluginConfig.specialCharsConfig && pluginConfig.specialCharsConfig.chars) {
            delete defaults.specialCharsConfig.chars;
        }
        CUI.rte.Utils.applyDefaults(pluginConfig, defaults);
        this.config = pluginConfig;
    },

    execute: function(id, value, options) {
        var context = options.editContext;
        if (id == "specialchars") {
            this.insertSpecialChars(context);
        } else if ((id == "sourceedit") && this.sourceEditUI) {
            // defer is required for correct temporary focus handling
            CUI.rte.Utils.defer(this.editorKernel.requestSourceEdit, 1,
                    this.editorKernel, [ this.sourceEditUI.isSelected() ]);
        }
    },

    updateState: function(selDef) {
        var context = selDef.editContext;
        if (this.specialCharsUI != null) {
            var cells = selDef.nodeList.getTags(context, [{
                    "tagName": [ "td", "th" ]
                }
            ], false);
            var disable = (cells.length > 0);
            this.specialCharsUI.setDisabled(disable);
        }
    },

    isHeadless: function(cmd, value) {
        return (cmd !== "specialchars");
    }

});


// register plugin
CUI.rte.plugins.PluginRegistry.register("misctools",
        CUI.rte.plugins.MiscToolsPlugin);