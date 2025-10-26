// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { InternalContainerAsSubstep } from './internal';

import { getExternalProps } from '../internal/utils/external-props';

import useBaseComponent from '../internal/hooks/use-base-component';

import { BasePropsWithAnalyticsMetadata, getAnalyticsMetadataProps } from '../internal/base-component';

export { ContainerProps };

export default function Container({
  variant = 'default',
  disableHeaderPaddings = false,
  disableContentPaddings = false,
  fitHeight = false,
  ...props
}: ContainerProps) {
  
  const baseComponentProps = useBaseComponent(
    'Container',
    {
      props: { disableContentPaddings, disableHeaderPaddings, fitHeight, variant },
    },
    
  );
  const externalProps = getExternalProps(props);

  return (
    
      <InternalContainerAsSubstep
        variant={variant}
        disableContentPaddings={disableContentPaddings}
        disableHeaderPaddings={disableHeaderPaddings}
        fitHeight={fitHeight}
        {...props}
        {...externalProps}
        {...baseComponentProps}
      />
    
  );
}


