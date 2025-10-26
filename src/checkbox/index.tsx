// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';

import InternalCheckbox from './internal';

import useBaseComponent from '../internal/hooks/use-base-component';

export { CheckboxProps };

const Checkbox = React.forwardRef(({ ...props }: CheckboxProps, ref: React.Ref<CheckboxProps.Ref>) => {
  const baseComponentProps = useBaseComponent('Checkbox');
  return <InternalCheckbox {...props} {...baseComponentProps} ref={ref} />;
});


export default Checkbox;
