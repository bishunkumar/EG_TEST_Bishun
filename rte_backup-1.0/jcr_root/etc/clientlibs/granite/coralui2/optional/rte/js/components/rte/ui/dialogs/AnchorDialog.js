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

    CUI.rte.ui.cui.AnchorDialog = new Class({

        extend: CUI.rte.ui.cui.AbstractBaseDialog,

        toString: "AnchorDialog",

        $nameField: null,

        $removeButton: null,

        $removeColumn: null,

        name: null,

        getDataType: function() {
            return "anchor";
        },

        initialize: function(config) {
            var self = this;
            this.applyFn = config.execute;
            this.$nameField = this.$container.find("input[data-type=\"name\"]");
            this.$removeButton = this.$container.find("button[data-type=\"delete\"]");
            this.$removeColumn = this.$removeButton.parent(".rte-dialog-column");
            this.$removeButton.on("click", function(e) {
                self.hide();
                e.stopPropagation();
                config.execute(undefined);
            });
        },

        setAnchor: function(anchor) {
            if (anchor) {
                this.$removeColumn.removeClass("is-hidden");
            } else if (!this.$removeColumn.hasClass("is-hidden")) {
                this.$removeColumn.addClass("is-hidden");
            }
            this.$nameField.val(anchor.name);
        },

        getName: function() {
            var name = null;
            var nameValue = this.$nameField.val();
            if (nameValue.length > 0) {
                name = nameValue;
            }
            return name;
        },

        resetValues: function() {
            if (!this.$removeColumn.hasClass("is-hidden")) {
                this.$removeColumn.addClass("is-hidden");
            }
            this.$nameField.val("");
        },

        apply: function() {
            this.applyFn(this.getName());
            this.inherited(arguments);
        },

        onShow: function() {
            if (!CUI.rte.Common.ua.isTouch) {
                var self = this;
                window.setTimeout(function() {
                    self.$nameField.focus();
                });
            }
        }

    });

})(window.jQuery);