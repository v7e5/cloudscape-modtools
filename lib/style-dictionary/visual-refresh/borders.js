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
var borders_exports = {};
__export(borders_exports, {
  tokens: () => tokens
});
module.exports = __toCommonJS(borders_exports);
const tokens = {
  borderActiveWidth: "4px",
  borderCodeEditorStatusDividerWidth: "{borderDividerSectionWidth}",
  borderContainerStickyWidth: "0px",
  borderContainerTopWidth: "0px",
  borderControlFocusRingShadowSpread: "0px",
  borderControlInvalidFocusRingShadowSpread: "2px",
  borderDividerListWidth: "1px",
  borderDividerSectionWidth: "1px",
  borderDropdownVirtualOffsetWidth: "2px",
  borderFieldWidth: "2px",
  borderInvalidWidth: "8px",
  borderItemWidth: "2px",
  borderLineChartDashArray: "3 5",
  borderLineChartLineJoin: "round",
  borderLineChartWidth: "2px",
  borderPanelHeaderWidth: "1px",
  borderPanelTopWidth: "1px",
  borderRadiusAlert: "{borderRadiusFlashbar}",
  borderRadiusBadge: "4px",
  borderRadiusButton: "20px",
  borderRadiusCalendarDayFocusRing: "3px",
  borderRadiusCodeEditor: "{borderRadiusInput}",
  borderRadiusContainer: "16px",
  borderRadiusControlCircularFocusRing: "4px",
  borderRadiusControlDefaultFocusRing: "4px",
  borderRadiusDropdown: "{borderRadiusItem}",
  borderRadiusDropzone: "12px",
  borderRadiusFlashbar: "12px",
  borderRadiusItem: "8px",
  borderRadiusInput: "8px",
  borderRadiusPopover: "{borderRadiusInput}",
  borderRadiusTabsFocusRing: "20px",
  borderRadiusTiles: "{borderRadiusInput}",
  borderRadiusToken: "{borderRadiusInput}",
  borderRadiusTutorialPanelItem: "{borderRadiusInput}",
  borderTableStickyWidth: "1px",
  borderLinkFocusRingOutline: "0",
  borderLinkFocusRingShadowSpread: "2px"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  tokens
});
