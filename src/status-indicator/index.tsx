// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import InternalStatusIndicator, {  } from './internal';

import useBaseComponent from '../internal/hooks/use-base-component';

export {  };

export default function StatusIndicator({ type = 'success', wrapText = true, ...props }: StatusIndicatorProps) {
  const baseComponentProps = useBaseComponent('StatusIndicator', {
    props: { colorOverride: props.colorOverride, type, wrapText },
  });
  return <InternalStatusIndicator type={type} wrapText={wrapText} {...props} {...baseComponentProps} />;
}


