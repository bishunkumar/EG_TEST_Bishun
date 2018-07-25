this["CUI"] = this["CUI"] || {};
this["CUI"]["rte"] = this["CUI"]["rte"] || {};
this["CUI"]["rte"]["Templates"] = this["CUI"]["rte"]["Templates"] || {};

this["CUI"]["rte"]["Templates"]["dlg-anchor"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div data-rte-dialog=\"anchor\" class=\"coral--dark coral-Popover coral-RichText-dialog\">\r\n    <div class=\"coral-RichText-dialog-columnContainer\">\r\n        <div class=\"coral-RichText-dialog-column\">\r\n            <input type=\"text\" data-type=\"name\" value=\"\" class=\"coral-Textfield\">\r\n        </div>\r\n        <div class=\"coral-RichText-dialog-column\">\r\n            <button data-type=\"cancel\" tabindex=\"-1\" class=\"coral-RichText-dialogButton coral-Button\">\r\n                <i class=\"coral-Icon coral-Icon--close coral-Icon--sizeS\"></i>\r\n            </button>\r\n        </div>\r\n        <div class=\"coral-RichText-dialog-column is-hidden\">\r\n            <button data-type=\"delete\" tabindex=\"-1\" class=\"coral-RichText-dialogButton coral-Button coral-Button--warning\">\r\n                <i class=\"coral-Icon coral-Icon--delete coral-Icon--sizeS\"></i>\r\n            </button>\r\n        </div>\r\n        <div class=\"coral-RichText-dialog-column\">\r\n            <button data-type=\"apply\" tabindex=\"-1\" class=\"coral-RichText-dialogButton coral-Button coral-Button--primary\">\r\n                <i class=\"coral-Icon coral-Icon--check coral-Icon--sizeS\"></i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>";
  });

this["CUI"]["rte"]["Templates"]["dlg-find"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div data-rte-dialog=\"find\" class=\"coral--dark coral-Popover coral-RichText-dialog\">\r\n    <div class=\"coral-RichText-dialog-columnContainer\">\r\n        <div class=\"coral-RichText-dialog-column\">\r\n            <input type=\"text\" data-type=\"find\" value=\"\" class=\"coral-Textfield\">\r\n        </div>\r\n        <div class=\"coral-RichText-dialog-column\">\r\n            <label class=\"coral-Checkbox\">\r\n                <input type=\"checkbox\" name=\"matchCase\" value=\"false\" data-type=\"matchCase\" class=\"coral-Checkbox-input\">\r\n                <span class=\"coral-Checkbox-checkmark\"></span>\r\n                <span class=\"coral-Checkbox-description\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialogs.find.matchCase", options) : helperMissing.call(depth0, "i18n", "dialogs.find.matchCase", options)))
    + "</span>\r\n            </label>\r\n        </div>\r\n        <div class=\"coral-RichText-dialog-column\">\r\n            <button data-type=\"cancel\" tabindex=\"-1\" class=\"coral-RichText-dialogButton coral-Button\">\r\n                <i class=\"coral-Icon coral-Icon--close coral-Icon--sizeS\"></i>\r\n            </button>\r\n        </div>\r\n        <div class=\"coral-RichText-dialog-column\">\r\n            <button data-type=\"execFind\" tabindex=\"-1\" class=\"coral-RichText-dialogButton coral-Button coral-Button--primary\">\r\n                <i class=\"coral-Icon coral-Icon--search coral-Icon--sizeS coral-RichText--white\"></i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>";
  return buffer;
  });

