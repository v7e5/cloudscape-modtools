// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';

import useBaseComponent from '../internal/hooks/use-base-component';

import InternalTextFilter from './internal';

export { TextFilterProps };

const TextFilter = React.forwardRef((props: TextFilterProps, ref: React.Ref<TextFilterProps.Ref>) => {
  const baseComponentProps = useBaseComponent('TextFilter');
  return <InternalTextFilter {...props} {...baseComponentProps} ref={ref} />;
});


export default TextFilter;
