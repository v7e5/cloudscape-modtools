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
var motion_exports = {};
__export(motion_exports, {
  mode: () => mode,
  tokens: () => expandedTokens
});
module.exports = __toCommonJS(motion_exports);
var import_utils = require("../utils");
var import_environment = require("../utils/environment");
const tokens = {
  motionDurationExtraFast: { default: "45ms", disabled: "0ms" },
  motionDurationExtraSlow: { default: "270ms", disabled: "0ms" },
  motionDurationFast: { default: "90ms", disabled: "0ms" },
  motionDurationModerate: { default: "135ms", disabled: "0ms" },
  motionDurationRefreshOnlyAmbient: { default: "2000ms", disabled: "0ms" },
  motionDurationRefreshOnlyFast: { default: "115ms", disabled: "0ms" },
  motionDurationRefreshOnlyMedium: { default: "165ms", disabled: "0ms" },
  motionDurationRefreshOnlySlow: { default: "250ms", disabled: "0ms" },
  motionDurationRotate180: "{motionDurationModerate}",
  motionDurationRotate90: "{motionDurationModerate}",
  motionDurationShowPaced: "{motionDurationSlow}",
  motionDurationShowQuick: "{motionDurationModerate}",
  motionDurationSlow: { default: "180ms", disabled: "0ms" },
  motionDurationTransitionQuick: "{motionDurationFast}",
  motionDurationTransitionShowPaced: "{motionDurationSlow}",
  motionDurationTransitionShowQuick: "{motionDurationFast}",
  motionEasingEaseOutQuart: "cubic-bezier(0.165, 0.84, 0.44, 1)",
  motionEasingRefreshOnlyA: "cubic-bezier(0, 0, 0, 1)",
  motionEasingRefreshOnlyB: "cubic-bezier(1, 0, 0.83, 1)",
  motionEasingRefreshOnlyC: "cubic-bezier(0.84, 0, 0.16, 1)",
  motionEasingRefreshOnlyD: "cubic-bezier(0.33, 0, 0.67, 1)",
  motionEasingRotate180: "{motionEasingEaseOutQuart}",
  motionEasingRotate90: "{motionEasingEaseOutQuart}",
  motionEasingShowPaced: "ease-out",
  motionEasingShowQuick: "ease-out",
  motionEasingTransitionQuick: "linear",
  motionEasingTransitionShowPaced: "ease-out",
  motionEasingTransitionShowQuick: "linear",
  motionEasingResponsive: "{motionEasingRefreshOnlyA}",
  motionEasingSticky: "{motionEasingRefreshOnlyB}",
  motionEasingExpressive: "{motionEasingRefreshOnlyC}",
  motionDurationResponsive: "{motionDurationRefreshOnlyFast}",
  motionDurationExpressive: "{motionDurationRefreshOnlyMedium}",
  motionDurationComplex: "{motionDurationRefreshOnlySlow}",
  motionKeyframesFadeIn: "awsui-fade-in-" + import_environment.tokenStylesSuffix,
  motionKeyframesFadeOut: "awsui-fade-out-" + import_environment.tokenStylesSuffix,
  motionKeyframesStatusIconError: "awsui-status-icon-error-" + import_environment.tokenStylesSuffix,
  motionKeyframesScalePopup: "awsui-scale-popup-" + import_environment.tokenStylesSuffix
};
const expandedTokens = (0, import_utils.expandMotionDictionary)(tokens);
const mode = "motion";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  mode,
  tokens
});