this["CUI"]["rte"]["Templates"]["dlg-link"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div data-rte-dialog=\"link\" class=\"coral--dark coral-Popover coral-RichText-dialog\">\r\n    <div class=\"coral-RichText-dialog-columnContainer\">\r\n        <div class=\"coral-RichText-dialog-column\">\r\n            <span name=\"path-class\" data-type=\"href\" class=\"coral-TextfieldButton coral-RichText-pathbrowser\">\r\n                <input class=\"js-coral-pathbrowser-input coral-Textfield\" value=\"\" type=\"text\" name=\"path-class-dark\">\r\n            </span>\r\n        </div>\r\n        <div class=\"coral-RichText-dialog-column\">\r\n            <button type=\"button\" data-type=\"search\" class=\"coral-Button coral-RichText-dialogButton coral-RichText--white\">\r\n                <i class=\"coral-Icon coral-Icon--search coral-Icon--sizeS\"></i>\r\n            </button>\r\n        </div>\r\n        <div class=\"coral-RichText-dialog-column\"><label> <input type=\"text\" data-type=\"title\" placeholder=";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.link.titleFieldPlaceHolder", options) : helperMissing.call(depth0, "i18n", "dialog.link.titleFieldPlaceHolder", options)))
    + " class=\"coral-Form-field coral-Textfield\"> </label> </div>\r\n        <div class=\"coral-RichText-dialog-column\">\r\n            <label class=\"coral-Checkbox\">\r\n                <input type=\"checkbox\" name=\"targetBlank\" data-type=\"targetBlank\" class=\"coral-Checkbox-input\">\r\n                <span class=\"coral-Checkbox-checkmark\"></span>\r\n                <span class=\"coral-Checkbox-description\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.link.openInNewPage", options) : helperMissing.call(depth0, "i18n", "dialog.link.openInNewPage", options)))
    + "</span>\r\n            </label>\r\n        </div>\r\n        <div class=\"coral-RichText-dialog-column\">\r\n            <button type=\"button\" data-type=\"cancel\" tabindex=\"-1\" class=\"coral-RichText-dialogButton coral-Button\">\r\n                <i class=\"coral-Icon coral-Icon--close coral-Icon--sizeS\"></i>\r\n            </button>\r\n        </div>\r\n        <div class=\"coral-RichText-dialog-column\">\r\n            <button type=\"button\" data-type=\"apply\" tabindex=\"-1\" class=\"coral-RichText-dialogButton coral-Button coral-Button--primary\">\r\n                <i class=\"coral-Icon coral-Icon--check coral-Icon--sizeS\"></i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>";
  return buffer;
  });

this["CUI"]["rte"]["Templates"]["dlg-pasteplaintext"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div data-rte-dialog=\"pasteplaintext\" class=\"coral--dark coral-Popover coral-RichText-dialog coral-RichText-dialog--pasteplaintext\">\r\n    <div class=\"coral-RichText-dialog-columnContainer\">\r\n        <div class=\"coral-RichText-dialog-column\">\r\n            <textarea class=\"coral-Form-field coral-Textfield coral-Textfield--multiline\" placeholder=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.pastePlainText.pasteAreaPlaceHolder", options) : helperMissing.call(depth0, "i18n", "dialog.pastePlainText.pasteAreaPlaceHolder", options)))
    + "\" rows=\"4\"></textarea>\r\n        </div>\r\n    </div>\r\n    <div class=\"coral-RichText-dialog-columnContainer coral-RichText-dialog-columnContainer--actionButtons\">\r\n        <div class=\"coral-RichText-dialog-column\">\r\n            <button data-type=\"cancel\" tabindex=\"-1\" class=\"coral-RichText-dialogButton coral-Button\">\r\n                <i class=\"coral-Icon coral-Icon--close coral-Icon--sizeS\"></i>\r\n            </button>\r\n            <button data-type=\"apply\" tabindex=\"-1\" class=\"coral-RichText-dialogButton coral-Button coral-Button--primary\">\r\n                <i class=\"coral-Icon coral-Icon--check coral-Icon--sizeS\"></i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
  return buffer;
  });

this["CUI"]["rte"]["Templates"]["dlg-pastewordhtml"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div data-rte-dialog=\"pastewordhtml\" class=\"coral--dark coral-Popover coral-RichText-dialog coral-RichText-dialog--pastewordhtml\">\r\n    <div class=\"coral-RichText-dialog-columnContainer\">\r\n        <div class=\"coral-RichText-dialog-column\">\r\n            <iframe></iframe>\r\n        </div>\r\n    </div>\r\n    <div class=\"coral-RichText-dialog-columnContainer coral-RichText-dialog-columnContainer--actionButtons\">\r\n        <div class=\"coral-RichText-dialog-column\">\r\n            <button data-type=\"cancel\" tabindex=\"-1\" class=\"coral-RichText-dialogButton coral-Button\">\r\n                <i class=\"coral-Icon coral-Icon--close coral-Icon--sizeS\"></i>\r\n            </button>\r\n            <button data-type=\"apply\" tabindex=\"-1\" class=\"coral-RichText-dialogButton coral-Button coral-Button--primary\">\r\n                <i class=\"coral-Icon coral-Icon--check coral-Icon--sizeS\"></i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
  });

