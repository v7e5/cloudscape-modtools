// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';


import useBaseComponent from '../internal/hooks/use-base-component';

import InternalTopNavigation from './internal';

export { TopNavigationProps };

export default function TopNavigation({ utilities = [], ...restProps }: TopNavigationProps) {
  const baseComponentProps = useBaseComponent('TopNavigation');
  return <InternalTopNavigation {...baseComponentProps} utilities={utilities} {...restProps} />;
}


