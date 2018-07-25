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
 * @class CUI.rte.ui.TbStyleSelector
 * @extends CUI.rte.ui.TbElement
 * @private
 * This class represents a style selecting element for use in
 * {@link CUI.rte.ui.ToolbarBuilder}.
 */
CUI.rte.ui.TbStyleSelector = new Class({

    toString: "TbStyleSelector",

    extend: CUI.rte.ui.TbElement,

    styleSelector: null,

    styles: null,

    _init: function(id, plugin, toggle, tooltip, css, cmdDef, styles) {
        this.inherited(arguments);
        this.styles = styles;
    },

    /**
     * Creates HTML code for rendering the options of the style selector.
     * @return {String} HTML code containing the options of the style selector
     * @private
     */
    createStyleOptions: function() {
        var htmlCode = "<option value=\"\">[None]</option>";
        if (this.styles) {
            var styleCnt = this.styles.length;
            for (var s = 0; s < styleCnt; s++) {
                var styleToAdd = this.styles[s];
                var className = styleToAdd.cssName;
                var text = styleToAdd.text;
                htmlCode += "<option value=\"" + className + "\">" + text + "</option>";
            }
        }
        return htmlCode;
    },

    notifyToolbar: function(toolbar) {
        this.toolbar = toolbar;
    },

    getToolbar: function() {
        return CUI.rte.ui.ToolbarBuilder.STYLE_TOOLBAR;
    },

    initializeSelector: function() {
        // must be overridden by implementing classes
        throw new Error("TbStyleSelector#initializeSelector is not implemented.");
    },

    getSelectorDom: function() {
        // must be overridden by implementing classes
        throw new Error("TbStyleSelector#getSelectorDom is not implemented.");
    },

    getSelectedStyle: function() {
        // must be overridden by implementing classes
        throw new Error("TbStyleSelector#getSelectedStyle is not implemented.");
    },

    selectStyles: function(styles, selDef) {
        // must be overridden by implementing classes
        throw new Error("TbStyleSelector#selectStyles is not implemented.");
    }

});