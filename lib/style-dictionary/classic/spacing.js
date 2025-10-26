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
var spacing_exports = {};
__export(spacing_exports, {
  mode: () => mode,
  tokens: () => expandedTokens
});
module.exports = __toCommonJS(spacing_exports);
var import_spacing = require("../visual-refresh/spacing");
var import_merge = __toESM(require("lodash/merge"));
var import_utils = require("../utils");
const tokens = {
  spaceAlertActionLeft: "{spaceL}",
  spaceAlertHorizontal: "{spaceL}",
  spaceAlertMessageRight: "0px",
  spaceAlertVertical: "{spaceScaledS}",
  spaceButtonFocusOutlineGutter: "3px",
  spaceButtonHorizontal: "{spaceL}",
  spaceButtonIconFocusOutlineGutterVertical: "{spaceButtonFocusOutlineGutter}",
  spaceButtonIconOnlyHorizontal: "{spaceM}",
  spaceButtonInlineIconFocusOutlineGutter: "{spaceButtonFocusOutlineGutter}",
  spaceButtonModalDismissVertical: "{spaceScaledXxs}",
  spaceCalendarGridFocusOutlineGutter: "0px",
  spaceCalendarGridSelectedFocusOutlineGutter: "2px",
  spaceCalendarGridGutter: "0px",
  spaceCardVertical: "{spaceScaledL}",
  spaceCodeEditorStatusFocusOutlineGutter: "3px",
  spaceContainerContentTop: "{spaceScaledM}",
  spaceContainerHeaderTop: "{spaceScaledS}",
  spaceContainerHeaderBottom: "{spaceScaledS}",
  spaceContainerHorizontal: "{spaceL}",
  spaceContentHeaderPaddingBottom: "{spaceScaledM}",
  spaceDarkHeaderOverlapDistance: "0px",
  spaceExpandableSectionIconOffsetTop: "{spaceScaledXs}",
  spaceFieldHorizontal: "{spaceXs}",
  spaceFieldIconOffset: "32px",
  spaceFilteringTokenDismissButtonFocusOutlineGutter: "0px",
  spaceFilteringTokenOperationSelectFocusOutlineGutter: "0px",
  spaceFlashbarActionLeft: "{spaceM}",
  spaceFlashbarDismissRight: "{spaceXxs}",
  spaceFlashbarHorizontal: "{spaceS}",
  spaceKeyValueGap: "{spaceScaledXxxs}",
  spaceLayoutContentBottom: "{spaceScaledL}",
  spaceLayoutContentHorizontal: "{spaceScaled2xXxxl}",
  spaceModalContentBottom: "{spaceScaledL}",
  spaceOptionIconBigTop: "{spaceXxxs}",
  spacePanelContentBottom: "{spaceScaledXxxl}",
  spacePanelContentTop: "{spaceScaledL}",
  spacePanelDividerMarginHorizontal: "{spaceS}",
  spacePanelHeaderVertical: "{spaceScaledL}",
  spacePanelNavLeft: "{spaceXxl}",
  spacePanelSideLeft: "{spaceScaledXxl}",
  spacePanelSideRight: "{spaceScaledXxl}",
  spacePanelSplitTop: "0px",
  spaceSegmentedControlFocusOutlineGutter: "3px",
  spaceTabsContentTop: "{spaceScaledM}",
  spaceTabsFocusOutlineGutter: "0px",
  spaceTableContentBottom: "0px",
  spaceTableEmbeddedHeaderTop: "{spaceContainerHeaderTop}",
  spaceTableHeaderFocusOutlineGutter: { compact: "0px" },
  spaceTableHeaderHorizontal: "{spaceContainerHorizontal}",
  spaceTableHeaderToolsBottom: "{spaceScaledXxs}",
  spaceTableHorizontal: "0px"
};
const expandedTokens = (0, import_merge.default)(
  {},
  import_spacing.tokens,
  (0, import_utils.expandDensityDictionary)(tokens)
);
const mode = "density";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  mode,
  tokens
});
