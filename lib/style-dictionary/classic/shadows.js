var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var shadows_exports = {};
__export(shadows_exports, {
  mode: () => mode,
  tokens: () => expandedTokens
});
module.exports = __toCommonJS(shadows_exports);
var import_shadows = require("../visual-refresh/shadows");
var import_merge = __toESM(require("lodash/merge"));
var import_utils = require("../utils");
const tokens = {
  shadowContainer: {
    light: "0 1px 1px 0 rgba(0, 28, 36, 0.3), 1px 1px 1px 0 rgba(0, 28, 36, 0.15), -1px 1px 1px 0 rgba(0, 28, 36, 0.15)",
    dark: "0 1px 1px 0 rgba(0, 0, 0, 0.3), 1px 1px 1px 0 rgba(0, 0, 0, 0.3), -1px 1px 1px 0 rgba(0, 0, 0, 0.3)"
  },
  shadowContainerStacked: "{shadowContainer}",
  shadowContainerActive: {
    light: "0px 4px 8px rgba(0, 28, 36, 0.45)",
    dark: "0px 4px 8px rgba(0, 28, 36, 0.45)"
  },
  shadowDropdown: "{shadowContainer}",
  shadowDropup: {
    light: "0 -1px 1px 0 rgba(0, 28, 36, 0.3), 1px -1px 1px 0 rgba(0, 28, 36, 0.15), -1px -1px 1px 0 rgba(0, 28, 36, 0.15)",
    dark: "0 -1px 1px 0 rgba(0, 0, 0, 0.3), 1px -1px 1px 0 rgba(0, 0, 0, 0.3), -1px -1px 1px 0 rgba(0, 0, 0, 0.3)"
  },
  shadowFlashCollapsed: "0px 2px 2px rgba(0, 0, 0, 0.15)",
  shadowFlashSticky: "{shadowPanel}",
  shadowModal: "{shadowContainer}",
  shadowPanel: "{shadowContainer}",
  shadowPanelToggle: "{shadowPanel}",
  shadowPopover: "{shadowSticky}",
  shadowSplitBottom: {
    light: "0 -2px 1px -1px rgba(0, 28, 36, 0.15), 0 -1px 1px -1px rgba(0, 28, 36, 0.3)",
    dark: "0 -2px 1px -1px rgba(0, 0, 0, 0.3), 0 -1px 1px -1px rgba(0, 0, 0, 0.3)"
  },
  shadowSplitSide: "{shadowContainer}",
  shadowSticky: { light: "0px 1px 4px -2px rgba(0, 28, 36, 0.5)", dark: "0px 1px 4px -2px rgba(0, 0, 0, 0.5)" },
  shadowStickyEmbedded: "{shadowSticky}",
  shadowStickyColumnFirst: {
    light: "4px 0 8px 0 rgba(0, 28, 36, 0.1)",
    dark: "4px 0 8px 0 rgba(0, 0, 0, 0.5)"
  },
  shadowStickyColumnLast: {
    light: "-4px 0 8px 0 rgba(0, 28, 36, 0.1)",
    dark: "-4px 0 8px 0 rgba(0, 0, 0, 0.5)"
  }
};
const expandedTokens = (0, import_merge.default)(
  {},
  import_shadows.tokens,
  (0, import_utils.expandColorDictionary)(tokens)
);
const mode = "color";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  mode,
  tokens
});
