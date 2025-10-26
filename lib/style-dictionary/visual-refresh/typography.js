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
var typography_exports = {};
__export(typography_exports, {
  tokens: () => tokens
});
module.exports = __toCommonJS(typography_exports);
const tokens = {
  fontBoxValueLargeWeight: "700",
  fontButtonLetterSpacing: "0.005em",
  fontButtonWeight: "700",
  fontChartDetailSize: "{fontSizeBodyS}",
  fontDisplayLabelWeight: "700",
  fontExpandableHeadingSize: "{fontSizeHeadingS}",
  fontFamilyBase: "'Open Sans', 'Helvetica Neue', Roboto, Arial, sans-serif",
  fontFamilyMonospace: "Monaco, Menlo, Consolas, 'Courier Prime', Courier, 'Courier New', monospace",
  fontHeaderH2DescriptionLineHeight: "{lineHeightBodyM}",
  fontHeaderH2DescriptionSize: "{fontSizeBodyM}",
  fontLinkButtonLetterSpacing: "{fontButtonLetterSpacing}",
  fontLinkButtonWeight: "{fontButtonWeight}",
  fontPanelHeaderLineHeight: "{lineHeightHeadingM}",
  fontPanelHeaderSize: "{fontSizeHeadingM}",
  fontSizeBodyM: "14px",
  fontSizeBodyS: "12px",
  fontSizeDisplayL: "42px",
  fontSizeHeadingXl: "24px",
  fontSizeHeadingL: "20px",
  fontSizeHeadingM: "18px",
  fontSizeHeadingS: "16px",
  fontSizeHeadingXs: "14px",
  fontSmoothingMozOsx: "grayscale",
  fontSmoothingWebkit: "antialiased",
  fontTabsDisabledWeight: "{fontWayfindingLinkActiveWeight}",
  fontTabsLineHeight: "{lineHeightHeadingS}",
  fontTabsSize: "{fontSizeHeadingS}",
  fontWayfindingLinkActiveWeight: "700",
  fontWeightHeadingXl: "700",
  fontWeightHeadingL: "700",
  fontWeightHeadingM: "700",
  fontWeightHeadingS: "700",
  fontWeightHeadingXs: "700",
  fontWeightHeavy: "700",
  letterSpacingBodyS: "0.005em",
  letterSpacingDisplayL: "-0.03em",
  letterSpacingHeadingXl: "-0.02em",
  letterSpacingHeadingL: "-0.015em",
  letterSpacingHeadingM: "-0.010em",
  letterSpacingHeadingS: "-0.005em",
  lineHeightBodyM: "20px",
  lineHeightBodyS: "16px",
  lineHeightDisplayL: "48px",
  lineHeightHeadingXl: "30px",
  lineHeightHeadingL: "24px",
  lineHeightHeadingM: "22px",
  lineHeightHeadingS: "20px",
  lineHeightHeadingXs: "18px"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  tokens
});
