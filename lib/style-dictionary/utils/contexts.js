var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var contexts_exports = {};
__export(contexts_exports, {
  createAlertContext: () => createAlertContext,
  createCompactTableContext: () => createCompactTableContext,
  createFlashbarContext: () => createFlashbarContext,
  createFlashbarWarningContext: () => createFlashbarWarningContext,
  createHeaderContext: () => createHeaderContext,
  createTopNavigationContext: () => createTopNavigationContext
});
module.exports = __toCommonJS(contexts_exports);
const createTopNavigationContext = (tokens) => {
  return {
    id: "top-navigation",
    selector: ".awsui-context-top-navigation",
    tokens
  };
};
const createCompactTableContext = (tokens) => {
  return {
    id: "compact-table",
    selector: ".awsui-context-compact-table",
    tokens
  };
};
const createHeaderContext = (tokens) => {
  return {
    id: "header",
    selector: ".awsui-context-content-header",
    tokens
  };
};
const createFlashbarContext = (tokens) => {
  return {
    id: "flashbar",
    selector: ".awsui-context-flashbar",
    tokens
  };
};
const createFlashbarWarningContext = (tokens) => {
  return {
    id: "flashbar-warning",
    selector: ".awsui-context-flashbar-warning",
    tokens
  };
};
const createAlertContext = (tokens) => {
  return {
    id: "alert",
    selector: ".awsui-context-alert",
    tokens
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createAlertContext,
  createCompactTableContext,
  createFlashbarContext,
  createFlashbarWarningContext,
  createHeaderContext,
  createTopNavigationContext
});
