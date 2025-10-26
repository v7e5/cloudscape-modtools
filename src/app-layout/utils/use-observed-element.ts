// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import {useResizeObserver} from '~/components/internal/toolkit/internal';
import { useCallback, useState } from 'react';

export function useObservedElement(selector: string) {
  const getElement = useCallback(() => {
    return document.querySelector(selector);
  }, [selector]);

  const [height, setHeight] = useState(0);

  useResizeObserver(getElement, entry => setHeight(entry.borderBoxHeight));

  return height;
}
