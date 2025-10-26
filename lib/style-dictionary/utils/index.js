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
var utils_exports = {};
__export(utils_exports, {
  expandColorDictionary: () => expandColorDictionary,
  expandDensityDictionary: () => expandDensityDictionary,
  expandMotionDictionary: () => expandMotionDictionary,
  pickState: () => pickState
});
module.exports = __toCommonJS(utils_exports);
const expandColorEntry = (entry) => {
  if (typeof entry === "string") {
    return {
      light: entry,
      dark: entry
    };
  }
  return entry;
};
const expandDensityEntry = (entry) => {
  if (typeof entry === "string") {
    return {
      comfortable: entry,
      compact: entry
    };
  }
  return entry;
};
const expandMotionEntry = (entry) => {
  if (typeof entry === "string") {
    return {
      default: entry,
      disabled: entry
    };
  }
  return entry;
};
const expandColorDictionary = (dictionary) => {
  return Object.keys(dictionary).reduce((acc, _key) => {
    const key = _key;
    acc[key] = expandColorEntry(dictionary[key]);
    return acc;
  }, {});
};
const expandDensityDictionary = (dictionary) => {
  return Object.keys(dictionary).reduce((acc, _key) => {
    const key = _key;
    acc[key] = expandDensityEntry(dictionary[key]);
    return acc;
  }, {});
};
const expandMotionDictionary = (dictionary) => {
  return Object.keys(dictionary).reduce((acc, _key) => {
    const key = _key;
    acc[key] = expandMotionEntry(dictionary[key]);
    return acc;
  }, {});
};
const pickState = (tokenCategory, state) => {
  return Object.fromEntries(
    Object.entries(tokenCategory).map(([token, value]) => {
      return [token, typeof value === "object" ? value[state] : value];
    })
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  expandColorDictionary,
  expandDensityDictionary,
  expandMotionDictionary,
  pickState
});
