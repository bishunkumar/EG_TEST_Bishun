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

    CUI.rte.ui.cui.LinkBaseDialog = new Class({

        extend: CUI.rte.ui.cui.AbstractDialog,

        toString: "LinkBaseDialog",

        getDataType: function() {
            return "link";
        },

        handleLinkSuccess: function(href){
            if(href){
                this.$hrefField.val(href);
            }
        },

        // config.linkOptionsLoader - to load options for path browser to complete internal links
        initialize: function(config) {
            this.config = config;
            var self = this;

            // Initialize PathBrowser
            $("span.coral-RichText-pathbrowser").pathBrowser({
                optionLoader: config.linkOptionsLoader
            });

            this.$hrefField =
                    this.$dialog.find(".coral-RichText-pathbrowser input[type='text']");
            this.$searchButton = this.$dialog.find("button[data-type='search']");

            var wizard = CUI.rte.ui.cui.LinkBrowserBuilder.create();
            if (wizard) {
                var context = this.editorKernel.getEditContext();
                var scrollLimiter = context.getState("CUI.touchScrollLimiter");
                this.$searchButton.on("click", function(ev){
                    var initialVal = self.$hrefField.val();
                    // pass callback functions to call on linkage/success
                    wizard.initialize({
                        onLinkSuccess : function(href){
                            self.handleLinkSuccess(href);
                        },
                        initialSearchPath: initialVal,
                        dialog: self.$dialog,
                        dialogRef: self,
                        editorKernel: self.editorKernel,
                        scrollLimiter: scrollLimiter
                    });
                });
            } else {
                this.$searchButton.closest(".coral-RichText-dialog-column")
                        .addClass("is-hidden");
            }

            // Cancel all keydown events
            this.$dialog.on("keydown", this.handleKeyDown);
        },

        onShow: function() {
            if (!CUI.rte.Common.ua.isTouch) {
                var self = this;
                window.setTimeout(function() {
                    self.$hrefField.focus();
                }, 1);
            } /* else {
                this.$hrefField.focus();
                this.$hrefField[0].select();
            } */
        },

        handleKeyDown: function(event){
            event.stopPropagation();
        },

        preprocessModel: function() {
            if (this.objToEdit && this.objToEdit.dom) {
                this.objToEdit.href = CUI.rte.HtmlRules.Links.getLinkHref(
                    this.objToEdit.dom);
                var com = CUI.rte.Common;
                var attribNames = com.getAttributeNames(this.objToEdit.dom, false,
                    function(dom, attribName, attribNameLC) {
                        // exclude href, rte_href & target from generic attribute handling,
                        // as they are handled explicitly and not generically
                        return attribNameLC == com.HREF_ATTRIB || attribNameLC == "href"
                            || attribNameLC == "target";
                    });
                for (var i = 0; i < attribNames.length; i++) {
                    var attribName = attribNames[i];
                    var value = com.getAttribute(this.objToEdit.dom, attribName);
                    if (typeof value !== 'undefined') {
                        this.objToEdit.attributes[attribName] = value;
                    }
                }
            }
        },

        dlgFromModel: function() {

            var value;
            if (this.$hrefField) {
                value = "";
                if (this.objToEdit) {
                    var href = this.objToEdit.href;
                    if (href) {
                        value = href;
                    }
                }
                this.$hrefField.val(value);
            }
            var targetBlankField = this.getFieldByType("targetBlank");
            if (targetBlankField) {
                var target = (this.objToEdit && this.objToEdit.target
                    ? this.objToEdit.target.toLowerCase() : null);
                targetBlankField.val([ target == "_blank" ? "on" : "off" ]);
            }
            var titleField = this.getFieldByType("title");
            if(titleField){
                value = (this.objToEdit && this.objToEdit.attributes
                        && this.objToEdit.attributes["title"]
                    ? this.objToEdit.attributes["title"] : null);
                titleField.val( value );
            }
        },

        validate: function() {

            if (this.$hrefField) {
                var href = this.$hrefField.val();
                if (href && (href.length > 0)) {
                    return true;
                }
            }
            return false;
        },

        dlgToModel: function() {
            if (this.objToEdit) {

                if (this.$hrefField) {
                    var href = this.$hrefField.val();
                    if (href) {
                        this.objToEdit.href = href;
                    }
                }
                var targetBlankField = this.getFieldByType("targetBlank");
                if (targetBlankField) {
                    var blankValue = targetBlankField.is(":checked");
                    if (blankValue) {
                        this.objToEdit.target = "_blank";
                    } else {
                        this.objToEdit.target = null;
                    }
                }
                var titleField = this.getFieldByType("title");
                if (titleField){
                    var titleVal = titleField.val();
                    if (titleVal != null) {
                        this.objToEdit.attributes["title"] = titleVal;
                    }
                }
            }
        },

        postprocessModel: function() {
            var linkRules = this.getParameter("linkRules");
            if (linkRules) {
                linkRules.applyToObject(this.objToEdit);
            }
        }

    });


})(window.jQuery);