this["CUI"]["rte"]["Templates"]["dlg-replace"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div data-rte-dialog=\"replace\" class=\"coral--dark coral-Popover coral-RichText-dialog\">\r\n    <div class=\"coral-RichText-dialog-columnContainer\">\r\n        <div class=\"coral-RichText-dialog-column\">\r\n            <input type=\"text\" data-type=\"find\" value=\"\" class=\"coral-Textfield coral-RichText--long coral-RichText--narrow\">\r\n        </div>\r\n        <div class=\"coral-RichText-dialog-column\">\r\n            <button data-type=\"execFind\" tabindex=\"-1\" class=\"coral-RichText-dialogTextButton coral-Button coral-Button--primary\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.replace.findButton", options) : helperMissing.call(depth0, "i18n", "dialog.replace.findButton", options)))
    + "</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"coral-RichText-dialog-columnContainer\">\r\n        <div class=\"coral-RichText-dialog-column\">\r\n            <input type=\"text\" data-type=\"replace\" value=\"\" class=\"coral-Textfield coral-RichText--long coral-RichText--narrow\">\r\n        </div>\r\n        <div class=\"coral-RichText-dialog-column\">\r\n            <button data-type=\"execReplace\" tabindex=\"-1\" class=\"coral-RichText-dialogTextButton coral-Button coral-Button--primary\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.replace.replaceButton", options) : helperMissing.call(depth0, "i18n", "dialog.replace.replaceButton", options)))
    + "</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"coral-RichText-dialog-columnContainer\">\r\n        <div class=\"coral-RichText-dialog-fullSizeCell\">\r\n            <div class=\"coral-RichText-dialog-innerTable\">\r\n                <div class=\"coral-RichText-dialog-columnContainer\">\r\n                    <div class=\"coral-RichText-dialog-column\">\r\n                        <label class=\"coral-Checkbox\">\r\n                            <input type=\"checkbox\" name=\"matchCase\" value=\"false\" data-type=\"matchCase\" class=\"coral-Checkbox-input\">\r\n                            <span class=\"coral-Checkbox-checkmark\"></span>\r\n                            <span class=\"coral-Checkbox-description\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialogs.replace.matchcase", options) : helperMissing.call(depth0, "i18n", "dialogs.replace.matchcase", options)))
    + "</span>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"coral-RichText-dialog-column coral-RichText--right\">\r\n                        <button data-type=\"cancel\" tabindex=\"-1\" class=\"coral-RichText-dialogButton coral-Button\">\r\n                            <i class=\"coral-Icon coral-Icon--close coral-Icon--sizeS\"></i>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"coral-RichText-dialog-column\">\r\n            <button data-type=\"execReplaceAll\" tabindex=\"-1\" class=\"coral-RichText-dialogTextButton coral-Button coral-Button--primary\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.replace.replaceAllButton", options) : helperMissing.call(depth0, "i18n", "dialog.replace.replaceAllButton", options)))
    + "</button>\r\n        </div>\r\n    </div>\r\n</div>";
  return buffer;
  });

this["CUI"]["rte"]["Templates"]["dlg-specialchars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div data-rte-dialog=\"specialchars\" class=\"coral--dark coral-Popover coral-RichText-dialog coral-RichText-dialog--specialchars\">\r\n    <div class=\"coral-RichText-dialog-columnContainer\">\r\n        <div class=\"coral-RichText-dialog-column coral-Richtext-dialog-column--specialchars\">\r\n            <div class=\"coral-RichText-specialchars-selector\">\r\n                <div class=\"coral-RichText-dialog-innerTable\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"coral-RichText-dialog-columnContainer\">\r\n        <div class=\"coral-RichText-dialog-column coral-RichText--right\">\r\n            <button data-type=\"cancel\" tabindex=\"-1\" class=\"coral-RichText-dialogButton coral-Button\">\r\n                <i class=\"coral-Icon coral-Icon--close coral-Icon--sizeS\"></i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>";
  });

