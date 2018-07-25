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


    CUI.rte.ui.cui.AbstractLinkWizard = new Class({

        toString: "AbstractLinkWizard",

        nextLabel: "Link",

        backLabel: "Back",

        currentSelection: null,

        initialPath: "/content",

        options: null,

        $wizard: null,

        originalWindowScrollTop: null,

        getSearchContent: function(path){
            return undefined;
        },

        _addEventListeners: function(){

            var that = this;
            var startY;
            var $coralRichTextDialogContainer = $(".coral-RichText-linkDialog-container");
            // handling click events on cards
            $(document).on("click.coral-RichText-linkwizard-collection-item",".coral-RichText-linkwizard-collection-item",function(event){
                var target = event.target;
                var article = $(target).closest("article");
                if(article){
                    var path = article.data("path");
                    that.currentSelection = path;
                    that.handleNavigation(path);
                }
            });

            // back and link buttons
            this.$wizard.find(".coral-Wizard-nav .coral-Button.js-coral-Wizard-step-control").on("click", function(event){

                if( $(this).hasClass("back") ){
                    // Back
                    that.removeWizard();
                }
                else{
                    // Link
                    // Sets the dialog's hrefField to currentSelection using callback
                    var path = that.$wizard.find("div.coral-RichText-linkwizard-content-path").data("coralRichtextLinkwizardContentPath");
                    that.currentSelection = path;
                    if(that.options && that.options.onLinkSuccess && typeof that.options.onLinkSuccess === 'function'){
                        that.options.onLinkSuccess.call( that.options.dialog, path);
                    }
                    // Hide
                    that.removeWizard();
                }
                if (CUI.rte.Common.ua.isTouch) {
                    // Scrolling in the wizard might have scrolled the underlying page on iPad.
                    // Restore original window position.
                    $(window).scrollTop(that.originalWindowScrollTop);
                }
            });

            // Handle scroll off limits on ipad
            $coralRichTextDialogContainer.on("touchstart", function(event){
                startY = event.originalEvent.pageY;
            });
            $coralRichTextDialogContainer.on("touchmove", function(event){
                var deltaY = event.originalEvent.pageY - startY;
                if (deltaY < 0 && this.scrollTop + this.clientHeight >= this.scrollHeight) {
                    // Scrolling down when at bottom
                    event.preventDefault();
                    event.stopPropagation();
                } else if (deltaY > 0 && this.scrollTop <= 0) {
                    // Scrolling up when at top. Set window scroll top to 0 so as to bring wizard's link/cancel
                    // button within screen
                    $(window).scrollTop(0);
                    event.preventDefault();
                    event.stopPropagation();
                }
            });

        },

        // options.onLinkSuccess - called when link button is clicked
        // options.initialSearchPath - open the search link wizard with this path
        initialize: function(options){
            this.originalWindowScrollTop = window.scrollY;
            this.options = options;
            this.emptyWizard = $(CUI.rte.Templates["wizard-searchlink"]());
            this.$wizard = this.emptyWizard.flexWizard();
            $(document.body).append(this.$wizard);
            this._addEventListeners();
            this.showWizard();
            // Initialize by loading data
            var initialSearchPath = options.initialSearchPath || "";
            //handle external links
            initialSearchPath = initialSearchPath.indexOf("/content") == 0 ? initialSearchPath : "";
            this.handleNavigation(initialSearchPath);
        },

        handleNavigation: function(path){

            if(!path || path.length==0)
                path = this.initialPath;

            var that = this;
            var promise = this.getSearchContent(path);
            if(promise){
                promise.done(function(html){
                    if(that.$wizard){
                        var contentArea = that.$wizard.find(
                                "div.coral-RichText-linkDialog-cardContainer");
                        contentArea.html("");
                        var content = $.parseHTML(html.trim());
                        contentArea.append($(content).html());

                        // Layout the card view
                        CUI.CardView.get($(".coral-RichText-linkwizard-collection")).layout();

                        // Initialize the PullDown
                        var $pageNavigationPopover = that.$wizard.find("#pageNavigationPopover").popover();
                        // Handle selection events
                        that._handleSelectListEvents($pageNavigationPopover);
                    }
                });
            }
        },

        // Navigating via pulldown
        _handleSelectListEvents: function($pageNavigationPopover){
            var that = this;
            //$("div.link-card-container nav.pulldown div.popover a").on("click", function(ev){
            $pageNavigationPopover.find("li a").on("click", function(ev){

                var href = $(this).data("href");
                if(href){
                    that.handleNavigation(href);
                }
            });

        },

        showWizard: function(){
            if(this.$wizard){
                this.$wizard.removeClass("is-hidden");
                if (this.options.scrollLimiter) {
                    this.options.scrollLimiter.suspend();
                }
                this.options.dialogRef.suspend(true);
                var ek = this.options.editorKernel;
                var context = ek.getEditContext();
                CUI.rte.Selection.resetSelection(context, "start");
                // SafariMobile issue: If the edited content resides in an iframe, we need
                // to explicitly transfer the focus into the iframe before blurring it.
                // Similar to the workaround that is used in EditorKernel's keydown handler
                // on document
                var com = CUI.rte.Common;
                if (com.ua.isTouch) {
                    if (com.isTag(context.win.frameElement, "iframe")) {
                        // console.log("using focus transfer workaround.")
                        context.win.focus();
                    }
                }
                ek.blurFocus();
            }
        },


        removeWizard: function(){
            // instead of hiding, remove it from DOM
            var wizard = $(document.body).find(".coral-RichText-linkDialog-container");
            wizard.remove();
            if (this.options.scrollLimiter) {
                this.options.scrollLimiter.reactivate();
            }
            this.options.dialogRef.suspend(false);
        }


    });

    // No Default Link Search Wizard in CUI, overridden in CQ to provide a default search link wizard implementation
    CUI.rte.ui.cui.LinkBrowserBuilder = {

        create: function(){
            return undefined;
        }
    };

})(window.jQuery);