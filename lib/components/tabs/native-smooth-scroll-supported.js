const native_smooth_scroll_supported_default = () => {
  return 'scrollBehavior' in document.documentElement.style
}

export {
  native_smooth_scroll_supported_default as default
}
