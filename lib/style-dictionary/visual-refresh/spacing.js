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
var spacing_exports = {};
__export(spacing_exports, {
  mode: () => mode,
  tokens: () => expandedTokens
});
module.exports = __toCommonJS(spacing_exports);
var import_utils = require("../utils");
const tokens = {
  spaceAlertActionLeft: "{spaceS}",
  spaceAlertHorizontal: "{spaceFlashbarHorizontal}",
  spaceAlertMessageRight: "{spaceXxs}",
  spaceAlertVertical: "{spaceScaledXs}",
  spaceButtonFocusOutlineGutter: "4px",
  spaceButtonHorizontal: "{spaceScaledL}",
  spaceButtonIconFocusOutlineGutterVertical: "0px",
  spaceButtonIconOnlyHorizontal: { comfortable: "6px", compact: "{spaceXxs}" },
  spaceButtonInlineIconFocusOutlineGutter: "0px",
  spaceButtonModalDismissVertical: "{spaceScaledXxxs}",
  spaceCalendarGridFocusOutlineGutter: "-5px",
  spaceCalendarGridSelectedFocusOutlineGutter: "{spaceCalendarGridFocusOutlineGutter}",
  spaceCalendarGridGutter: "6px",
  spaceCardHorizontal: "{spaceContainerHorizontal}",
  spaceCardVertical: "{spaceScaledM}",
  spaceCodeEditorStatusFocusOutlineGutter: "-7px",
  spaceContainerContentTop: "{spaceXxs}",
  spaceContainerHeaderTop: "{spaceS}",
  spaceContainerHeaderBottom: "{spaceScaledXs}",
  spaceContainerHorizontal: "{spaceL}",
  spaceContentHeaderPaddingBottom: "{spaceScaledM}",
  spaceDarkHeaderOverlapDistance: { comfortable: "36px", compact: "32px" },
  spaceExpandableSectionIconOffsetTop: "{spaceScaled2xXxs}",
  spaceFieldHorizontal: "{spaceS}",
  spaceFieldIconOffset: "36px",
  spaceFilteringTokenDismissButtonFocusOutlineGutter: "-5px",
  spaceFilteringTokenOperationSelectFocusOutlineGutter: "-5px",
  spaceFlashbarActionLeft: "{spaceS}",
  spaceFlashbarDismissRight: "0px",
  spaceFlashbarHorizontal: "{spaceM}",
  spaceGridGutter: { comfortable: "{spaceL}", compact: "{spaceM}" },
  spaceKeyValueGap: "0px",
  spaceLayoutContentBottom: "{spaceScaled2xXxxl}",
  spaceLayoutContentHorizontal: "{spaceScaled2xXl}",
  spaceLayoutToggleDiameter: "36px",
  spaceLayoutTogglePadding: "{spaceStaticS}",
  spaceModalContentBottom: "{spaceScaled2xM}",
  spaceModalHorizontal: "{spaceContainerHorizontal}",
  spaceOptionIconBigTop: "0px",
  spacePanelContentBottom: "{spaceScaledXxxl}",
  spacePanelContentTop: "{spaceScaledL}",
  spacePanelDividerMarginHorizontal: "{spaceXs}",
  spacePanelHeaderVertical: "{spaceScaledL}",
  spacePanelNavLeft: "28px",
  spacePanelSideLeft: "28px",
  spacePanelSideRight: "{spaceScaledXl}",
  spacePanelSplitTop: "{spaceScaledL}",
  spacePanelSplitBottom: "{spaceScaledL}",
  spaceSegmentedControlFocusOutlineGutter: "4px",
  spaceTabsContentTop: "{spaceScaledS}",
  spaceTabsFocusOutlineGutter: "-8px",
  spaceTableContentBottom: "{spaceXxs}",
  spaceTableEmbeddedHeaderTop: "0px",
  spaceTableFooterHorizontal: "{spaceTableHeaderHorizontal}",
  spaceTableHeaderFocusOutlineGutter: { comfortable: "0px", compact: "-1px" },
  spaceTableHeaderHorizontal: "0px",
  spaceTableHeaderToolsBottom: "0px",
  spaceTableHeaderToolsFullPageBottom: "4px",
  spaceTableHorizontal: "{spaceContainerHorizontal}",
  spaceScaled2xNone: "{spaceNone}",
  spaceScaled2xXxxs: { comfortable: "{spaceXxxs}", compact: "{spaceNone}" },
  spaceScaled2xXxs: { comfortable: "{spaceXxs}", compact: "{spaceNone}" },
  spaceScaled2xXs: { comfortable: "{spaceXs}", compact: "{spaceNone}" },
  spaceScaled2xS: { comfortable: "{spaceS}", compact: "{spaceXxs}" },
  spaceScaled2xM: { comfortable: "{spaceM}", compact: "{spaceXs}" },
  spaceScaled2xL: { comfortable: "{spaceL}", compact: "{spaceS}" },
  spaceScaled2xXl: { comfortable: "{spaceXl}", compact: "{spaceM}" },
  spaceScaled2xXxl: { comfortable: "{spaceXxl}", compact: "{spaceL}" },
  spaceScaled2xXxxl: { comfortable: "{spaceXxxl}", compact: "{spaceXl}" },
  spaceScaledNone: "{spaceNone}",
  spaceScaledXxxs: { comfortable: "{spaceXxxs}", compact: "{spaceNone}" },
  spaceScaledXxs: { comfortable: "{spaceXxs}", compact: "{spaceXxxs}" },
  spaceScaledXs: { comfortable: "{spaceXs}", compact: "{spaceXxs}" },
  spaceScaledS: { comfortable: "{spaceS}", compact: "{spaceXs}" },
  spaceScaledM: { comfortable: "{spaceM}", compact: "{spaceS}" },
  spaceScaledL: { comfortable: "{spaceL}", compact: "{spaceM}" },
  spaceScaledXl: { comfortable: "{spaceXl}", compact: "{spaceL}" },
  spaceScaledXxl: { comfortable: "{spaceXxl}", compact: "{spaceXl}" },
  spaceScaledXxxl: { comfortable: "{spaceXxxl}", compact: "{spaceXxl}" },
  spaceStaticXxxs: "{spaceXxxs}",
  spaceStaticXxs: "{spaceXxs}",
  spaceStaticXs: "{spaceXs}",
  spaceStaticS: "{spaceS}",
  spaceStaticM: "{spaceM}",
  spaceStaticL: "{spaceL}",
  spaceStaticXl: "{spaceXl}",
  spaceStaticXxl: "{spaceXxl}",
  spaceStaticXxxl: "{spaceXxxl}",
  spaceNone: "0px",
  spaceXxxs: "2px",
  spaceXxs: "4px",
  spaceXs: "8px",
  spaceS: "12px",
  spaceM: "16px",
  spaceL: "20px",
  spaceXl: "24px",
  spaceXxl: "32px",
  spaceXxxl: "40px"
};
const expandedTokens = (0, import_utils.expandDensityDictionary)(tokens);
const mode = "density";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  mode,
  tokens
});
