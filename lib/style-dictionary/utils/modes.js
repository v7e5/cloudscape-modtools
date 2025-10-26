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
var modes_exports = {};
__export(modes_exports, {
  createColorMode: () => createColorMode,
  createDensityMode: () => createDensityMode,
  createMotionMode: () => createMotionMode
});
module.exports = __toCommonJS(modes_exports);
const createColorMode = (darkSelector) => ({
  id: "color",
  states: {
    light: { default: true },
    dark: { selector: darkSelector, media: "not print" }
  }
});
const createDensityMode = (compactSelector) => ({
  id: "density",
  states: {
    comfortable: { default: true },
    compact: { selector: compactSelector }
  }
});
const createMotionMode = (disabledSelector) => ({
  id: "motion",
  states: {
    default: { default: true },
    disabled: { selector: disabledSelector }
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createColorMode,
  createDensityMode,
  createMotionMode
});
