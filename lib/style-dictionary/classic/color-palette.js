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
var color_palette_exports = {};
__export(color_palette_exports, {
  tokens: () => expandedTokens
});
module.exports = __toCommonJS(color_palette_exports);
var import_color_palette = require("../visual-refresh/color-palette");
var import_merge = __toESM(require("lodash/merge"));
const tokens = {
  colorBlue100: "#f1faff",
  colorBlue300: "#99cbe4",
  colorBlue400: "#44b9d6",
  colorBlue500: "#00a1c9",
  colorBlue600: "#0073bb",
  colorBlue700: "#0a4a74",
  colorBlue900: "#12293b",
  colorGreen100: "#f2f8f0",
  colorGreen500: "#6aaf35",
  colorGreen600: "#1d8102",
  colorGreen900: "#172211",
  colorGrey100: "#fafafa",
  colorGrey150: "#f2f3f3",
  colorGrey200: "#eaeded",
  colorGrey300: "#d5dbdb",
  colorGrey400: "#aab7b8",
  colorGrey450: "#95a5a6",
  colorGrey500: "#879596",
  colorGrey550: "#687078",
  colorGrey600: "#545b64",
  colorGrey650: "#414750",
  colorGrey700: "#2a2e33",
  colorGrey750: "#21252c",
  colorGrey800: "#1a2029",
  colorGrey900: "#16191f",
  colorRed100: "#fdf3f1",
  colorRed500: "#ff5d64",
  colorRed600: "#d13212",
  colorRed900: "#270a11",
  colorYellow800: "#906806"
};
const expandedTokens = (0, import_merge.default)({}, import_color_palette.tokens, tokens);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  tokens
});
