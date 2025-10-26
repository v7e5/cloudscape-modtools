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
var classic_exports = {};
__export(classic_exports, {
  buildClassicOpenSource: () => buildClassicOpenSource,
  default: () => classic_default
});
module.exports = __toCommonJS(classic_exports);
var import_theming_build = require("@cloudscape-design/theming-build");
var import_modes = require("../utils/modes");
var import_contexts = require("../utils/contexts");
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
function buildClassicOpenSource(builder2) {
  tokenCategories.forEach(({ tokens, mode: modeId }) => {
    const mode = modes.find((mode2) => mode2.id === modeId);
    builder2.addTokens(tokens, mode);
  });
  builder2.addContext((0, import_contexts.createCompactTableContext)(require("./contexts/compact-table").tokens));
  builder2.addContext((0, import_contexts.createTopNavigationContext)(require("./contexts/top-navigation").tokens));
  builder2.addContext((0, import_contexts.createFlashbarContext)(require("./contexts/flashbar").tokens));
  builder2.addContext((0, import_contexts.createFlashbarWarningContext)(require("./contexts/flashbar-warning").tokens));
  builder2.addContext((0, import_contexts.createAlertContext)(require("./contexts/alert").tokens));
  return builder2.build();
}
const builder = new import_theming_build.ThemeBuilder("classic", ":root", modes);
const theme = buildClassicOpenSource(builder);
var classic_default = theme;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  buildClassicOpenSource
});
