// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';

import InternalAutosuggest from './internal';
import { getExternalProps } from '../internal/utils/external-props';

import useBaseComponent from '../internal/hooks/use-base-component';

export { AutosuggestProps };

const Autosuggest = React.forwardRef(
  (
    { filteringType = 'auto', statusType = 'finished', disableBrowserAutocorrect = false, ...props }: AutosuggestProps,
    ref: React.Ref<AutosuggestProps.Ref>
  ) => {
    const baseComponentProps = useBaseComponent('Autosuggest', {
      props: {
        autoFocus: props.autoFocus,
        disableBrowserAutocorrect,
        expandToViewport: props.expandToViewport,
        filteringType,
        readOnly: props.readOnly,
        virtualScroll: props.virtualScroll,
      },
    });
    const externalProps = getExternalProps(props);
    return (
      <InternalAutosuggest
        filteringType={filteringType}
        statusType={statusType}
        disableBrowserAutocorrect={disableBrowserAutocorrect}
        {...externalProps}
        {...baseComponentProps}
        ref={ref}
      />
    );
  }
);


export default Autosuggest;
