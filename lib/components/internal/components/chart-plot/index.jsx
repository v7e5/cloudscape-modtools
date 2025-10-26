import {forwardRef, useImperativeHandle, useRef, useState, memo} from 'react'
import clsx from 'clsx'
import styles from './styles.css.js'
import {useUniqueId} from '../../hooks/use-unique-id'
import {KeyCode} from '../../keycode'
import LiveRegion from '../live-region/'
import ApplicationController from './application-controller'
import FocusOutline from './focus-outline'
import {useInternalI18n} from '../../../i18n/context'

const DEFAULT_PLOT_FOCUS_OFFSET = 3
const DEFAULT_ELEMENT_FOCUS_OFFSET = 3

const ChartPlot = memo(
  forwardRef(
    (
      {
        width,
        height,
        transform,
        offsetTop,
        offsetBottom,
        offsetLeft,
        offsetRight,
        ariaLabel,
        ariaLabelledby,
        ariaRoleDescription,
        ariaDescription,
        ariaDescribedby,
        activeElementKey,
        activeElementRef,
        ariaLiveRegion,
        isClickable,
        isPrecise,
        children,
        onClick,
        onKeyDown,
        focusOffset = DEFAULT_PLOT_FOCUS_OFFSET,
        activeElementFocusOffset = DEFAULT_ELEMENT_FOCUS_OFFSET,
        onMouseMove,
        onMouseOut,
        onApplicationBlur,
        onApplicationFocus
      },
      ref
    ) => {
      const i18n = useInternalI18n('[charts]')
      const svgRef = useRef(null)
      const applicationRef = useRef(null)
      const plotClickedRef = useRef(false)
      const [isPlotFocused, setPlotFocused] = useState(false)
      const [isApplicationFocused, setApplicationFocused] = useState(false)
      const internalDescriptionId = useUniqueId(
        'awsui-chart-plot__description'
      )
      const ariaDescriptionId = [
        ariaDescription && internalDescriptionId,
        ariaDescribedby
      ]
        .filter(Boolean)
        .join(' ')
      useImperativeHandle(ref, () => ({
        svg: svgRef.current,
        focusPlot: () => svgRef.current.focus(),
        focusApplication: () => applicationRef.current.focus()
      }))
      const onPlotMouseDown = () => {
        plotClickedRef.current = true
      }
      const onPlotFocus = event => {
        if (plotClickedRef.current || !!activeElementKey) {
          applicationRef.current.focus()
        } else if (event.target === svgRef.current) {
          setPlotFocused(true)
        }
      }
      const onPlotClick = event => {
        onClick && onClick(event)
      }
      const onPlotBlur = event => {
        if (event.target === svgRef.current) {
          setPlotFocused(false)
        }
      }
      const onPlotKeyDown = event => {
        if (isPlotFocused) {
          const codes = [
            KeyCode.space,
            KeyCode.enter,
            KeyCode.up,
            KeyCode.left,
            KeyCode.right,
            KeyCode.down
          ]
          if (codes.indexOf(event.keyCode) !== -1) {
            applicationRef.current.focus()
          }
        }
      }
      const onPlotApplicationFocus = event => {
        onApplicationFocus &&
          onApplicationFocus(
            event,
            plotClickedRef.current ? 'mouse' : 'keyboard'
          )
        plotClickedRef.current = false
        setApplicationFocused(true)
      }
      const onPlotApplicationBlur = event => {
        onApplicationBlur && onApplicationBlur(event)
        setApplicationFocused(false)
      }
      const onApplicationKeyDown = onKeyDown
      const plotFocusable = !isApplicationFocused
      const plotTabIndex = plotFocusable ? 0 : -1
      const plotAria = !isApplicationFocused
        ? {
            'aria-label': ariaLabel,
            'aria-labelledby': ariaLabelledby,
            'aria-describedby': ariaDescriptionId,
            'aria-roledescription': i18n(
              'i18nStrings.chartAriaRoleDescription',
              ariaRoleDescription
            )
          }
        : {}
      return (
        <>
          <svg
            onMouseMove={onMouseMove}
            onMouseOut={onMouseOut}
            focusable={plotFocusable}
            tabIndex={plotTabIndex}
            role='application'
            aria-hidden='false'
            {...plotAria}
            ref={svgRef}
            style={{
              width,
              height,
              marginTop: offsetTop,
              marginBottom: offsetBottom,
              marginLeft: offsetLeft,
              marginRight: offsetRight
            }}
            className={clsx(styles.root, {
              [styles.clickable]: isClickable,
              [styles.precise]: isPrecise
            })}
            onMouseDown={onPlotMouseDown}
            onClick={onPlotClick}
            onFocus={onPlotFocus}
            onBlur={onPlotBlur}
            onKeyDown={onPlotKeyDown}>
            <FocusOutline
              elementRef={svgRef}
              elementKey={isPlotFocused}
              offset={focusOffset}
            />
            <g transform={transform}>
              <ApplicationController
                activeElementKey={
                  (isApplicationFocused && activeElementKey) || null
                }
                activeElementRef={activeElementRef}
                ref={applicationRef}
                onFocus={onPlotApplicationFocus}
                onBlur={onPlotApplicationBlur}
                onKeyDown={onApplicationKeyDown}
              />
              {}
              {ariaDescription && plotFocusable && (
                <desc aria-hidden='true' id={internalDescriptionId}>
                  {ariaDescription}
                </desc>
              )}
              {children}
              <FocusOutline
                elementRef={activeElementRef}
                elementKey={isApplicationFocused && activeElementKey}
                offset={activeElementFocusOffset}
              />
            </g>
          </svg>
          <LiveRegion>{ariaLiveRegion}</LiveRegion>
        </>
      )
    }
  )
)

export {
  ChartPlot as default
}
