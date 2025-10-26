// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { InternalContainerAsSubstep } from '../container/internal';
import React from 'react';

import { InternalBaseComponentProps } from '../internal/hooks/use-base-component';



export interface ExpandableSectionContainerProps extends InternalBaseComponentProps {
  className?: string;
  header: React.ReactNode;
  children?: React.ReactNode;
  variant: InternalVariant;
  expanded: boolean | undefined;
  disableContentPaddings: boolean | undefined;
}

export const ExpandableSectionContainer = ({
  className,
  children,
  header,
  variant,
  expanded,
  disableContentPaddings,
  __internalRootRef,
  ...rest
}: ExpandableSectionContainerProps) => {
  if (variant === 'container' || variant === 'stacked') {
    return (
      
        <InternalContainerAsSubstep
          {...rest}
          className={className}
          header={header}
          variant={variant === 'stacked' ? 'stacked' : 'default'}
          disableContentPaddings={disableContentPaddings || !expanded}
          disableHeaderPaddings={true}
          __hiddenContent={!expanded}
          __internalRootRef={__internalRootRef}
        >
          {children}
        </InternalContainerAsSubstep>
      
    );
  }

  return (
    <div className={className} {...rest} ref={__internalRootRef}>
      {header}
      {children}
    </div>
  );
};
