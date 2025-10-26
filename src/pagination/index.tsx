// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';

import useBaseComponent from '../internal/hooks/use-base-component';

import InternalPagination from './internal';

export { PaginationProps };

export default function Pagination(props: PaginationProps) {
  const baseComponentProps = useBaseComponent('Pagination', { props: { openEnd: props.openEnd } });
  return <InternalPagination {...props} {...baseComponentProps} />;
}


