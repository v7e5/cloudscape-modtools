// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';

import InternalSpaceBetween from './internal';

import useBaseComponent from '../internal/hooks/use-base-component';

export { SpaceBetweenProps };

export default function SpaceBetween({ direction = 'vertical', ...props }: SpaceBetweenProps) {
  const baseComponentProps = useBaseComponent('SpaceBetween', {
    props: { alignItems: props.alignItems, direction, size: props.size },
  });
  return <InternalSpaceBetween direction={direction} {...props} {...baseComponentProps} />;
}


