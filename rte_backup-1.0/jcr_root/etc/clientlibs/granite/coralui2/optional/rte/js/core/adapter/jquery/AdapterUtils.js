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

CUI.rte.AdapterUtils = function($) {

    return {

        isArray: function(obj) {
            return $.isArray(obj);
        },

        isString: function(obj) {
            return typeof obj === "string";
        },

        apply: function(obj, config, defaults) {
            return $.extend(obj, config, defaults);
        },

        getPagePosition: function(dom) {
           var pos = $(dom).offset();
           return [ pos.left, pos.top ];
        },

        getWidth: function(dom) {
            return $(dom).width();
        },

        getHeight: function(dom) {
            return $(dom).height();
        },

        jsonDecode: function(str) {
            return $.parseJSON(str);
        },

        getBlankImageUrl: function() {
            return CUI.rte.Theme.BLANK_IMAGE;
        }

    };

}(window.jQuery);