this["CUI"]["rte"]["Templates"]["dlg-spellchecker"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n            <div class=\"coral-RichText-dialog-column coral-RichText-dialog-column--spellchecker\">\r\n                <button ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.original), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " tabindex=\"-1\" class=\"coral-RichText-dialogButton coral-Button ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.original), {hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.display)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</button>\r\n            </div>\r\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " data-value=\""
    + escapeExpression(((stack1 = (depth0 && depth0.original)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-type=\"replaceWord\" ";
  return buffer;
  }

function program4(depth0,data) {
  
  
  return " disabled=\"disabled\" ";
  }

function program6(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

function program8(depth0,data) {
  
  
  return "is-disabled";
  }

  buffer += "<div data-rte-dialog=\"spellchecker\" class=\"coral--dark coral-Popover coral-RichText-dialog coral-RichText-dialog--spellchecker\">\r\n    <div class=\"coral-RichText-dialog-columnContainer\">\r\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.suggestions), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </div>\r\n</div>";
  return buffer;
  });

this["CUI"]["rte"]["Templates"]["dlg-tableandcellprops"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div data-rte-dialog=\"tableandcellprops\" class=\"coral--dark coral-Popover coral-RichText-dialog coral-RichText-dialog--tableandcellprops\">\r\n    <div class=\"coral-TabPanel\" data-init=\"tabs\">\r\n        <nav class=\"coral-TabPanel-navigation\">\r\n            <a class=\"coral-TabPanel-tab is-active\" data-toggle=\"tab\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableAndCellProps.cellProps", options) : helperMissing.call(depth0, "i18n", "dialog.tableAndCellProps.cellProps", options)))
    + "</a>\r\n            <a class=\"coral-TabPanel-tab\" data-toggle=\"tab\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableAndCellProps.tableProps", options) : helperMissing.call(depth0, "i18n", "dialog.tableAndCellProps.tableProps", options)))
    + "</a>\r\n        </nav>\r\n        <div class=\"coral-TabPanel-content\">\r\n            <section class=\"coral-TabPanel-pane is-active\">\r\n                <div class=\"coral-RichText-dialog-columnContainer\">\r\n                    <div class=\"coral-RichText-dialog-column coral-RichText-dialog-column--rightAligned\">\r\n                        ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableAndCellProps.width", options) : helperMissing.call(depth0, "i18n", "dialog.tableAndCellProps.width", options)))
    + "&nbsp;<input type=\"text\" data-type=\"cell-width\" value=\"\" class=\"coral-Textfield coral-RichText--small\">\r\n                        <span class=\"coral-Form-fieldinfo coral-Icon coral-Icon--infoCircle coral-Icon--sizeS\" data-init=\"quicktip\" data-quicktip-type=\"info\"\r\n                              data-quicktip-arrow=\"left\" data-quicktip-content=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableAndCellProps.widthToolTip", options) : helperMissing.call(depth0, "i18n", "dialog.tableAndCellProps.widthToolTip", options)))
    + "\" aria-label=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableAndCellProps.widthToolTip", options) : helperMissing.call(depth0, "i18n", "dialog.tableAndCellProps.widthToolTip", options)))
    + "\"\r\n                              tabindex=\"0\">\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"coral-RichText-dialog-column\">\r\n                        <span class=\"coral-Select coral-RichText-dialog-column--cellHorizontalAlignment\">\r\n                            <button type=\"button\" class=\"coral-Select-button coral-MinimalButton\">\r\n                                <span class=\"coral-Select-button-text\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableAndCellProps.noneAlignHor", options) : helperMissing.call(depth0, "i18n", "dialog.tableAndCellProps.noneAlignHor", options)))
    + "</span>\r\n                            </button>\r\n                            <select class=\"coral-Select-select\">\r\n                                <option value=\"none\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableAndCellProps.noneAlignHor", options) : helperMissing.call(depth0, "i18n", "dialog.tableAndCellProps.noneAlignHor", options)))
    + "</option>\r\n                                <option value=\"left\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableAndCellProps.leftAlign", options) : helperMissing.call(depth0, "i18n", "dialog.tableAndCellProps.leftAlign", options)))
    + "</option>\r\n                                <option value=\"center\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableAndCellProps.centerAlign", options) : helperMissing.call(depth0, "i18n", "dialog.tableAndCellProps.centerAlign", options)))
    + "</option>\r\n                                <option value=\"right\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableAndCellProps.rightAlign", options) : helperMissing.call(depth0, "i18n", "dialog.tableAndCellProps.rightAlign", options)))
    + "</option>\r\n                            </select>\r\n                        </span>\r\n                        <span class=\"coral-Select coral-RichText-dialog-column--cellType\">\r\n                            <button type=\"button\" class=\"coral-Select-button coral-MinimalButton\">\r\n                                <span class=\"coral-Select-button-text\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableAndCellProps.cellType", options) : helperMissing.call(depth0, "i18n", "dialog.tableAndCellProps.cellType", options)))
    + "</span>\r\n                            </button>\r\n                            <select class=\"coral-Select-select\">\r\n                                <option value=\"td\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableAndCellProps.dataCell", options) : helperMissing.call(depth0, "i18n", "dialog.tableAndCellProps.dataCell", options)))
    + "</option>\r\n                                <option value=\"th\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableAndCellProps.headerCell", options) : helperMissing.call(depth0, "i18n", "dialog.tableAndCellProps.headerCell", options)))
    + "</option>\r\n                            </select>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"coral-RichText-dialog-columnContainer\">\r\n                    <div class=\"coral-RichText-dialog-column coral-RichText-dialog-column--rightAligned coral-RichText-dialog-columnContainer--borderBottom\">\r\n                        ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableAndCellProps.height", options) : helperMissing.call(depth0, "i18n", "dialog.tableAndCellProps.height", options)))
    + "&nbsp;<input type=\"text\" data-type=\"cell-height\" value=\"\" class=\"coral-Textfield coral-RichText--small\">\r\n                        <span class=\"coral-Form-fieldinfo coral-Icon coral-Icon--infoCircle coral-Icon--sizeS\" data-init=\"quicktip\" data-quicktip-type=\"info\"\r\n                              data-quicktip-arrow=\"left\" data-quicktip-content=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableAndCellProps.heightToolTip", options) : helperMissing.call(depth0, "i18n", "dialog.tableAndCellProps.heightToolTip", options)))
    + "\" aria-label=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableAndCellProps.heightToolTip", options) : helperMissing.call(depth0, "i18n", "dialog.tableAndCellProps.heightToolTip", options)))
    + "\"\r\n                              tabindex=\"0\">\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"coral-RichText-dialog-column coral-RichText-dialog-columnContainer--borderBottom\">\r\n                        <span class=\"coral-Select coral-RichText-dialog-column--cellVerticalAlignment\">\r\n                            <button type=\"button\" class=\"coral-Select-button coral-MinimalButton\">\r\n                                <span class=\"coral-Select-button-text\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableAndCellProps.noneAlignVer", options) : helperMissing.call(depth0, "i18n", "dialog.tableAndCellProps.noneAlignVer", options)))
    + "</span>\r\n                            </button>\r\n                            <select class=\"coral-Select-select\">\r\n                                <option value=\"none\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableAndCellProps.noneAlignVer", options) : helperMissing.call(depth0, "i18n", "dialog.tableAndCellProps.noneAlignVer", options)))
    + "</option>\r\n                                <option value=\"top\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableAndCellProps.topAlign", options) : helperMissing.call(depth0, "i18n", "dialog.tableAndCellProps.topAlign", options)))
    + "</option>\r\n                                <option value=\"middle\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableAndCellProps.middleAlign", options) : helperMissing.call(depth0, "i18n", "dialog.tableAndCellProps.middleAlign", options)))
    + "</option>\r\n                                <option value=\"bottom\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableAndCellProps.bottomAlign", options) : helperMissing.call(depth0, "i18n", "dialog.tableAndCellProps.bottomAlign", options)))
    + "</option>\r\n                                <option value=\"baseline\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableAndCellProps.baselineAlign", options) : helperMissing.call(depth0, "i18n", "dialog.tableAndCellProps.baselineAlign", options)))
    + "</option>\r\n                            </select>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"coral-RichText-dialog-columnContainer coral-RichText-dialog-columnContainer--headerAttribute\">\r\n                    <div class=\"coral-RichText-dialog-column\">\r\n                        ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableAndCellProps.headerAttrib", options) : helperMissing.call(depth0, "i18n", "dialog.tableAndCellProps.headerAttrib", options)))
    + "\r\n                    </div>\r\n                    <div class=\"coral-RichText-dialog-column\">\r\n                        <input type=\"text\" data-type=\"cell-headers\" value=\"\" class=\"coral-Textfield coral-RichText--large\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"coral-RichText-dialog-columnContainer coral-RichText-dialog-columnContainer--idAttribute\">\r\n                    <div class=\"coral-RichText-dialog-column\">\r\n                        ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableAndCellProps.idAttrib", options) : helperMissing.call(depth0, "i18n", "dialog.tableAndCellProps.idAttrib", options)))
    + "\r\n                    </div>\r\n                    <div class=\"coral-RichText-dialog-column\">\r\n                        <input type=\"text\" data-type=\"cell-id\" value=\"\" class=\"coral-Textfield coral-RichText--large\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"coral-RichText-dialog-columnContainer coral-RichText-dialog-columnContainer--scopeAttribute\">\r\n                    <div class=\"coral-RichText-dialog-column\">\r\n                        ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableAndCellProps.scopeAttrib", options) : helperMissing.call(depth0, "i18n", "dialog.tableAndCellProps.scopeAttrib", options)))
    + "\r\n                    </div>\r\n                    <div class=\"coral-RichText-dialog-column\">\r\n                        <span class=\"coral-Select coral-RichText-dialog-column--scopeAttribute\">\r\n                            <button type=\"button\" class=\"coral-Select-button coral-MinimalButton\">\r\n                                <span class=\"coral-Select-button-text\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableAndCellProps.noneScopeAttrib", options) : helperMissing.call(depth0, "i18n", "dialog.tableAndCellProps.noneScopeAttrib", options)))
    + "</span>\r\n                            </button>\r\n                            <select class=\"coral-Select-select\">\r\n                                <option value=\"none\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableAndCellProps.noneScopeAttrib", options) : helperMissing.call(depth0, "i18n", "dialog.tableAndCellProps.noneScopeAttrib", options)))
    + "</option>\r\n                                <option value=\"row\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableAndCellProps.rowScope", options) : helperMissing.call(depth0, "i18n", "dialog.tableAndCellProps.rowScope", options)))
    + "</option>\r\n                                <option value=\"col\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableAndCellProps.columnScope", options) : helperMissing.call(depth0, "i18n", "dialog.tableAndCellProps.columnScope", options)))
    + "</option>\r\n                            </select>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n            <section class=\"coral-TabPanel-pane\">\r\n                <div class=\"coral-RichText-dialog-columnContainer\">\r\n                    <div class=\"coral-RichText-dialog-column\">\r\n                        ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableAndCellProps.width", options) : helperMissing.call(depth0, "i18n", "dialog.tableAndCellProps.width", options)))
    + "\r\n                    </div>\r\n                    <div class=\"coral-RichText-dialog-column\">\r\n                        <input type=\"text\" data-type=\"width\" value=\"\" class=\"coral-Textfield coral-RichText--small\">&nbsp;\r\n                        ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableAndCellProps.cellPadding", options) : helperMissing.call(depth0, "i18n", "dialog.tableAndCellProps.cellPadding", options)))
    + "&nbsp;<input type=\"text\" data-type=\"cellpadding\" value=\"\" class=\"coral-Textfield coral-RichText--small\">&nbsp;\r\n                        ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableAndCellProps.border", options) : helperMissing.call(depth0, "i18n", "dialog.tableAndCellProps.border", options)))
    + "&nbsp;<input type=\"text\" data-type=\"border\" value=\"\" class=\"coral-Textfield coral-RichText--small\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"coral-RichText-dialog-columnContainer\">\r\n                    <div class=\"coral-RichText-dialog-column\">\r\n                        ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableAndCellProps.height", options) : helperMissing.call(depth0, "i18n", "dialog.tableAndCellProps.height", options)))
    + "\r\n                    </div>\r\n                    <div class=\"coral-RichText-dialog-column\">\r\n                        <input type=\"text\" data-type=\"height\" value=\"\" class=\"coral-Textfield coral-RichText--small\">&nbsp;\r\n                        ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableAndCellProps.cellSpacing", options) : helperMissing.call(depth0, "i18n", "dialog.tableAndCellProps.cellSpacing", options)))
    + "&nbsp;&nbsp;<input type=\"text\" data-type=\"cellspacing\" value=\"\" class=\"coral-Textfield coral-RichText--small\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"coral-RichText-dialog-columnContainer\">\r\n                    <div class=\"coral-RichText-dialog-column\">\r\n                        ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableAndCellProps.caption", options) : helperMissing.call(depth0, "i18n", "dialog.tableAndCellProps.caption", options)))
    + "\r\n                    </div>\r\n                    <div class=\"coral-RichText-dialog-column\">\r\n                        <input type=\"text\" data-type=\"caption\" value=\"\" class=\"coral-Textfield coral-RichText--large\">\r\n                    </div>\r\n                </div>\r\n            </section>\r\n        </div>\r\n    </div>\r\n    <div class=\"coral-RichText-dialog-columnContainer coral-RichText-dialog-columnContainer--actionButtons\">\r\n        <div class=\"coral-RichText-dialog-column\">\r\n            <button type=\"button\" data-type=\"cancel\" tabindex=\"-1\" class=\"coral-RichText-dialogButton coral-Button\">\r\n                <i class=\"coral-Icon coral-Icon--close coral-Icon--sizeS\"></i>\r\n            </button>\r\n            <button type=\"button\" data-type=\"apply\" tabindex=\"-1\" class=\"coral-RichText-dialogButton coral-Button coral-Button--primary\">\r\n                <i class=\"coral-Icon coral-Icon--check coral-Icon--sizeS\"></i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>";
  return buffer;
  });

