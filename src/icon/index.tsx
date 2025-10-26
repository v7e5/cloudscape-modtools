// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import useBaseComponent from '../internal/hooks/use-base-component';

import InternalIcon from './internal';


export { IconProps };

export default function Icon({ size = 'normal', variant = 'normal', ...props }: IconProps) {
  const baseComponentProps = useBaseComponent('Icon', { props: { name: props.name, size, variant } });
  return <InternalIcon size={size} variant={variant} {...props} {...baseComponentProps} />;
}


