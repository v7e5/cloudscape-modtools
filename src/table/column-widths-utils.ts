// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0






export function setElementWidths(element: HTMLElement, styles: React.CSSProperties) {
  function setProperty(property: 'width' | 'minWidth' | 'maxWidth') {
    const value = styles[property];
    let widthCssValue = '';
    if (typeof value === 'number') {
      widthCssValue = value + 'px';
    }
    if (typeof value === 'string') {
      widthCssValue = value;
    }
    if (element.style[property] !== widthCssValue) {
      element.style[property] = widthCssValue;
    }
  }
  setProperty('width');
  setProperty('minWidth');
  setProperty('maxWidth');
}

function checkProperty(column: TableProps.ColumnDefinition<any>, name: 'width' | 'minWidth') {
  const value = column[name];
  
}
