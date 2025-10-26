// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useEffect } from 'react';


import CollapsibleFlashbar from './collapsible-flashbar';
import NonCollapsibleFlashbar from './non-collapsible-flashbar';



export { FlashbarProps };

export default function Flashbar(props: FlashbarProps) {
  

  if (props.stackItems) {
    return <CollapsibleFlashbar {...props} />;
  } else {
    return <NonCollapsibleFlashbar {...props} />;
  }
}


