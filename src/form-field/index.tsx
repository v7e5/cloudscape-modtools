// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import InternalFormField from './internal';

import useBaseComponent from '../internal/hooks/use-base-component';
import { BasePropsWithAnalyticsMetadata, getAnalyticsMetadataProps } from '../internal/base-component';



export { FormFieldProps };

export default function FormField({ stretch = false, ...props }: FormFieldProps) {
  
  const baseComponentProps = useBaseComponent('FormField', { props: { stretch } }, );

  return (
    <InternalFormField
      stretch={stretch}
      {...props}
      __hideLabel={false}
      
      {...baseComponentProps}
    />
  );
}


