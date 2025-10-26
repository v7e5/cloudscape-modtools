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
  default: () => motion_default
});
module.exports = __toCommonJS(motion_exports);
const metadata = {
  motionEasingResponsive: {
    description: "The easing curve for providing responsive yet smooth visual feedback.",
    public: true,
    themeable: false
  },
  motionEasingSticky: {
    description: "The easing curve for making an element sticky to a certain state.",
    public: true,
    themeable: false
  },
  motionEasingExpressive: {
    description: "The easing curve for drawing a user's attention in an expressive way.",
    public: true,
    themeable: false
  },
  motionDurationResponsive: {
    description: "The duration for making the motion feel quick and responsive.",
    public: true,
    themeable: false
  },
  motionDurationExpressive: {
    description: "The duration for accommodating the motion with more expressiveness.",
    public: true,
    themeable: false
  },
  motionDurationComplex: {
    description: "The duration for drawing more attention or accommodating for more complexity.",
    public: true,
    themeable: false
  },
  motionKeyframesFadeIn: {
    description: "The CSS keyframes for showing an element.",
    public: true,
    themeable: false
  },
  motionKeyframesFadeOut: {
    description: "The CSS keyframes for hiding an element.",
    public: true,
    themeable: false
  },
  motionKeyframesScalePopup: {
    description: "The CSS keyframes for scaling up an element to draw the user's attention.",
    public: true,
    themeable: false,
    visualRefreshOnly: true
  },
  motionKeyframesStatusIconError: {
    description: "The CSS keyframes applied to an error status icon to draw the user's attention.",
    public: true,
    themeable: false,
    visualRefreshOnly: true
  }
};
var motion_default = metadata;
