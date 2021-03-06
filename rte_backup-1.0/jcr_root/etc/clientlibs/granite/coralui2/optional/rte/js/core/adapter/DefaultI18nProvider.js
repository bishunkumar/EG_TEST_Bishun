/*************************************************************************
*
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2013 Adobe Systems Incorporated
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
 * <p>This class implements a default internationalization that has no dependencies
 * on a specific environment.</p>
 */
CUI.rte.DefaultI18nProvider = new Class({

    extend: CUI.rte.I18nProvider,

    /**
     * The default language
     */
    _defaultLanguage: null,

    /**
     * Current language
     */
    _language: null,

    /**
     * Table with translations
     */
    _translations: null,

    construct: function(config) {
        config = config || {};
        this._defaultLanguage = config.defaultLanguage ? config.defaultLanguage : "en";
        this._translations = config.translations ? config.translations
                : CUI.rte.DefaultI18nProvider.DEFAULT_TRANSLATIONS;
        this._language = this._defaultLanguage;
    },

    setLanguage: function(lang) {
        this._language = lang;
    },

    getLanguage: function() {
        return this._language;
    },

    getText: function(id, values) {
        // TODO replace with CUI translation services when available
        var text = id;
        if (this._translations && this._translations.hasOwnProperty(id)) {
            var textDef = this._translations[id];
            if (textDef.hasOwnProperty(this._language)) {
                text = textDef[this._language];
            } else if (textDef.hasOwnProperty(this._defaultLanguage)) {
                text = textDef[this._defaultLanguage];
            }
        }
        if (values) {
            if (!CUI.rte.Utils.isArray(values)) {
                text = text.replace("{0}", values);
            } else {
                for (var s = 0; s < values.length; s++) {
                    text = text.replace("{" + s + "}", values[s])
                }
            }
        }
        return text;
    }

});

