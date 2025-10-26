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
var borders_exports = {};
__export(borders_exports, {
  tokens: () => expandedTokens
});
module.exports = __toCommonJS(borders_exports);
var import_borders = require("../visual-refresh/borders");
var import_merge = __toESM(require("lodash/merge"));
const tokens = {
  borderActiveWidth: "2px",
  borderCodeEditorStatusDividerWidth: "0px",
  borderContainerStickyWidth: "1px",
  borderContainerTopWidth: "1px",
  borderControlFocusRingShadowSpread: "1px",
  borderControlInvalidFocusRingShadowSpread: "{borderControlFocusRingShadowSpread}",
  borderDividerSectionWidth: "1px",
  borderDropdownVirtualOffsetWidth: "0px",
  borderFieldWidth: "1px",
  borderInvalidWidth: "4px",
  borderItemWidth: "1px",
  borderLineChartLineJoin: "miter",
  borderPanelHeaderWidth: "0px",
  borderPanelTopWidth: "0px",
  borderRadiusAlert: "{borderRadiusInput}",
  borderRadiusBadge: "16px",
  borderRadiusButton: "2px",
  borderRadiusCalendarDayFocusRing: "2px",
  borderRadiusCodeEditor: "{borderRadiusItem}",
  borderRadiusContainer: "0px",
  borderRadiusControlCircularFocusRing: "50%",
  borderRadiusControlDefaultFocusRing: "{borderRadiusInput}",
  borderRadiusDropzone: "0px",
  borderRadiusFlashbar: "0px",
  borderRadiusItem: "0px",
  borderRadiusInput: "2px",
  borderRadiusTabsFocusRing: "0px",
  borderTableStickyWidth: "0px",
  borderLinkFocusRingOutline: "5px auto Highlight",
  borderLinkFocusRingShadowSpread: "0px"
};
const expandedTokens = (0, import_merge.default)({}, import_borders.tokens, tokens);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  tokens
});
