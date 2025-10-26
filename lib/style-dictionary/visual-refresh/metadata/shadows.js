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
var shadows_exports = {};
__export(shadows_exports, {
  default: () => shadows_default
});
module.exports = __toCommonJS(shadows_exports);
const metadata = {
  shadowContainer: { description: "Shadow for containers and cards." },
  shadowContainerActive: { description: "Shadow for containers and cards in active state.", public: true },
  shadowDropup: {
    description: "Shadow for dropdown elements that pop up above the trigger, for example a dropdown at the bottom of the screen."
  },
  shadowPanel: { description: "Shadow for global elements like app layout panels and top navigation." },
  shadowPanelToggle: { description: "Shadow for circular toggles in visual refresh." },
  shadowSplitBottom: {
    description: "Adjustment to the panel shadow so it displays the same for panels positioned at the bottom of the screen."
  },
  shadowSplitSide: {
    description: "Adjustment to the panel shadow so it does not bleed onto adjacent panels to the right of it."
  },
  shadowSticky: { description: "Shadow for sticky elements or inner elements that already have shadow around." }
};
var shadows_default = metadata;
