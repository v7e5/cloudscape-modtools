#!/usr/bin/zsh
set -euo pipefail

_l=$(cl -b 222 -f 0 -o ':::')

_h() {
  echo -e ${_l}$(cl -b 17 -f 15 -o ' '${1}' ')
}

_rm() {
  git rm -rf --cached ${1} > /dev/null 2>&1 || :
  rm -rf ${1} || :
}

_rms() {
  _h rms

  local _a=()
  _a+=($(fd --search-path src \
    -HIL -t d '__a11y__|__integ__|__tests__|__mocks__|__motion__'))
  _a+=($(fd --search-path src/i18n -E messages -HIL -d 1))
  _a+=($(fd --search-path src/i18n/messages -E all.en.json -HIL -d 1 ))
  _a+=($(fd --search-path src --search-path style-dictionary \
    -HIL -t f -e ts -e tsx interfaces))
  _a+=($(fd --search-path src --search-path style-dictionary \
    -HIL -t f -e d.ts))

  for f in $_a; do
    _rm ${f}
  done

  for f in $(tail -n+15 .gitignore); do
    _rm ${f}
  done

  rm -rf lib/* || :
}

_generateEnvironment() {
  _h environment

  ./build-tools/tasks/generate-environment.js
}

_generateIcons() {
  _h icons

  ./build-tools/tasks/generate-icons.js
}

_generateIndexFile() {
  _h 'index file'

  rm -fv lib/components/index.js
  ./build-tools/tasks/generate-index-file.js
}

_generateCustomCssPropertiesMap() {
  _h 'custom cssproperties map'

  rm -f \
    src/internal/generated/custom-css-properties/{index.scss,index.ts} || :
  ./build-tools/tasks/generate-custom-css-properties.js
}

_styles() {
  _h styles

  cp -rf style-dictionary lib/

  cat <<EOL > lib/style-dictionary/utils/environment.ts
exports.tokenStylesSuffix = '$(
sha256sum src/internal/styles/global.scss | cut -c1-6)';
EOL
  pushd lib/style-dictionary/
    for f in $(fd -HIL -t f -e ts); do
      esbuild \
        --format=cjs \
        --tree-shaking=true \
        --platform=node \
          ${f} > ${f:r}'.js'
    done

    fd -HIL -t f -e ts -x rm -f
  popd

  ./build-tools/tasks/styles.js

  cat \
    ~/dev/aws/stash_components/ff_opensans.css \
    ~/dev/aws/stash_components/normset.css \
    lib/components/internal/base-component/styles.scoped.css \
      > lib/z.css

  rm -f lib/components/internal/base-component/styles.scoped.css

  pushd lib/components/internal/
    for f in $(fd -HIL -E base-component -t f -e scoped.css styles | sort); do
      cat ${f} >> ../../z.css
      rm -f ${f}
    done
  popd

  pushd lib/components/
    for f in $(fd -HIL -E internal -t f -e scoped.css styles | sort); do
      cat ${f} >> ../z.css
      rm -f ${f}
    done
  popd

  fd -HIL -t f -e selectors.js styles lib -x rm -f

  min lib/z.css > /dev/null
  mv -f lib/z_min.css lib/z.css
}

_pre_ts() {
  _h 'pre ts'

  for f in $(rg -wl 'useLayoutEffect' ${PWD}/src); do
    sed -i -e 's/\buseLayoutEffect\b/useEffect/' ${f}
  done

  for f in $(fd --search-path src -aHIL -t f -e js -e tsx -e ts -E theming); do
    ./build-tools/fmt/fix_imports.js ${f} || :
  done

  for f in $(rg -wl 'check-controlled' ${PWD}/src); do
    ./build-tools/fmt/check_controlled.js ${f} || :
  done

  for f in $(rg -wl 'isDevelopment' ${PWD}/src); do
    ./build-tools/fmt/is_development.js ${f} || :
  done

  for f in $(rg -wl 'checkDuplicateHrefs' ${PWD}/src); do
    ./build-tools/fmt/check_dup_hrefs.js ${f} || :
  done

  local _void_fn=(
    warnOnce
    checkOptionValueField
    checkSafeUrl
    initAwsUiVersions
    sendDismissMetric
    sendRenderMetric
    sendToggleMetric
    usePerformanceMarks
    useTelemetry
    checkSafeUrlRecursively
    FunnelMetrics
    metrics
    useLatencyMetrics
    applyDisplayName
  )
  for f in $(rg -wl '\b('${(j:|:)_void_fn}')\b' ${PWD}/src); do
    ./build-tools/fmt/void_fn.js ${f} || :
  done

  local _attr=(
    'data-awsui-referrer-id'
  )
  for f in $(rg -wl '\b('${(j:|:)_attr}')\b' ${PWD}/src); do
    ./build-tools/fmt/attr.js ${f} || :
  done

  local _imex=(
    'SplitPanelProviderProps'
    'FormFieldValidationControlProps'
    'SelectionControlProps'
    'StatusIndicatorProps'
    'StickyColumnsModel'
  )
  for f in $(rg -wl '\b('${(j:|:)_imex}')\b' ${PWD}/src); do
    ./build-tools/fmt/imex.js ${f} || :
  done

  local _fn_decl=(
    checkColumnWidths
    checkSortingState
    checkSafeUrlRecursively
  )
  for f in $(rg -wl '\b('${(j:|:)_fn_decl}')\b' ${PWD}/src); do
    ./build-tools/fmt/fn_decl.js ${f} || :
  done

  local _funnel_fn=(
    useFunnel
    useFunnelNameSelector
    useFunnelStep
    useFunnelSubStep
  )
  for f in $(rg -wl '\b('${(j:|:)_funnel_fn}')\b' ${PWD}/src); do
    ./build-tools/fmt/funnel_fn.js ${f} || :
  done

  local _anal=(
    useFunnelSubStep
    getFieldSlotSeletor
    funnelNextOrSubmitAttempt
    funnelSubmit
    funnelAttributes
    analyticsAttributes
    DATA_ATTR_ANALYTICS_ALERT
    DATA_ATTR_ANALYTICS_FLASHBAR
    DATA_ATTR_FIELD_ERROR
    DATA_ATTR_FIELD_LABEL
    DATA_ATTR_FUNNEL_KEY
    DATA_ATTR_FUNNEL_VALUE
    FUNNEL_KEY_FUNNEL_NAME
    FUNNEL_KEY_SUBSTEP_NAME
    funnelNameSelector 
    funnelType
    funnelNameSelectors
    __funnelSubStepProps
    __subStepRef
  )
  for f in $(rg -wl '\b('${(j:|:)_anal}')\b' ${PWD}/src); do
    ./build-tools/fmt/anal.js ${f} || :
  done

  local _lex_dcl=(
    funnelAttributes
    analyticsAttributes
  )
  for f in $(rg -wl '\b('${(j:|:)_lex_dcl}')\b' ${PWD}/src); do
    ./build-tools/fmt/lex_dcl.js ${f} || :
  done

  local _anal_jsx=(
    AnalyticsFunnel
    AnalyticsFunnelStep
    AnalyticsFunnelSubStep
    FunnelNameSelectorContext
  )
  for f in $(rg -wl '\b('${(j:|:)_anal_jsx}')\b' ${PWD}/src); do
    ./build-tools/fmt/anal_jsx.js ${f} || :
  done

  local _anal_props=(
    getAnalyticsMetadataProps
  )
  for f in $(rg -wl '\b('${(j:|:)_anal_props}')\b' ${PWD}/src); do
    ./build-tools/fmt/anal_props.js ${f} || :
  done

  for f in $(fd --search-path src -aHIL -t f -e js -e tsx -e ts -E theming); do
    ./build-tools/fmt/stmt.js ${f} || :
  done

  for f in $(rg -wl 'useEffect' ${PWD}/src); do
    ./build-tools/fmt/ue.js ${f} || :
  done

  local _anal_meta=(
    __analyticsMetadata
  )
  for f in $(rg -wl '\b('${(j:|:)_anal_meta}')\b' ${PWD}/src); do
    ./build-tools/fmt/anal_meta.js ${f} || :
  done

  ./build-tools/fmt/keycode_enum.js src/internal/keycode.ts
}

_ts() {
  _h ts
  pushd src
    for f in $(fd -HIL -t f -e tsx -e ts -E '*.d.ts' -E theming); do

      mkdir -p ../lib/components/$(dirname ${f}) || :

      esbuild \
        --format=esm \
        --platform=browser \
        --tree-shaking=true \
        --jsx=preserve \
        --outfile=../lib/components/${f:r}'.'${f:e:s/t/j} ${f} \
          > /dev/null 2>&1
    done

  popd
}

_post_ts() {
  _h 'post ts'

  cp -rf ./src/internal/vendor/ ./lib/components/internal/
  cp -rf ./src/i18n ./lib/components/
  cp -rf ./_lib/i18n/* ./lib/components/i18n/

  rm -rf ./lib/components/internal/base-component/
  cp -rf ./_lib/components/internal/base-component/ \
    ./lib/components/internal/

  pushd lib/components/
    fd -HIL -t f -e d.ts -e cjs -x rm -f

    sed -i -e 's/\bexport\s\+var\b/export const/' \
      ./internal/generated/styles/tokens.js

    sed -i -e 's/\bexport\s\+var\b/export const/' \
      ./internal/generated/theming/index.js

    for f in $(fd -HIL -t f); do
      sed -i -e '/^\s*import\s*["'"'][./]*\bstyles\.scoped\.css/d" ${f}
      ../../build-tools/fmt/rm_cmt.js ${f} || :
    done

    for f in $(rg -wl 'href'); do
      ../../build-tools/fmt/rw_href.js ${f} || :
    done

    for f in $(rg -wl '<a\b'); do
      ../../build-tools/fmt/rw_a_link.js ${f} || :
    done

    for f in $(rg -wl 'react'); do
      ../../build-tools/fmt/react_qual.js ${f} || :
    done

    for f in $(fd -HIL -t f); do
      ../../build-tools/fmt/rw_func.js ${f} || :
    done

    for f in $(rg -il '\bmemo\('); do
      ../../build-tools/fmt/unmemo.js ${f} || :
    done

    for f in $(rg -il '\bforwardRef\('); do
      ../../build-tools/fmt/fwdref.js ${f} || :
    done

    for f in $(fd -HIL -t f); do
      ../../build-tools/fmt/rememo.js ${f} || :
      ../../build-tools/fmt/rm_var_exp.js ${f} || :
      ../../build-tools/fmt/fmt_imex.js ${f} || :
    done

    for f in $(fd -HIL -t f); do
      jfx ${f} > /dev/null || :
    done

    rf -w var
    rf -c

    rf -w 'function'
    rf -c

    for l in $(<../../chk_list.yml); do
      cl -b 154 -f 0 -o ${l}
      echo
      rg -i -A 3 -B 3 ${l} || :
    done
  popd
}

xxx() {
  _rms
  _generateEnvironment
  _generateIcons
  _generateCustomCssPropertiesMap
  _styles
  _pre_ts
  _ts
  _post_ts
  _generateIndexFile

  echo -e $(cl -b 46 -f 0 -o ':::')$(cl -b 0 -f 46 -o ' fin ')
}

_xxx() {
  pushd lib/components/
    for f in $(fd -HIL -t f); do
      ../../build-tools/fmt/rememo.js ${f} || :
    done
  popd
}

src() {
  pushd ~/dev/aws/components/
    git checkout main
    git pull --all
    git checkout main
    git pull --all
  popd

  local h=$(cat ~/dev/aws/components/.git/FETCH_HEAD | cut -f1)

  if [[ ${h} != $(tail -n1 comhash.yml) ]]; then
    cl -b 154 -f 0 -o 'update\n'

    echo ${h} >> comhash.yml

    tail -n+2 comhash.yml > tmp_com
    mv -f tmp_com comhash.yml

    pushd ~/dev/aws/components/
      cat <<EOL > ~/dev/aws/cloudcomp/files_diff.yml
- A: added
- B: broken pairing
- C: copied
- D: deleted
- M: modified
- R: renamed
- T: type change
- U: unmerged
- X: unknown

$(git diff --name-status $(
  cat ~/dev/aws/cloudcomp/comhash.yml | tr '\n' ' ') \
  | expand -t 2 - | sort  -k1)
EOL
    popd

    local d=''

    rg -N 'build-tools' files_diff.yml || :

    rm -rfv src/ style-dictionary/ themes/
    cp -rfv ~/dev/aws/components/{src,style-dictionary,themes} .

    pushd _src
      for f in $(fd -HIL -t f); do

        d=$(dirname ${f})
        mkdir -pv ../src/${d} || :

        cp -fv ${f} ../src/${d}
      done
    popd

  else
    cl -f 12 -o 'nien\n'
  fi
}

_zzz() {
  _h 'zzz'


  exit

  local i=33
  local j=4
  pushd src
    for l in $(tail -n+${i} ../rm_list.yml | head -n${j}); do
      cl -b 154 -f 0 -o ${l}
      echo
      rg -w -A 3 -B 3 ${l} || :
      #rf ${l} || :
      #rf -c
    done
  popd

  exit
validateStringValue
  local a=(
    isdevelopment
    checkcontrolled
    checkoptionvaluefield
    warnonce
    checksafeurl
    checksafeurlrecursively
    checkduplicatehrefs
    validatestringvalue
    checkcolumnwidths
    checksortingstate
    telemet
    perform
    getsubstepallselector
    stepnameselector
    step_name_selector
    submissionattempt
    substepnameselector
    substepref
  )

  pushd src
    for l in $a; do
      cl -b 154 -f 0 -o ${l}
      echo
      rg -i -A 3 -B 3 ${l} || :
      #rf -i ${l} || :
      #rf -c
    done
  popd

  exit


  local a=(
    checkoptionvaluefield
    checkcolumnwidths
    checksortingstate
    isdevelopment
    warnonce
    checkoptionvaluefield
    checksafeurl
    initawsuiversions
    senddismissmetric
    sendrendermetric
    sendtogglemetric
    useperformancemarks
    usetelemetry
    checksafeurlrecursively
)

  exit

  rm -f dump_exports.js
  echo 'const o = [' >> dump_exports.js

  pushd src/internal/hooks/use-latency-metrics/
    for f in $(fd -HIL -t f); do

      #esbuild \
      #  --format=esm \
      #  --platform=browser \
      #  --tree-shaking=true \
      #  --jsx=preserve \
      #  --allow-overwrite \
      #  --outfile=${f:A} ${f:A}

      ~/dev/aws/fmt/dump_exports.js ${f:A}  >> ../../../../dump_exports.js
    done
  popd

  echo '];\nexport {o as default}' >> dump_exports.js
  jfx dump_exports.js

  exit


}

www() {
  inotifywait -mr -e close_write -e delete -e moved_to ./build-tools/fmt/x/ \
    | while read ; do
        clear -x
        cl -b 27  -f 51 -o '------------------------------------------------'
        echo
        cat -n <(./build-tools/fmt/x/x.js || :)
      done
}

kg() {
  rm -rfv node_modules pnpm-lock.yaml
  cat > package.json <<EOL
{
  "private": true,
  "sideEffects": false,
  "version": "3.0.0"
}
EOL

  pnpm add -D '@ast-grep/napi'
  pnpm add -D '@cloudscape-design/theming-build'
  pnpm add -D 'loader-utils'
  pnpm add -D 'lodash'
  pnpm add -D 'svgo'
  pnpm add -D 'immer'
}


_k=(${(ok)functions:#_*})
_v=(${(oM)_k#[a-z]*})
typeset -A _o
_o=(${_v:^_k})

eval 'zparseopts -D -E -F -a _a '${_v}

[[ ${#_a} -eq 0  ]] && \
  paste -d ' ' <(print -l '\-'${(j:\n-:)_v}) <(print -l ${_k}) && exit

_a=('$_o['${^_a#-}']')
eval ${(F)_a}
exit

src/form/index.tsx
src/modal/internal.tsx
src/cards/index.tsx
src/expandable-section/expandable-section-container.tsx
src/container/internal.tsx
src/container/index.tsx
src/link/internal.tsx
src/header/internal.tsx
src/button/internal.tsx
src/breadcrumb-group/item/item.tsx
src/table/internal.tsx
src/table/index.tsx



    const { funnelSubStepProps } = useFunnelSubStep();

    const tableProps: InternalTableProps<T> = {
      ...props,
      __funnelSubStepProps: funnelSubStepProps,
      funnelSubStepProps,
    };

    -----------------------------------------------

    <div
      aria-live={dismissButton ? undefined : 'polite'}
      aria-atomic={dismissButton ? undefined : true}
      className={clsx(popoverClasses, styles['popover-content'])}
      data-awsui-referrer-id={subStepRef.current?.id}
      data-awsui-referrer-id={referrerId}
    >ass</div>

    -----------------------------------------------

    <InternalContainer
      {...props}
      __subStepRef={modalContext?.isInModal ? { current: null } : subStepRef}
      __funnelSubStepProps={modalContext?.isInModal ? {} : funnelSubStepProps}
    />

