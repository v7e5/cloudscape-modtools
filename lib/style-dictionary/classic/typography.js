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
var typography_exports = {};
__export(typography_exports, {
  tokens: () => expandedTokens
});
module.exports = __toCommonJS(typography_exports);
var import_typography = require("../visual-refresh/typography");
var import_merge = __toESM(require("lodash/merge"));
const tokens = {
  fontBoxValueLargeWeight: "300",
  fontButtonLetterSpacing: "0.25px",
  fontChartDetailSize: "{fontSizeBodyM}",
  fontDisplayLabelWeight: "400",
  fontExpandableHeadingSize: "{fontSizeBodyM}",
  fontFamilyBase: "'Noto Sans', 'Helvetica Neue', Roboto, Arial, sans-serif",
  fontHeaderH2DescriptionLineHeight: "{lineHeightBodyS}",
  fontHeaderH2DescriptionSize: "{fontSizeBodyS}",
  fontLinkButtonLetterSpacing: "normal",
  fontLinkButtonWeight: "400",
  fontPanelHeaderLineHeight: "{lineHeightHeadingL}",
  fontPanelHeaderSize: "{fontSizeHeadingL}",
  fontSizeDisplayL: "44px",
  fontSizeHeadingXl: "28px",
  fontSizeHeadingL: "18px",
  fontSizeHeadingM: "18px",
  fontSizeHeadingXs: "16px",
  fontSmoothingMozOsx: "auto",
  fontSmoothingWebkit: "auto",
  fontTabsDisabledWeight: "400",
  fontTabsLineHeight: "{lineHeightBodyM}",
  fontTabsSize: "{fontSizeBodyM}",
  fontWeightHeadingXl: "400",
  fontWeightHeadingL: "{fontWeightHeavy}",
  fontWeightHeadingM: "400",
  fontWeightHeadingS: "{fontWeightHeavy}",
  fontWeightHeadingXs: "400",
  fontWeightHeavy: "700",
  letterSpacingBodyS: "normal",
  letterSpacingDisplayL: "normal",
  letterSpacingHeadingXl: "normal",
  letterSpacingHeadingL: "normal",
  letterSpacingHeadingM: "normal",
  letterSpacingHeadingS: "normal",
  lineHeightBodyM: "22px",
  lineHeightDisplayL: "56px",
  lineHeightHeadingXl: "36px",
  lineHeightHeadingL: "22px",
  lineHeightHeadingM: "22px",
  lineHeightHeadingXs: "20px"
};
const expandedTokens = (0, import_merge.default)({}, import_typography.tokens, tokens);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  tokens
});
