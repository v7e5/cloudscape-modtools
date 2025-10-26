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
var metadata_exports = {};
__export(metadata_exports, {
  expandMetadata: () => expandMetadata,
  updateDescriptions: () => updateDescriptions
});
module.exports = __toCommonJS(metadata_exports);
var import_lodash = require("lodash");
function expandMetadata(dictionary) {
  const entries = Object.entries(dictionary).map(([token, metadata]) => {
    return [
      token,
      {
        ...metadata,
        sassName: metadata.sassName ? metadata.sassName : `$${(0, import_lodash.kebabCase)(token)}`
      }
    ];
  });
  return Object.fromEntries(entries);
}
function updateDescriptions(descriptions, baseDictionary) {
  const entries = Object.entries(baseDictionary).map(([token, metadata]) => {
    return [
      token,
      {
        ...metadata,
        description: descriptions[token] || metadata.description
      }
    ];
  });
  return Object.fromEntries(entries);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  expandMetadata,
  updateDescriptions
});
