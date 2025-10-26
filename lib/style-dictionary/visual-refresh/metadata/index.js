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
var metadata_exports = {};
__export(metadata_exports, {
  default: () => metadata_default
});
module.exports = __toCommonJS(metadata_exports);
var import_mapValues = __toESM(require("lodash/mapValues"));
var import_merge = __toESM(require("lodash/merge"));
var import_metadata = require("../../utils/metadata");
var import_borders = __toESM(require("./borders"));
var import_color_charts = __toESM(require("./color-charts"));
var import_color_palette = __toESM(require("./color-palette"));
var import_colors = __toESM(require("./colors"));
var import_motion = __toESM(require("./motion"));
var import_shadows = __toESM(require("./shadows"));
var import_sizes = __toESM(require("./sizes"));
var import_spacing = __toESM(require("./spacing"));
var import_typography = __toESM(require("./typography"));
var import__ = __toESM(require("../index"));
const allTokens = (0, import_mapValues.default)(import__.default.tokens, () => ({}));
const metadata = (0, import_metadata.expandMetadata)(
  (0, import_merge.default)({}, allTokens, import_borders.default, import_color_charts.default, import_color_palette.default, import_colors.default, import_motion.default, import_shadows.default, import_sizes.default, import_spacing.default, import_typography.default)
);
var metadata_default = metadata;
