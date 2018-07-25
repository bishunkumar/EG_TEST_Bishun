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
 * @class CUI.rte.plugins.ImagePlugin
 * @extends CUI.rte.plugins.Plugin
 * <p>This class implements the editing of image properties as a plugin.</p>
 * <p>The plugin ID is "<b>image</b>".</p>
 * <p><b>Features</b></p>
 * <ul>
 *   <li><b>image</b> - adds context menu entries for setting some image properties
 *     (currently only alignment is supported)</li>
 * </ul>
 * @since 5.3
 */
CUI.rte.plugins.ImagePlugin = new Class({

    toString: "ImagePlugin",

    extend: CUI.rte.plugins.Plugin,


    getFeatures: function() {
        return [ "image" ];
    },

    notifyPluginConfig: function(pluginConfig) {
        this.config = pluginConfig;
    },

    initializeUI: function(tbGenerator) {
        // nothing to do yet, as we are not using the toolbar for images
    },

    execute: function(pluginCommand, value, envOptions) {
        // todo implement
        if(pluginCommand == "imageProps"){

            var context = envOptions.editContext;
            var selectionDef = envOptions.selectionContext;
            var image = CUI.rte.commands.Image.getSelectedImage(selectionDef);
            this.savedRange = envOptions.savedRange;

            var propConfig = {
                "cmd": "image",
                "editContext": context,
                "execFn": CUI.rte.Utils.scope(this.execModifyImage, this),
                "image": image
            };
            var dm = this.editorKernel.getDialogManager();
            var dialog = dm.create(CUI.rte.ui.DialogManager.DLG_IMAGEPROPS, propConfig);
            dm.prepareShow(dialog);
            dm.show(dialog);
        }
        else if (pluginCommand == "image") {
            this.editorKernel.relayCmd("image", value);
        }
    },

    /**
     * @private
     */
    execModifyImage: function(cmd, imageConfig) {
        if (cmd && imageConfig) {
            var context = this.editorKernel.getEditContext();
            this.editorKernel.selectQualifiedRangeBookmark(context, this.savedRange);
            this.editorKernel.relayCmd(cmd, imageConfig);
        }
    },

    updateState: function(selDef) {
        // must be overridden by implementing plugins
    },

    handleContextMenu: function(menuBuilder, selDef, context) {
        var subItems;
        var ui = CUI.rte.ui;
        if (this.isFeatureEnabled("image")) {
            if (this.editorKernel.queryState("image")) {
                subItems = [
                    {
                        "text": CUI.rte.Utils.i18n("plugins.image.alignLeft"),
                        "plugin": this,
                        "cmd": "image",
                        "cmdValue": {
                            "style.float": "left"
                        }
                    }, {
                        "text": CUI.rte.Utils.i18n("plugins.image.alignRight"),
                        "plugin": this,
                        "cmd": "image",
                        "cmdValue": {
                            "style.float": "right"
                        }
                    }, {
                        "text": CUI.rte.Utils.i18n("plugins.image.alignNone"),
                        "plugin": this,
                        "cmd": "image",
                        "cmdValue": {
                            "style.float": "none"
                        }
                    }, {
                        "text": CUI.rte.Utils.i18n("plugins.image.noAlign"),
                        "plugin": this,
                        "cmd": "image",
                        "cmdValue": {
                            "style.float": ""
                        }
                    }
                ];
                menuBuilder.addItem(menuBuilder.createItem({
                    "text": CUI.rte.Utils.i18n("plugins.image.alignMenu"),
                    "subItems": subItems
                }));
                menuBuilder.addItem(menuBuilder.createItem({
                    "text": CUI.rte.Utils.i18n("plugins.image.properties"),
                    "plugin": this,
                    "cmd": "imageProps"
                }));
            }
        }
    }

});


// register plugin
CUI.rte.plugins.PluginRegistry.register("image", CUI.rte.plugins.ImagePlugin);