CUI.rte.DefaultI18nProvider.DEFAULT_TRANSLATIONS = {
        "dialog.apply": {
            "en": "Apply"
        },
        "dialog.cancel": {
            "en": "Cancel"
        },
        "dialogs.find.matchCase": {
            "en": "Match Case"
        },
        "dialog.anchor.remove": {
            "en": "Remove"
        },
        "dialog.find.find": {
            "en": "Find"
        },
        "dialog.link.path": {
            "en": "Path"
        },
        "dialog.link.path_picker": {
            "en": "Path Picker"
        },
        "dialog.link.target": {
            "en": "Target"
        },
        "dialog.link.same_tab": {
            "en": "Same Tab"
        },
        "dialog.link.new_tab": {
            "en": "New Tab"
        },
        "dialog.link.parent_frame": {
            "en": "Parent Frame"
        },
        "dialog.link.pickerTitle": {
            "en": "Choose a target path"
        },
        "dialog.link.top_frame": {
            "en": "Top Frame"
        },
        "dialog.link.titleFieldPlaceHolder": {
            "en": "Alt Text"
        },
        "dialog.pastePlainText.pasteAreaPlaceHolder": {
            "en": "Please paste your text here...."
        },
        "dialog.replace.findButton": {
            "en": "Find"
        },
        "dialog.replace.replaceButton": {
            "en": "Replace"
        },
        "dialogs.replace.matchcase": {
            "en": "Match Case"
        },
        "dialog.replace.replaceAllButton": {
            "en": "Replace all"
        },
        "dialog.tableAndCellProps.cellProps": {
            "en": "CELL PROPERTIES"
        },
        "dialog.tableAndCellProps.tableProps": {
            "en": "TABLE PROPERTIES"
        },
        "dialog.tableAndCellProps.width": {
            "en": "Width"
        },
        "dialog.tableAndCellProps.widthToolTip": {
            "en": "Width in pixels. For relative values add \"%\" e.g. \"40%\"."
        },
        "dialog.tableAndCellProps.noneAlignHor": {
            "en": "None"
        },
        "dialog.tableAndCellProps.leftAlign": {
            "en": "Left"
        },
        "dialog.tableAndCellProps.centerAlign": {
            "en": "Center"
        },
        "dialog.tableAndCellProps.rightAlign": {
            "en": "Right"
        },
        "dialog.tableAndCellProps.cellType": {
            "en": "Cell Type"
        },
        "dialog.tableAndCellProps.dataCell": {
            "en": "Data"
        },
        "dialog.tableAndCellProps.headerCell": {
            "en": "Header"
        },
        "dialog.tableAndCellProps.height": {
            "en": "Height"
        },
        "dialog.tableAndCellProps.heightToolTip": {
            "en": "Height in pixels. For relative values add \"%\" e.g. \"40%\"."
        },
        "dialog.tableAndCellProps.noneAlignVer": {
            "en": "None"
        },
        "dialog.tableAndCellProps.topAlign": {
            "en": "Top"
        },
        "dialog.tableAndCellProps.middleAlign": {
            "en": "Middle"
        },
        "dialog.tableAndCellProps.bottomAlign": {
            "en": "Bottom"
        },
        "dialog.tableAndCellProps.baselineAlign": {
            "en": "Baseline"
        },
        "dialog.tableAndCellProps.cellType": {
          "en": "Cell Type"
        },
        "dialog.tableAndCellProps.hiddenHeader": {
            "en": "Hidden Header"
        },
        "dialog.tableAndCellProps.headerAttrib": {
            "en": "Header"
        },
        "dialog.tableAndCellProps.idAttrib": {
            "en": "Id"
        },
        "dialog.tableAndCellProps.scopeAttrib": {
            "en": "Scope"
        },
        "dialog.tableAndCellProps.noneScopeAttrib": {
            "en": "Scope"
        },
        "dialog.tableAndCellProps.rowScope": {
            "en": "Row"
        },
        "dialog.tableAndCellProps.columnScope": {
            "en": "Column"
        },
        "dialog.tableAndCellProps.cellPadding": {
            "en": "Cell padding"
        },
        "dialog.tableAndCellProps.cellSpacing": {
            "en": "Cell spacing"
        },
        "dialog.tableAndCellProps.border": {
            "en": "Border"
        },
        "dialog.tableAndCellProps.caption": {
            "en": "Caption"
        },
        "dialog.tableProps.columns": {
            "en": "Columns*"
        },
        "dialog.tableProps.width": {
            "en": "Width"
        },
        "dialog.tableProps.cellPadding": {
            "en": "Cell padding"
        },
        "dialog.tableProps.rows": {
            "en": "Rows*"
        },
        "dialog.tableProps.height": {
            "en": "Height"
        },
        "dialog.tableProps.cellSpacing": {
            "en": "Cell spacing"
        },
        "dialog.tableProps.border": {
            "en": "Border"
        },
        "dialog.tableProps.noHeader": {
            "en": "No Header"
        },
        "dialog.tableProps.rowHeader": {
            "en": "First row"
        },
        "dialog.tableProps.colHeader": {
            "en": "First column"
        },
        "dialog.tableProps.rowAndColHeader": {
            "en": "First row and column"
        },
        "dialog.tableProps.caption": {
            "en": "Caption"
        },
        
        "kernel.alertTitlePaste": {
            "en": "Paste"
        },
        "kernel.alertSecurityPaste": {
            "en": "Your browser's security settings don't permit the editor to execute paste operations. Please use the keyboard shortcut (Ctrl/Cmd+V)."
        },
        "kernel.alertTitleCopy": {
            "en": "Copy"
        },
        "kernel.alertSecurityCopy": {
            "en": "Your browser's security settings don't permit the editor to execute copy operations. Please use the keyboard shortcut (Ctrl/Cmd+C)."
        },
        "kernel.alertTitleCut": {
            "en": "Cut"
        },
        "kernel.alertSecurityCut": {
            "en": "Your browser's security settings don't permit the editor to execute cut operations. Please use the keyboard shortcut (Ctrl/Cmd+X)."
        },
        "kernel.alertTitleError": {
            "en": "Error"
        },
        "kernel.alertIELimitation": {
            "en": "Could not insert text due to internal Internet Explorer limitations. Please try to select a smaller text fragment and try again."
        },
        "commands.paste.alertTitle": {
            "en": "Paste"
        },
        "commands.paste.alertTableError": {
            "en": "You are trying to paste table data into an existing table.<br>As this operation would result in invalid HTML, it has been cancelled.<br>Please try to simplify the table's structure and try again."
        },
        "commands.paste.alertCellSelectionError": {
            "en": "You are trying to paste table data into an non-rectangular cell selection.<br>Please choose a rectangular cell selection and try again."
        },
        "plugins.editTools.cutTitle": {
            "en": "Cut (Ctrl+X)"
        },
        "plugins.editTools.cutText": {
            "en": "Cuts the currently selected text and puts it in to the clipboard."
        },
        "plugins.editTools.copyTitle": {
            "en": "Copy (Ctrl+C)"
        },
        "plugins.editTools.copyText": {
            "en": "Copies the currently selected text to the clipboard."
        },
        "plugins.editTools.pasteDefaultTitle": {
            "en": "Paste (Ctrl+V)"
        },
        "plugins.editTools.pasteDefaultText": {
            "en": "Pastes the clipboard content with the default paste method."
        },
        "plugins.editTools.pastePlainTextTitle": {
            "en": "Paste as text"
        },
        "plugins.editTools.pastePlainTextText": {
            "en": "Pastes the clipboard content as plain text."
        },
        "plugins.editTools.pasteWordHtmlTitle": {
            "en": "Paste from Word"
        },
        "plugins.editTools.pasteWordHtmlText": {
            "en": "Pastes the clipboard content from Word, applying some cleanup."
        },
        "plugins.findReplace.findTitle": {
            "en": "Find"
        },
        "plugins.findReplace.replaceTitle": {
            "en": "Replace"
        },
        "plugins.findReplace.findReplaceTitle": {
            "en": "Find/Replace"
        },
        "plugins.findReplace.replaceAllTitle": {
            "en": "Replace all"
        },
        "plugins.findReplace.alertNoMoreResults": {
            "en": "No more occurences of '{0}' found in document.<br>Search will be continued from the top."
        },
        "plugins.findReplace.alertReplaceResults": {
            "en": "Text '{0}' has been replaced {1} time(s)."
        },
        "plugins.findReplace.alertNotFound": {
            "en": "Text '{0}' not found."
        },
        "plugins.findReplace.alertIEProblems": {
            "en": "Could not replace due to limited functionality in Internet Explorer."
        },
        "plugins.findReplace.tooltipFind": {
            "en": "Finds a text fragment in the text being edited."
        },
        "plugins.findReplace.tooltipReplace": {
            "en": "Replaces a text fragment with another fragment."
        },
        "plugins.format.boldTitle": {
            "en": "Bold (Ctrl+B)"
        },
        "plugins.format.boldText": {
            "en": "Make the selected text bold."
        },
        "plugins.format.italicTitle": {
            "en": "Italic (Ctrl+I)"
        },
        "plugins.format.italicText": {
            "en": "Make the selected text italic."
        },
        "plugins.format.underlineTitle": {
            "en": "Underline (Ctrl+U)"
        },
        "plugins.format.underlineText": {
            "en": "Underline the selected text."
        },
        "plugins.image.alignMenu": {
            "en": "Image alignment"
        },
        "plugins.image.alignLeft": {
            "en": "Left"
        },
        "plugins.image.alignRight": {
            "en": "Right"
        },
        "plugins.image.alignNone": {
            "en": "None"
        },
        "plugins.image.alignInherit": {
            "en": "Inherit"
        },
        "plugins.image.imageTitle": {
            "en": "Image"
        },
        "plugins.image.noAlign": {
            "en": "No alignment"
        },
        "plugins.image.properties": {
            "en": "Image Properties"
        },
        "plugins.justify.leftTitle": {
            "en": "Align Text Left"
        },
        "plugins.justify.leftText": {
            "en": "Align text to the left."
        },
        "plugins.justify.centerTitle": {
            "en": "Center Text"
        },
        "plugins.justify.centerText": {
            "en": "Center text in the editor."
        },
        "plugins.justify.rightTitle": {
            "en": "Align Text Right"
        },
        "plugins.justify.rightText": {
            "en": "Align text to the right."
        },
        "plugins.link.linkTitle": {
            "en": "Hyperlink"
        },
        "plugins.link.linkText": {
            "en": "Create or modify a hyperlink."
        },
        "plugins.link.unlinkTitle": {
            "en": "Unlink"
        },
        "plugins.link.unlinkText": {
            "en": "Remove an existing hyperlink from the selected text."
        },
        "plugins.link.anchorTitle": {
            "en": "Anchor"
        },
        "plugins.link.anchorText": {
            "en": "Add or edit an anchor."
        },
        "plugins.list.ulTitle": {
            "en": "Bullet List"
        },
        "plugins.list.ulText": {
            "en": "Start a bulleted list."
        },
        "plugins.list.olTitle": {
            "en": "Numbered List"
        },
        "plugins.list.olText": {
            "en": "Start a numbered list."
        },
        "plugins.list.indentTitle": {
            "en": "Indent"
        },
        "plugins.list.indentText": {
            "en": "Indents the selected paragraph(s) or list item(s)."
        },
        "plugins.list.outdentTitle": {
            "en": "Outdent"
        },
        "plugins.list.outdentText": {
            "en": "Outdents the current paragraph(s) or list item(s)."
        },
        "plugins.miscTools.sourceEditTitle": {
            "en": "Source Edit"
        },
        "plugins.miscTools.sourceEditText": {
            "en": "Switch to source editing mode."
        },
        "plugins.miscTools.specialCharsTitle": {
            "en": "Special Characters"
        },
        "plugins.miscTools.specialCharsText": {
            "en": "Insert a special character."
        },
        "plugins.paraFormat.defaultP": {
            "en": "Paragraph"
        },
        "plugins.paraFormat.defaultH1": {
            "en": "Heading 1"
        },
        "plugins.paraFormat.defaultH2": {
            "en": "Heading 2"
        },
        "plugins.paraFormat.defaultH3": {
            "en": "Heading 3"
        },
        "plugins.spellCheck.spellChecking": {
            "en": "Spell Checking"
        },
        "plugins.spellCheck.noMistakeAlert": {
            "en": "No spelling mistakes found."
        },
        "plugins.spellCheck.failAlert": {
            "en": "Spell checking failed."
        },
        "plugins.spellCheck.noSuggestions": {
            "en": "No suggestions available"
        },
        "plugins.subSuperScript.subTitle": {
            "en": "Subscript"
        },
        "plugins.subSuperScript.subText": {
            "en": "Formats the selected text as subscript."
        },
        "plugins.subSuperScript.superTitle": {
            "en": "Superscript"
        },
        "plugins.subSuperScript.superText": {
            "en": "Formats the selected text as superscript."
        },
        "plugins.table.tableTitle": {
            "en": "Table"
        },
        "plugins.table.tableText": {
            "en": "Creates a new table or edits the properties of an existing table."
        },
        "plugins.table.cellTitle": {
            "en": "Cell"
        },
        "plugins.table.cellText": {
            "en": "Edit the properties of a selected cell."
        },
        "plugins.table.insertAboveTitle": {
            "en": "Insert Above"
        },
        "plugins.table.insertAboveText": {
            "en": "Insert a new row above the current row."
        },
        "plugins.table.insertBelowTitle": {
            "en": "Insert Below"
        },
        "plugins.table.insertBelowText": {
            "en": "Insert a new row below the current row."
        },
        "plugins.table.deleteRowTitle": {
            "en": "Delete Row"
        },
        "plugins.table.deleteRowText": {
            "en": "Delete the current row."
        },
        "plugins.table.insertLeftTitle": {
            "en": "Insert Left"
        },
        "plugins.table.insertLeftText": {
            "en": "Insert a new column to the left of the current column."
        },
        "plugins.table.insertRightTitle": {
            "en": "Insert Right"
        },
        "plugins.table.insertRightText": {
            "en": "Insert a new column to the right of the current column."
        },
        "plugins.table.deleteColumnTitle": {
            "en": "Delete Column"
        },
        "plugins.table.deleteColumnText": {
            "en": "Delete the current column."
        },
        "plugins.table.cellProps": {
            "en": "Cell properties"
        },
        "plugins.table.mergeCells": {
            "en": "Merge cells"
        },
        "plugins.table.mergeRight": {
            "en": "Merge right"
        },
        "plugins.table.mergeDown": {
            "en": "Merge down"
        },
        "plugins.table.splitHor": {
            "en": "Split cell horizontally"
        },
        "plugins.table.splitVert": {
            "en": "Split cell vertically"
        },
        "plugins.table.cell": {
            "en": "Cell"
        },
        "plugins.table.column": {
            "en": "Column"
        },
        "plugins.table.row": {
            "en": "Row"
        },
        "plugins.table.insertBefore": {
            "en": "Insert before"
        },
        "plugins.table.insertAfter": {
            "en": "Insert after"
        },
        "plugins.table.remove": {
            "en": "Remove"
        },
        "plugins.table.tableProps": {
            "en": "Table properties"
        },
        "plugins.table.removeTable": {
            "en": "Remove table"
        },
        "plugins.table.nestedTable": {
            "en": "Create nested table"
        },
        "plugins.table.selectRow": {
            "en": "Select entire row"
        },
        "plugins.table.selectColumn": {
            "en": "Select entire column"
        },
        "plugins.table.insertParaBefore": {
            "en": "Insert paragraph before table"
        },
        "plugins.table.insertParaAfter": {
            "en": "Insert paragraph after table"
        },
        "plugins.table.createTable": {
            "en": "Create table"
        },
        "plugins.table.ensureparagraph": {
          "en": "Ensure Paragraph"
        },
        "plugins.table.modifytableandcell": {
          "en": "Edit Table and Cell Properties"
        },
        "plugins.table.exitTableEditing": {
          "en": "Exit Table Editing"
        },
        "plugins.undoRedo.undoTitle": {
            "en": "Undo"
        },
        "plugins.undoRedo.undoText": {
            "en": "Undo the last change."
        },
        "plugins.undoRedo.redoTitle": {
            "en": "Redo"
        },
        "plugins.undoRedo.redoText": {
            "en": "Redo previously undone changes."
        },
        "plugins.fullscreen.toggleTitle": {
            "en": "Fullscreen"
        },
        "plugins.fullscreen.toggleText": {
            "en": "Toggle fullscreen mode."
        },
        "plugins.fullscreen.startTitle": {
            "en": "Fullscreen"
        },
        "plugins.fullscreen.startText": {
            "en": "Start fullscreen mode."
        },
        "plugins.fullscreen.finishTitle": {
            "en": "Fullscreen"
        },
        "plugins.fullscreen.finishText": {
            "en": "Exit fullscreen mode."
        },
        "plugins.control.closeTitle": {
            "en": "Close"
        },
        "plugins.control.closeText": {
            "en": "Finish editing the text."
        },
        "plugins.control.saveTitle": {
            "en": "Save"
        }
};
