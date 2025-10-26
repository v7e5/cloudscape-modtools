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
var visual_refresh_exports = {};
__export(visual_refresh_exports, {
  buildVisualRefresh: () => buildVisualRefresh,
  default: () => visual_refresh_default
});
module.exports = __toCommonJS(visual_refresh_exports);
var import_theming_build = require("@cloudscape-design/theming-build");
var import_modes = require("../utils/modes");
var import_contexts = require("../utils/contexts");
var import_header_alert = __toESM(require("./contexts/header-alert"));
const modes = [
  (0, import_modes.createColorMode)(".awsui-dark-mode"),
  (0, import_modes.createDensityMode)(".awsui-compact-mode"),
  (0, import_modes.createMotionMode)(".awsui-motion-disabled")
];
const tokenCategories = [
  require("./color-palette"),
  require("./color-charts"),
  require("./colors"),
  require("./typography"),
  require("./borders"),
  require("./motion"),
  require("./sizes"),
  require("./spacing"),
  require("./shadows")
];
function buildVisualRefresh(builder2) {
  tokenCategories.forEach(({ tokens, mode: modeId }) => {
    const mode = modes.find((mode2) => mode2.id === modeId);
    builder2.addTokens(tokens, mode);
  });
  builder2.addContext((0, import_contexts.createCompactTableContext)(require("./contexts/compact-table").tokens));
  builder2.addContext((0, import_contexts.createTopNavigationContext)(require("./contexts/top-navigation").tokens));
  builder2.addContext((0, import_contexts.createHeaderContext)(require("./contexts/header").tokens));
  builder2.addContext((0, import_contexts.createFlashbarContext)(require("./contexts/flashbar").tokens));
  builder2.addContext((0, import_contexts.createFlashbarWarningContext)(require("./contexts/flashbar-warning").tokens));
  builder2.addContext((0, import_contexts.createAlertContext)(require("./contexts/alert").tokens));
  builder2.addContext({
    id: "alert-header",
    selector: ".awsui-context-content-header .awsui-context-alert",
    tokens: import_header_alert.default
  });
  return builder2.build();
}
const builder = new import_theming_build.ThemeBuilder("visual-refresh", ":root", modes);
const theme = buildVisualRefresh(builder);
var visual_refresh_default = theme;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  buildVisualRefresh
});
