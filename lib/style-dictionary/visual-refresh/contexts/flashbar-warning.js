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
var flashbar_warning_exports = {};
__export(flashbar_warning_exports, {
  sharedTokens: () => sharedTokens,
  tokens: () => expandedTokens
});
module.exports = __toCommonJS(flashbar_warning_exports);
var import_colors = require("../colors");
var import_merge = __toESM(require("lodash/merge"));
var import_utils = require("../../utils");
var import_alert = require("./alert");
const sharedTokens = {
  // Links in flash should be using color="inverted", which makes them underlined by default in flashbars
  // and changes their color to match the surrounding text.
  colorTextNotificationDefault: "{colorTextNotificationYellow}",
  colorTextLinkInvertedHover: "{colorTextNotificationYellow}",
  // Focus outline matches the text color to align with other flashbar types and to ensure color contrast.
  colorBorderItemFocused: "{colorTextNotificationYellow}",
  // Dismiss button
  colorTextInteractiveInvertedDefault: "{colorGrey600}",
  colorTextInteractiveInvertedHover: "{colorGrey900}",
  // Expandable sections
  colorTextExpandableSectionDefault: "{colorTextNotificationYellow}",
  colorTextExpandableSectionHover: "{colorTextNotificationYellow}",
  // Bottom border of the header when expanded (default variant)
  colorBorderDividerDefault: "{colorTextNotificationYellow}",
  // Description
  colorTextHeadingSecondary: "{colorTextNotificationYellow}",
  // Content
  colorTextBodyDefault: "{colorTextNotificationYellow}"
};
const tokens = {
  ...sharedTokens,
  // For buttons we use the same tokens as alert. But because the warning flash messages
  // look the same in light and dark mode, we only pick the light mode colors.
  ...(0, import_utils.pickState)((0, import_utils.expandColorDictionary)(import_alert.alertButtonTokens), "light")
};
const expandedTokens = (0, import_utils.expandColorDictionary)(
  (0, import_merge.default)({}, import_colors.tokens, tokens)
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  sharedTokens,
  tokens
});
