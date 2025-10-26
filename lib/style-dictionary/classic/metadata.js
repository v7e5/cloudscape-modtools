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
var import_metadata = require("../utils/metadata");
var import_metadata2 = __toESM(require("../visual-refresh/metadata"));
const updatedDescriptions = {
  colorTextAccent: "The accent color used to guide a user. *For example: the highlighted page in the side navigation and active tab text.*",
  colorTextDropdownItemHighlighted: "The text color of hovered or selected dropdown items. *For example: selected day text color in date picker, label text color of the item on hover in a select, multiselect, and autosuggest.*",
  colorTextInteractiveDefault: "The color of clickable elements in their default state. *For example: expandable sections, tabs, and icons.*",
  colorTextInteractiveHover: "The color of clickable elements on hover. *For example: expandable sections, and icons on hover.*",
  spaceScaledM: "The M spacing unit which scales between modes. For example: top padding of content inside a container",
  spaceScaledXxl: "The XXL spacing unit which scales between modes. For example: horizontal padding for side navigation and help panel content."
};
const metadata = (0, import_metadata.updateDescriptions)(updatedDescriptions, import_metadata2.default);
var metadata_default = metadata;