this["CUI"]["rte"]["Templates"]["dlg-tableprops"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div data-rte-dialog=\"tableprops\" class=\"coral--dark coral-Popover coral-RichText-dialog coral-RichText-dialog--tableprops\">\r\n    <div class=\"coral-RichText-dialog-columnContainer\">\r\n        <div class=\"coral-RichText-dialog-column\">\r\n            ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableProps.columns", options) : helperMissing.call(depth0, "i18n", "dialog.tableProps.columns", options)))
    + "\r\n        </div>\r\n        <div class=\"coral-RichText-dialog-column\">\r\n            <input type=\"text\" data-type=\"columns\" value=\"\" class=\"coral-Textfield coral-RichText--small\">&nbsp;\r\n            ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableProps.width", options) : helperMissing.call(depth0, "i18n", "dialog.tableProps.width", options)))
    + "&nbsp;&nbsp;<input type=\"text\" data-type=\"width\" value=\"\" class=\"coral-Textfield coral-RichText--small\">&nbsp;\r\n            ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableProps.cellPadding", options) : helperMissing.call(depth0, "i18n", "dialog.tableProps.cellPadding", options)))
    + "&nbsp;<input type=\"text\" data-type=\"cellpadding\" value=\"\" class=\"coral-Textfield coral-RichText--small\">\r\n        </div>\r\n    </div>\r\n    <div class=\"coral-RichText-dialog-columnContainer\">\r\n        <div class=\"coral-RichText-dialog-column\">\r\n            ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableProps.rows", options) : helperMissing.call(depth0, "i18n", "dialog.tableProps.rows", options)))
    + "\r\n        </div>\r\n        <div class=\"coral-RichText-dialog-column\">\r\n            <input type=\"text\" data-type=\"rows\" value=\"\" class=\"coral-Textfield coral-RichText--small\">&nbsp;\r\n            ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableProps.height", options) : helperMissing.call(depth0, "i18n", "dialog.tableProps.height", options)))
    + "&nbsp;<input type=\"text\" data-type=\"height\" value=\"\" class=\"coral-Textfield coral-RichText--small\">&nbsp;\r\n            ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableProps.cellSpacing", options) : helperMissing.call(depth0, "i18n", "dialog.tableProps.cellSpacing", options)))
    + "&nbsp;&nbsp;<input type=\"text\" data-type=\"cellspacing\" value=\"\" class=\"coral-Textfield coral-RichText--small\">\r\n        </div>\r\n    </div>\r\n    <div class=\"coral-RichText-dialog-columnContainer\">\r\n        <div class=\"coral-RichText-dialog-column\">\r\n            ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableProps.border", options) : helperMissing.call(depth0, "i18n", "dialog.tableProps.border", options)))
    + "\r\n        </div>\r\n        <div class=\"coral-RichText-dialog-column\">\r\n            <input type=\"text\" data-type=\"border\" value=\"\" class=\"coral-Textfield coral-RichText--small\">&nbsp;\r\n            <span class=\"coral-Select coral-RichText-dialog-column--headerField\">\r\n                <button type=\"button\" class=\"coral-Select-button coral-MinimalButton\">\r\n                    <span class=\"coral-Select-button-text\">No Header</span>\r\n                </button>\r\n                <select class=\"coral-Select-select\">\r\n                    <option value=\"none\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableProps.noHeader", options) : helperMissing.call(depth0, "i18n", "dialog.tableProps.noHeader", options)))
    + "</option>\r\n                    <option value=\"top\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableProps.rowHeader", options) : helperMissing.call(depth0, "i18n", "dialog.tableProps.rowHeader", options)))
    + "</option>\r\n                    <option value=\"left\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableProps.colHeader", options) : helperMissing.call(depth0, "i18n", "dialog.tableProps.colHeader", options)))
    + "</option>\r\n                    <option value=\"topleft\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableProps.rowAndColHeader", options) : helperMissing.call(depth0, "i18n", "dialog.tableProps.rowAndColHeader", options)))
    + "</option>\r\n                </select>\r\n            </span>\r\n        </div>\r\n    </div>\r\n    <div class=\"coral-RichText-dialog-columnContainer\">\r\n        <div class=\"coral-RichText-dialog-column coral-RichText-dialog-columnContainer--borderBottom\">\r\n            ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.i18n || (depth0 && depth0.i18n)),stack1 ? stack1.call(depth0, "dialog.tableProps.caption", options) : helperMissing.call(depth0, "i18n", "dialog.tableProps.caption", options)))
    + "\r\n        </div>\r\n        <div class=\"coral-RichText-dialog-column coral-RichText-dialog-columnContainer--borderBottom\">\r\n            <input type=\"text\" data-type=\"caption\" value=\"\" class=\"coral-Textfield coral-RichText--large\">\r\n        </div>\r\n    </div>\r\n    <div class=\"coral-RichText-dialog-columnContainer coral-RichText-dialog-columnContainer--actionButtons\">\r\n        <div class=\"coral-RichText-dialog-column\">\r\n            <button type=\"button\" data-type=\"cancel\" tabindex=\"-1\" class=\"coral-RichText-dialogButton coral-Button\">\r\n                <i class=\"coral-Icon coral-Icon--close coral-Icon--sizeS\"></i>\r\n            </button>\r\n            <button type=\"button\" data-type=\"apply\" tabindex=\"-1\" class=\"coral-RichText-dialogButton coral-Button coral-Button--primary\">\r\n                <i class=\"coral-Icon coral-Icon--check coral-Icon--sizeS\"></i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>";
  return buffer;
  });

