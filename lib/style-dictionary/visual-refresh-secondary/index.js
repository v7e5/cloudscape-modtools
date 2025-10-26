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
var visual_refresh_secondary_exports = {};
__export(visual_refresh_secondary_exports, {
  default: () => visual_refresh_secondary_default
});
module.exports = __toCommonJS(visual_refresh_secondary_exports);
var import_theming_build = require("@cloudscape-design/theming-build");
var import_modes = require("../utils/modes");
var import_visual_refresh = require("../visual-refresh");
const modes = [
  (0, import_modes.createColorMode)(".awsui-dark-mode"),
  (0, import_modes.createDensityMode)(".awsui-compact-mode"),
  (0, import_modes.createMotionMode)(".awsui-motion-disabled")
];
const builder = new import_theming_build.ThemeBuilder("visual-refresh", ".awsui-visual-refresh", modes);
const theme = (0, import_visual_refresh.buildVisualRefresh)(builder);
var visual_refresh_secondary_default = theme;
