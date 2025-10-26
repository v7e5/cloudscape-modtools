// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import useBaseComponent from '../internal/hooks/use-base-component';


import InternalCalendar from './internal';

export { CalendarProps };

export default function Calendar({
  locale = '',
  isDateEnabled = () => true,
  granularity = 'day',
  ...props
}: CalendarProps) {
  const baseComponentProps = useBaseComponent('Calendar');
  return (
    <InternalCalendar
      {...props}
      {...baseComponentProps}
      locale={locale}
      isDateEnabled={isDateEnabled}
      granularity={granularity}
    />
  );
}


