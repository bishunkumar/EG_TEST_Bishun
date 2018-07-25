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

    var sel = CUI.rte.Selection;
    var com = CUI.rte.Common;
    var fsh = CUI.rte.ui.cui.FullScreenHelper;

    function getBookmark(rte) {
        var context = rte.editorKernel.getEditContext();
        return sel.createSelectionBookmark(context);
    }

    function selectBookmark(rte, bookmark) {
        var context = rte.editorKernel.getEditContext();
        sel.selectBookmark(context, bookmark);
    }

    function calcEditorHeight($toolbar) {
        var vpHeight = $(window).innerHeight();
        return vpHeight - $toolbar.outerHeight();
    }

    var prevOverflow = null;

    var prevScroll = 0;

    CUI.rte.ui.cui.DefaultFullScreenAdapter = new Class({

        extend: CUI.rte.commands.FullScreenAdapter,

        toString: "DefaultFullScreenAdapter",

        baseRTE: undefined,

        fullScreenRTE: undefined,

        $container: undefined,

        $editor: undefined,

        $sourceEditor: undefined,

        construct: function(config) {
            this.baseRTE = config.rteInstance;
        },

        adjustWrapper: function ($currentToolbar) {
            var $wrapper = this.$container.find("div.coral-RichText-editorWrapper");
            var $ui = this.$container.find("div.coral-RichText-ui");
            if (!$currentToolbar) {
                var ek = this.fullScreenRTE.editorKernel;
                $currentToolbar = CUI.rte.UIUtils.getToolbar($ui, ek.getToolbar().tbType);
            }
            if (!$currentToolbar || !this.isFullScreen()) {
                return;
            }
            var tbHeight = $currentToolbar.outerHeight();
            $wrapper.offset({
                top: tbHeight,
                left: 0
            });
            $wrapper.outerHeight(calcEditorHeight($currentToolbar));
        },

        _handleEscape: function() {
            this.finish();
            return true;
        },

        _dropFullScreenMode: function() {
            if (this.touchScrollLimiter) {
                this.touchScrollLimiter.detach();
                this.touchScrollLimiter = undefined;
            }
            if (!com.ua.isTouch) {
                $(window).off("resize.rteFSResize");
                var $body = $(document.body);
                $body.scrollTop(prevScroll);
                $body.css("overflow", prevOverflow);
                prevOverflow = null;
                prevScroll = 0;
            }
            var $container = fsh.getContainer();
            $container.off(".rteOOA");
            fsh.exit();
        },

        /**
         * Finishes editing from full screen mode (iOS only) - the current content of the
         * full screen editor is transferred to the base RTE, which then is regularily gets
         * "finished".
         *
         * @private
         */
        _leaveFromFullScreenMode: function(isCancelled) {
            var content = this.fullScreenRTE.getContent();
            this.fullScreenRTE.suspend();
            this.fullScreenRTE = undefined;
            this._dropFullScreenMode();
            if (!isCancelled) {
                this.baseRTE.reactivate(content);
            }
            this.baseRTE.finish(isCancelled);
            this.baseRTE = undefined;
        },

        start: function() {
            var isTouch = com.ua.isTouch;
            var bkm = getBookmark(this.baseRTE);
            var content = this.baseRTE.getContent();
            var undoConfig = this.baseRTE.getUndoConfig();
            var tbType = "fullscreen";
            this.baseRTE.suspend();
            this.$container = fsh.start();

            // either copy UI from base instance or create new one ...
            var $editable = this.baseRTE.$element;
            var $ui;
            var $uiSource = CUI.rte.UIUtils.getUIContainer($editable);
            if ($uiSource) {
                $ui = $uiSource.clone(false);
            } else {
                $ui = $("<div/>");
                $ui.addClass("coral-RichText-ui coral--dark");
            }
            // ... and determine the correct config object from the copied UI
            var $toolbar = CUI.rte.UIUtils.getToolbar($editable, tbType);
            var config = CUI.rte.Utils.copyObject(this.baseRTE.originalConfig);
            if ($toolbar && ($toolbar.length > 0)) {
                var features = CUI.rte.ConfigUtils.createFeaturesFromToolbar(this.$container,
                        $toolbar);
                config = CUI.rte.ConfigUtils.mergeConfigAndFeatures(config, features);
            }

            var $wrapper = $("<div/>");
            $wrapper.addClass("coral-RichText-editorWrapper");
            this.$editor = $("<div/>");
            this.$editor.addClass("coral-RichText-editor");
            this.$sourceEditor = $("<textarea/>");
            this.$sourceEditor.addClass("coral-RichText-sourceEditor");
            this.$sourceEditor.hide();
            this.$container.append($ui);
            this.$container.append($wrapper);
            $wrapper.append(this.$editor);
            $wrapper.append(this.$sourceEditor);
            var self = this;
            this.$sourceEditor.fipo("tap.rte-" + this.id, "click.rte-" + this.id,
                function(e) {
                    e.stopPropagation();
                });
            // need to prevent both mousedown and click events from bubbling up to
            // avoid focus loss on desktop browsers
            this.$container.fipo("touchstart.rteOOA", "mousedown.rteOOA click.rteOOA",
                    function(e) {
                        var target = e.target;
                        var $target = $(target);
                        if ((target === self.$container[0]) || (target === $wrapper[0])
                                || $target.hasClass("coral-RichText-toolbar")) {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                    });
            this.fullScreenRTE = new CUI.RichText({
                "element": this.$editor,
                "initialContent": content,
                "preventCaretInitialize": true,
                "$ui": $ui,
                "isFullScreen": true,
                "tbType": tbType,
                "autoConfig": true,
                "fullScreenAdapter": this,
                "listeners": {
                    "beforeEscape": CUI.rte.Utils.scope(this._handleEscape, this),
                    // handler that ensure fullscreen mode gets hidden if RTE is left
                    // in fullscreen mode (iOS only)
                    "beforeFinish": function() {
                        self._leaveFromFullScreenMode();
                    },
                    "beforeCancel": function() {
                        self._leaveFromFullScreenMode(true);
                    }
                }
            });
            this.fullScreenRTE.start(config);
            this.fullScreenRTE.setUndoConfig(undoConfig);
            this.fullScreenRTE.focus();
            selectBookmark(this.fullScreenRTE, bkm);
            // position toolbar on the top of the screen (works for desktop only, need
            // to simulate this for touch)
            var $tb = CUI.rte.UIUtils.getToolbar($ui, "fullscreen");
            this.adjustWrapper($tb);
            if (isTouch) {
                this.touchScrollLimiter = new CUI.rte.ui.cui.TouchScrollLimiter();
                this.touchScrollLimiter.attach(this.$container, $wrapper, this.$editor);
            }
            var ek = this.fullScreenRTE.editorKernel;
            if (!isTouch) {
                $(window).on("resize.rteFSResize", function(e) {
                    //adjust wrapper according to active toolbar
                    self.adjustWrapper(CUI.rte.UIUtils.getToolbar($ui, ek.getToolbar().tbType));
                });
                var $body = $(document.body);
                prevScroll = $body.scrollTop();
                $body.scrollTop(0);
                prevOverflow = $body.css("overflow");
                $body.css("overflow", "hidden");
            }
            var context = ek.getEditContext();
            context.setState("CUI.touchScrollLimiter", this.touchScrollLimiter);
            return ek;
        },

        // Keeping this function for backward-compatibility
        toggleSourceEdit: function(sourceEditMode){
            this.fullScreenRTE.toggleSourceEdit(sourceEditMode);
        },

        finish: function() {
            var bkm = getBookmark(this.fullScreenRTE);
            var content = this.fullScreenRTE.getContent();
            var undoConfig = this.fullScreenRTE.getUndoConfig();
            this.fullScreenRTE.suspend();
            this.fullScreenRTE = undefined;
            this._dropFullScreenMode();
            this.baseRTE.reactivate(content);
            this.baseRTE.setUndoConfig(undoConfig);
            this.baseRTE.focus();
            selectBookmark(this.baseRTE, bkm);
            return this.baseRTE.editorKernel;
        },

        isFullScreen: function() {
            return fsh.isActive();
        }

    });

})(window.jQuery);