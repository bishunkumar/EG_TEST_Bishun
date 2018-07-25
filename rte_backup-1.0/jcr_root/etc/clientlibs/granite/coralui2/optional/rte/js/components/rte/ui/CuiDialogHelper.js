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

(function($) {

    var TYPES = {
        "rtelinkdialog": CUI.rte.ui.cui.LinkBaseDialog
    };

    CUI.rte.ui.cui.CuiDialogHelper = new Class({

        toString: "CuiDialogHelper",

        extend: CUI.rte.ui.DialogHelper,

        /**
         * @protected
         * @ignore
         */
        instantiateDialog: function(dialogConfig) {
            var type = dialogConfig.type;
            if (!TYPES.hasOwnProperty(type)) {
                throw new Error("Unknown dialog type: " + type);
            }
            var cls = TYPES[type];
            var context = this.editorKernel.getEditContext();
            var $editable = $(context.root);
            var $container = CUI.rte.UIUtils.getUIContainer($editable);
            var dlg = new cls();
            dlg.attach(dialogConfig, $container, this.editorKernel);
            return dlg;
        },

        createItem: function(type, name, label) {
            return { };
        },

        getItemType: function(item) {
            return "unknown";
        },

        getItemName: function(item) {
            if (!item.id) {
                item.id = "id-" + new Date().getTime();
            }
            return item.id;
        },

        getItemValue: function(item) {
            return item.value;
        },

        setItemValue: function(item, value) {
            item.value = value;
        },

        calculateInitialPosition: function() {
            // not required here - the position is managed by CUI.rte.ui.cui.PopupManager
        }

    });

})(window.jQuery);