this["CUI"]["rte"]["Templates"]["paraformat-pulldown"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n    <li><button data-action=\"paraformat#";
  stack2 = ((stack1 = (depth0 && depth0.tag)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\"><i class=\"coral-Icon coral-Icon--sizeS\"></i>";
  stack2 = ((stack1 = (depth0 && depth0.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</button></li>\r\n";
  return buffer;
  }

  buffer += "<ul class=\"coral-RichText-toolbar-list coral-RichText-toolbar-list--checkable\">\r\n";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>";
  return buffer;
  });

this["CUI"]["rte"]["Templates"]["popover-item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<button type=\"button\" data-action=\"";
  if (stack1 = helpers.plugin) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.plugin); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "#";
  if (stack1 = helpers.command) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.command); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" tabindex=\"-1\" class=\"coral-RichText-toolbar-item is-disabled ";
  if (stack1 = helpers.icon) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.icon); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.addClasses) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.addClasses); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></button>";
  return buffer;
  });

this["CUI"]["rte"]["Templates"]["popover-trigger"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<button type=\"button\" data-action=\"";
  if (stack1 = helpers.ref) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.ref); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" tabindex=\"-1\" class=\"coral-RichText-toolbar-item ";
  if (stack1 = helpers.icon) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.icon); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " coral-RichText--trigger";
  if (stack1 = helpers.addClasses) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.addClasses); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></button>";
  return buffer;
  });

