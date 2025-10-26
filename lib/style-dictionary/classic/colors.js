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
var colors_exports = {};
__export(colors_exports, {
  mode: () => mode,
  tokens: () => expandedTokens
});
module.exports = __toCommonJS(colors_exports);
var import_colors = require("../visual-refresh/colors");
var import_merge = __toESM(require("lodash/merge"));
var import_utils = require("../utils");
const tokens = {
  colorGreyOpaque70: "rgba(255, 255, 255, 0.7)",
  colorGreyTransparent: { light: "rgba(0, 28, 36, 0.3)", dark: "rgba(0, 0, 0, 0.3)" },
  colorGreyTransparentHeavy: { light: "rgba(0, 28, 36, 0.5)", dark: "rgba(0, 0, 0, 0.5)" },
  colorGreyTransparentLight: { light: "rgba(0, 28, 36, 0.15)", dark: "rgba(0, 0, 0, 0.3)" },
  colorBackgroundButtonLinkActive: { light: "{colorGrey200}", dark: "{colorGrey900}" },
  colorBackgroundButtonLinkHover: { light: "{colorGrey100}" },
  colorBackgroundButtonNormalActive: { light: "{colorGrey200}", dark: "{colorGrey900}" },
  colorBackgroundButtonNormalDefault: { dark: "{colorGrey700}" },
  colorBackgroundButtonNormalDisabled: { dark: "{colorGrey700}" },
  colorBackgroundButtonNormalHover: { light: "{colorGrey100}" },
  colorBackgroundButtonPrimaryActive: { light: "{colorBlue900}", dark: "{colorBlue400}" },
  colorBackgroundButtonPrimaryDefault: { light: "{colorBlue600}", dark: "{colorBlue400}" },
  colorBackgroundButtonPrimaryDisabled: { light: "{colorWhite}", dark: "{colorGrey700}" },
  colorBackgroundButtonPrimaryHover: { light: "{colorBlue700}", dark: "{colorBlue500}" },
  colorBackgroundCalendarCurrentDate: { dark: "{colorGrey900}" },
  colorBackgroundCellShaded: { light: "{colorGrey150}", dark: "{colorGrey900}" },
  colorBackgroundCodeEditorLoading: "{colorBackgroundCodeEditorStatusBar}",
  colorBackgroundContainerContent: { dark: "{colorGrey700}" },
  colorBackgroundContainerHeader: { light: "{colorGrey100}", dark: "{colorGrey750}" },
  colorBackgroundDropdownItemDefault: { dark: "{colorGrey700}" },
  colorBackgroundDropdownItemFilterMatch: { dark: "{colorBlue900}" },
  colorBackgroundHomeHeader: { light: "{colorBlack}", dark: "{colorBlack}" },
  colorBackgroundInputDisabled: { dark: "{colorGrey650}" },
  colorBackgroundItemSelected: { dark: "{colorBlue900}" },
  colorBackgroundLayoutMain: { light: "{colorGrey150}", dark: "{colorGrey900}" },
  colorBackgroundLayoutMobilePanel: "{colorBackgroundLayoutPanelContent}",
  colorBackgroundLayoutToggleActive: "{colorGrey700}",
  colorBackgroundLayoutToggleDefault: "transparent",
  colorBackgroundLayoutToggleHover: "{colorGrey600}",
  colorBackgroundLayoutToggleSelectedDefault: { light: "{colorBlue600}", dark: "{colorBlue400}" },
  colorBackgroundModalOverlay: { light: "{colorGreyOpaque90}", dark: "{colorGreyOpaque80}" },
  colorBackgroundNotificationStackBar: "{colorGrey700}",
  colorBackgroundNotificationStackBarActive: "{colorGrey700}",
  colorBackgroundNotificationStackBarHover: "{colorGrey600}",
  colorBackgroundProgressBarContentInFlash: { light: "{colorGreyOpaque70}", dark: "{colorGrey100}" },
  colorBackgroundSegmentHover: "{colorBackgroundButtonNormalDefault}",
  colorBackgroundTilesDisabled: { dark: "{colorGrey700}" },
  colorBackgroundToggleCheckedDisabled: { dark: "{colorBlue700}" },
  colorBorderButtonNormalActive: "{colorBorderButtonNormalDefault}",
  colorBorderButtonNormalDefault: { light: "{colorGrey600}", dark: "{colorGrey500}" },
  colorBorderButtonNormalDisabled: { light: "{colorGrey300}", dark: "{colorGrey650}" },
  colorBorderButtonNormalHover: { light: "{colorGrey900}", dark: "{colorGrey400}" },
  colorBorderButtonPrimaryDisabled: { light: "{colorGrey300}", dark: "{colorGrey650}" },
  colorBorderCalendarGrid: { light: "{colorBorderDropdownItemDefault}", dark: "{colorBorderDividerDefault}" },
  colorBorderCalendarGridSelectedFocusRing: "{colorBorderItemFocused}",
  colorBorderCodeEditorPaneItemHover: { light: "{colorGrey550}", dark: "{colorGrey500}" },
  colorBorderContainerDivider: "{colorBorderDividerDefault}",
  colorBorderContainerTop: { light: "{colorGrey200}", dark: "{colorGrey700}" },
  colorBorderControlDefault: { light: "{colorGrey550}" },
  colorBorderDividerActive: "{colorGrey550}",
  colorBorderDividerDefault: { light: "{colorGrey200}", dark: "{colorGrey650}" },
  colorBorderDividerInteractiveDefault: "{colorGrey550}",
  colorBorderDividerPanelBottom: "{colorShadowSide}",
  colorBorderDividerPanelSide: "transparent",
  colorBorderDividerSecondary: { light: "{colorGrey200}", dark: "{colorGrey650}" },
  colorBorderDropdownContainer: "transparent",
  colorBorderDropdownItemHover: { dark: "{colorGrey500}" },
  colorBorderDropdownItemDimmedHover: `{colorBorderDropdownItemHover}`,
  colorBorderDropdownItemSelected: "{colorBorderDropdownItemDefault}",
  colorBorderDropdownItemTop: "{colorBorderDropdownItemDefault}",
  colorBorderInputDefault: { light: "{colorGrey550}", dark: "{colorGrey500}" },
  colorBorderInputFocused: "{colorBorderItemFocused}",
  colorBorderItemFocused: { light: "{colorBlue600}" },
  colorBorderItemPlaceholder: "{colorTransparent}",
  colorBorderNotificationStackBar: "{colorGrey700}",
  colorBorderPanelHeader: "{colorBorderDividerDefault}",
  colorBorderPopover: { light: "{colorGrey300}", dark: "{colorGrey600}" },
  colorBorderSegmentActive: "{colorBorderSegmentHover}",
  colorBorderSegmentDefault: { light: "{colorGrey550}", dark: "{colorGrey500}" },
  colorBorderSegmentDisabled: "{colorBorderButtonNormalDisabled}",
  colorBorderSegmentHover: { light: "{colorGrey900}", dark: "{colorWhite}" },
  colorBorderDropdownItemFocused: { light: "{colorBlue600}", dark: "{colorBlue500}" },
  colorBorderStatusError: { dark: "{colorRed600}" },
  colorBorderStatusSuccess: { dark: "{colorGreen600}" },
  colorBorderTabsDivider: { light: "{colorGrey400}", dark: "{colorGrey650}" },
  colorBorderTabsShadow: { light: "{colorBorderDividerDefault}" },
  colorBorderTabsUnderline: "{colorTextInteractiveHover}",
  colorBorderTilesDisabled: { light: "{colorTransparent}", dark: "{colorGrey650}" },
  colorBorderTutorial: { light: "{colorGrey400}", dark: "{colorGrey500}" },
  colorForegroundControlDefault: { dark: "{colorWhite}" },
  colorForegroundControlDisabled: { dark: "{colorGrey550}" },
  colorStrokeCodeEditorResizeHandler: "{colorGrey550}",
  colorStrokeCodeEditorGutterActiveLineDefault: { dark: "{colorGrey650}" },
  colorTextAccent: { light: "{colorBlue600}", dark: "{colorBlue400}" },
  colorTextBodyDefault: { light: "{colorGrey900}", dark: "{colorGrey300}" },
  colorTextBodySecondary: { light: "{colorGrey600}", dark: "{colorGrey300}" },
  colorTextBreadcrumbCurrent: { dark: "{colorGrey300}" },
  colorTextBreadcrumbIcon: { light: "{colorGrey550}" },
  colorTextButtonInlineIconDefault: "{colorTextInteractiveDefault}",
  colorTextButtonInlineIconHover: "{colorTextInteractiveHover}",
  colorTextButtonNormalActive: { light: "{colorGrey900}", dark: "{colorGrey100}" },
  colorTextButtonNormalDefault: { light: "{colorGrey600}", dark: "{colorGrey300}" },
  colorTextButtonNormalHover: { light: "{colorGrey900}", dark: "{colorGrey100}" },
  colorTextLinkButtonNormalDefault: "{colorTextButtonNormalDefault}",
  colorTextLinkButtonNormalHover: "{colorTextButtonNormalHover}",
  colorTextLinkButtonNormalActive: "{colorTextButtonNormalActive}",
  colorTextCalendarDateHover: "{colorTextDropdownItemHighlighted}",
  colorTextCalendarDateSelected: "{colorTextDropdownItemHighlighted}",
  colorTextCalendarMonth: "{colorTextBodySecondary}",
  colorTextColumnHeader: { dark: "{colorGrey450}" },
  colorTextColumnSortingIcon: { light: "{colorGrey550}", dark: "{colorGrey450}" },
  colorTextDisabledInlineEdit: { dark: "{colorGrey450}" },
  colorTextGroupLabel: "{colorTextLabel}",
  colorTextExpandableSectionDefault: "{colorTextInteractiveDefault}",
  colorTextExpandableSectionHover: "{colorTextInteractiveHover}",
  colorTextExpandableSectionNavigationIconDefault: "{colorTextIconCaret}",
  colorTextHeadingDefault: { light: "{colorGrey900}", dark: "{colorGrey200}" },
  colorTextHeadingSecondary: { light: "{colorGrey600}", dark: "{colorGrey300}" },
  colorTextHomeHeaderDefault: { light: "{colorWhite}", dark: "{colorGrey200}" },
  colorTextHomeHeaderSecondary: "{colorGrey300}",
  colorTextFormDefault: { light: "{colorGrey900}", dark: "{colorGrey300}" },
  colorTextInputDisabled: { light: "{colorGrey500}" },
  colorTextInputPlaceholder: { light: "{colorGrey550}", dark: "{colorGrey500}" },
  colorTextInputPlaceholderDisabled: "{colorTextInputPlaceholder}",
  colorTextLabel: { light: "{colorGrey600}", dark: "{colorGrey450}" },
  colorTextLayoutToggle: { light: "{colorGrey600}", dark: "{colorGrey300}" },
  colorTextLayoutToggleActive: { light: "{colorWhite}", dark: "{colorGrey800}" },
  colorTextLayoutToggleHover: { light: "{colorBlue600}", dark: "{colorBlue500}" },
  colorTextLayoutToggleSelected: { light: "{colorWhite}", dark: "{colorGrey900}" },
  colorTextLinkDefault: { dark: "{colorBlue400}" },
  colorTextLinkHover: { light: "{colorBlue700}", dark: "{colorBlue300}" },
  colorTextLinkInvertedHover: "{colorTextNotificationDefault}",
  colorTextLinkButtonUnderline: "currentColor",
  colorTextLinkButtonUnderlineHover: "currentColor",
  colorTextPaginationPageNumberActiveDisabled: "{colorTextBodySecondary}",
  colorTextPaginationPageNumberDefault: { dark: "{colorTextInteractiveDefault}" },
  colorTextSegmentActive: { dark: "{colorGrey800}" },
  colorTextSegmentDefault: "{colorTextButtonNormalDefault}",
  colorTextStatusInfo: { dark: "{colorBlue400}" },
  colorBoardPlaceholderActive: { light: "{colorGrey300}", dark: "{colorGrey550}" },
  colorBoardPlaceholderHover: { light: "{colorBlue300}", dark: "{colorBlue600}" },
  colorDragPlaceholderActive: { light: "{colorGrey300}", dark: "{colorGrey550}" },
  colorDragPlaceholderHover: { light: "{colorBlue300}", dark: "{colorBlue600}" },
  colorDropzoneBackgroundActive: { light: "{colorGrey300}", dark: "{colorGrey550}" },
  colorDropzoneBackgroundHover: { light: "{colorBlue300}", dark: "{colorBlue600}" },
  colorDropzoneTextActive: { light: "{colorGrey600}", dark: "{colorGrey900}" },
  colorDropzoneTextHover: { light: "{colorBlue900}", dark: "{colorWhite}" },
  colorBackgroundDropdownItemHover: { light: "{colorGrey150}", dark: "{colorGrey650}" }
};
const expandedTokens = (0, import_merge.default)(
  {},
  import_colors.tokens,
  (0, import_utils.expandColorDictionary)(tokens)
);
const mode = "color";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  mode,
  tokens
});
