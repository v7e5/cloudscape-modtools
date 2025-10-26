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
var compact_table_exports = {};
__export(compact_table_exports, {
  tokens: () => expandedTokens
});
module.exports = __toCommonJS(compact_table_exports);
var import_spacing = require("../spacing");
var import_merge = __toESM(require("lodash/merge"));
var import_utils = require("../../utils");
const spacingTokens = {
  spaceScaledXxxs: "{spaceNone}",
  spaceScaledXxs: "{spaceXxxs}",
  spaceScaledXs: "{spaceXxs}",
  spaceScaledS: "{spaceXs}",
  spaceScaledM: "{spaceS}",
  spaceScaledL: "{spaceM}",
  spaceScaledXl: "{spaceL}",
  spaceScaledXxl: "{spaceXl}",
  spaceScaledXxxl: "{spaceXxl}"
};
const sizeTokens = {
  sizeVerticalInput: "28px"
};
const expandedTokens = (0, import_utils.expandDensityDictionary)(
  (0, import_merge.default)({}, import_spacing.tokens, { ...spacingTokens, ...sizeTokens })
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  tokens
});
