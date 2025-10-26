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
var flashbar_exports = {};
__export(flashbar_exports, {
  baseTokens: () => baseTokens,
  tokens: () => expandedTokens
});
module.exports = __toCommonJS(flashbar_exports);
var import_colors = require("../colors");
var import_merge = __toESM(require("lodash/merge"));
var import_utils = require("../../utils");
const baseTokens = {
  colorTextButtonNormalDefault: "{colorGrey100}",
  colorBorderButtonNormalDefault: "{colorGrey100}",
  colorBackgroundButtonNormalDefault: "transparent",
  colorTextButtonNormalHover: "{colorWhite}",
  colorBorderButtonNormalHover: "{colorWhite}",
  colorBackgroundButtonNormalHover: "rgba(0, 7, 22, 0.15)",
  colorTextButtonNormalActive: "{colorWhite}",
  colorBorderButtonNormalActive: "{colorWhite}",
  colorBackgroundButtonNormalActive: "rgba(0, 7, 22, 0.2)",
  colorBorderItemFocused: "{colorGrey100}",
  colorTextExpandableSectionDefault: "{colorGrey100}",
  colorTextExpandableSectionHover: "{colorWhite}",
  colorTextBodyDefault: "{colorGrey100}",
  colorTextHeadingSecondary: "{colorGrey100}",
  colorBorderDividerDefault: "{colorGrey100}"
};
const expandedTokens = (0, import_utils.expandColorDictionary)(
  (0, import_merge.default)({}, import_colors.tokens, baseTokens)
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  baseTokens,
  tokens
});
