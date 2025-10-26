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
var alert_exports = {};
__export(alert_exports, {
  alertButtonTokens: () => alertButtonTokens,
  expandedColorTokens: () => expandedColorTokens,
  tokens: () => expandedTokens
});
module.exports = __toCommonJS(alert_exports);
var import_colors = require("../colors");
var import_merge = __toESM(require("lodash/merge"));
var import_utils = require("../../utils");
const alertButtonTokens = {
  colorTextButtonNormalDefault: {
    light: "{colorGrey600}",
    dark: "{colorGrey300}"
  },
  colorBorderButtonNormalDefault: "{colorTextButtonNormalDefault}",
  colorBackgroundButtonNormalDefault: "transparent",
  colorTextButtonNormalHover: {
    light: "{colorGrey900}",
    dark: "{colorWhite}"
  },
  colorBorderButtonNormalHover: "{colorTextButtonNormalHover}",
  colorBackgroundButtonNormalHover: {
    light: "rgba(0, 7, 22, 0.05)",
    dark: "rgba(255, 255, 255, 0.1)"
  },
  colorTextButtonNormalActive: "{colorTextButtonNormalHover}",
  colorBorderButtonNormalActive: "{colorTextButtonNormalHover}",
  colorBackgroundButtonNormalActive: {
    light: "rgba(0, 7, 22, 0.1)",
    dark: "rgba(255, 255, 255, 0.15)"
  },
  colorTextLinkButtonNormalDefault: "{colorTextLinkDefault}",
  colorTextLinkButtonNormalHover: "{colorTextLinkHover}"
};
const alertExpandableSectionTokens = {
  colorBorderDividerDefault: "{colorTextButtonNormalDefault}",
  colorTextExpandableSectionDefault: "{colorTextButtonNormalDefault}",
  colorTextExpandableSectionHover: "{colorTextButtonNormalHover}"
};
const colorTokens = {
  ...alertButtonTokens,
  ...alertExpandableSectionTokens,
  colorBorderItemFocused: {
    dark: "{colorGrey100}"
  }
};
const alertExpandableSectionFontTokens = {
  fontExpandableHeadingSize: "14px"
};
const alertExpandableSectionBorderTokens = {
  borderDividerSectionWidth: "1px"
};
const expandedColorTokens = (0, import_utils.expandColorDictionary)(
  (0, import_merge.default)({}, import_colors.tokens, colorTokens)
);
const expandedTokens = {
  ...expandedColorTokens,
  ...alertExpandableSectionFontTokens,
  ...alertExpandableSectionBorderTokens
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  alertButtonTokens,
  expandedColorTokens,
  tokens
});
