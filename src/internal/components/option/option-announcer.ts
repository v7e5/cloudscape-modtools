// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0


function defaultOptionDescription(option: OptionDefinition, parentGroup: OptionGroup | undefined) {
  return [
    parentGroup && parentGroup.label,
    option.__labelPrefix,
    option.label || option.value,
    option.description,
    option.labelTag,
  ]
    .concat(option.tags)
    .filter(el => !!el)
    .join(' ');
}

export default defaultOptionDescription;
