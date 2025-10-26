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
var shadows_exports = {};
__export(shadows_exports, {
  mode: () => mode,
  tokens: () => expandedTokens
});
module.exports = __toCommonJS(shadows_exports);
var import_utils = require("../utils");
const tokens = {
  shadowContainer: {
    light: "0px 0px 1px 1px #e9ebed, 0px 1px 8px 2px rgba(0, 7, 22, 0.12)",
    // 1px grey-200 faux border
    dark: "0px 1px 8px 2px rgba(0, 7, 22, 0.6)"
  },
  shadowContainerStacked: {
    light: "-1px 1px 1px 0px #e9ebed, 1px 1px 1px 0px #e9ebed, 0px 9px 8px -7px rgb(0 7 22 / 12%), 8px 0px 8px -7px rgb(0 7 22 / 12%), -8px 0px 8px -7px rgb(0 7 22 / 12%)",
    dark: "0px 9px 8px -7px rgb(0 7 22 / 60%), 8px 0px 8px -7px rgb(0 7 22 / 60%), -8px 0px 8px -7px rgb(0 7 22 / 60%)"
  },
  shadowContainerActive: {
    light: "0px 1px 1px 1px #e9ebed, 0px 6px 36px #0007161a",
    dark: "0px 1px 1px 1px #192534, 0px 6px 36px #00040c"
  },
  shadowDropdown: { light: "0px 4px 20px 1px rgba(0, 7, 22, 0.10)", dark: "0px 4px 20px 1px rgba(0, 4, 12, 1)" },
  shadowDropup: "{shadowDropdown}",
  shadowFlashCollapsed: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  shadowFlashSticky: {
    light: "0px 4px 8px rgba(0, 7, 22, 0.10)",
    dark: "0px 4px 8px rgba(0, 7, 22, 0.5)"
  },
  shadowModal: "{shadowDropdown}",
  shadowPanel: {
    light: "0px 0px 0px 1px #b6bec9",
    dark: "0px 0px 0px 1px #414d5c"
  },
  shadowPanelToggle: { light: "0px 6px 12px 1px rgba(0, 7, 22, 0.12)", dark: "0px 6px 12px 1px rgba(0, 7, 22, 1)" },
  shadowPopover: "{shadowDropdown}",
  shadowSplitBottom: {
    light: "0px -36px 36px -36px rgba(0, 7, 22, 0.10)",
    dark: "0px -36px 36px -36px rgba(0, 7, 22, 1)"
  },
  shadowSplitSide: {
    light: "-1px 0px 1px 0px #e9ebed, -36px 6px 36px -36px rgba(0, 7, 22, 0.10)",
    dark: "-1px 0px 1px 0px #192534, -36px 6px 36px -36px rgba(0, 7, 22, 1)"
  },
  shadowSticky: { light: "0px 4px 8px 1px rgba(0, 7, 22, 0.10)", dark: "0px 4px 8px 1px rgba(0, 7, 22, 0.5)" },
  shadowStickyEmbedded: {
    light: "0px 2px 0px 0px #e9ebed, 0px 16px 16px -12px rgba(0, 7, 22, 0.10)",
    // 2px grey-200 faux bottom border
    dark: "0px 2px 0px 0px #414d5c, 0px 16px 16px -12px rgba(0, 7, 22, 1)"
    // 2px grey-600 faux bottom border
  },
  shadowStickyColumnFirst: {
    light: "4px 0px 8px 1px rgba(0, 7, 22, 0.1)",
    dark: "0px 4px 8px 1px rgba(0, 7, 22, 0.5)"
  },
  shadowStickyColumnLast: {
    light: "-4px 0 8px 1px rgba(0, 28, 36, 0.1)",
    dark: "0px 4px 8px 1px rgba(0, 7, 22, 0.5)"
  }
};
const expandedTokens = (0, import_utils.expandColorDictionary)(tokens);
const mode = "color";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  mode,
  tokens
});