this["CUI"]["rte"]["Templates"]["popover"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    ";
  stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  }

  buffer += "<div data-id=\"";
  if (stack1 = helpers.ref) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.ref); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"coral--dark coral-Popover coral-RichText-popover\">\r\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.popoverItems), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>";
  return buffer;
  });

this["CUI"]["rte"]["Templates"]["separator"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"coral-RichText-toolbar-separator\"></div>";
  });

this["CUI"]["rte"]["Templates"]["styles-pulldown"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n    <li><button data-action=\"styles#";
  stack2 = ((stack1 = (depth0 && depth0.cssName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\"><span>";
  stack2 = ((stack1 = (depth0 && depth0.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</span><i class=\"coral-Icon coral-Icon--sizeS\"></i></button></li>\r\n";
  return buffer;
  }

  buffer += "<ul class=\"coral-RichText-toolbar-list coral-RichText-toolbar-list--checkable\">\r\n";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>\r\n";
  return buffer;
  });

this["CUI"]["rte"]["Templates"]["tb-container"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n<div data-type=\""
    + escapeExpression(((stack1 = (depth0 && depth0.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n    ";
  stack2 = ((stack1 = (depth0 && depth0.toolbar)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n    ";
  stack2 = helpers.each.call(depth0, (depth0 && depth0.popovers), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n</div>\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n        ";
  stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.toolbars), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  });

this["CUI"]["rte"]["Templates"]["toolbar-item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<button type=\"button\" data-action=\"";
  if (stack1 = helpers.plugin) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.plugin); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "#";
  if (stack1 = helpers.command) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.command); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" tabindex=\"-1\" class=\"coral-RichText-toolbar-item disabled ";
  if (stack1 = helpers.icon) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.icon); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.addClasses) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.addClasses); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></button>";
  return buffer;
  });

this["CUI"]["rte"]["Templates"]["toolbar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    ";
  stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  }

  buffer += "<div class=\"coral-RichText-toolbar\">\r\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.toolbarItems), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>";
  return buffer;
  });

this["CUI"]["rte"]["Templates"]["ui-space"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div data-type=\"";
  if (stack1 = helpers.mode) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.mode); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></div>";
  return buffer;
  });

this["CUI"]["rte"]["Templates"]["wizard-searchlink"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"coral-RichText-linkDialog-container coral--light\">\r\n    <div class=\"coral-RichText-linkDialog coral-Wizard coral-Wizard--maximized is-hidden\">\r\n        <div class=\"js-coral-Wizard-step coral-Wizard-step coral-Wizard-step--maximized\">\r\n            <button class=\"js-coral-Wizard-step-control coral-Button back\" type=\"button\" data-action=\"prev\">Cancel</button>\r\n            <button class=\"js-coral-Wizard-step-control coral-Button next\" type=\"button\" data-action=\"next\">Link</button>\r\n            <div class=\"coral-RichText-linkDialog-cardContainer\">\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
  });