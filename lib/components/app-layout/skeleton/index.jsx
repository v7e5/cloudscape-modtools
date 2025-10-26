import {memo} from 'react'
import {SkeletonLayout} from './layout'

const AppLayoutSkeleton = memo(
  ({
    notifications,
    contentHeader,
    content,
    navigation,
    navigationHide,
    navigationOpen,
    navigationWidth,
    tools,
    toolsHide,
    toolsOpen,
    toolsWidth,
    placement,
    contentType,
    maxContentWidth,
    disableContentPaddings
  }) => {
    const placeholder = <></>
    return (
      <SkeletonLayout
        topBar={placeholder}
        notifications={notifications}
        contentHeader={contentHeader}
        content={content}
        navigation={
          !navigationHide && navigationOpen && navigation && placeholder
        }
        navigationWidth={navigationWidth}
        tools={!toolsHide && toolsOpen && tools && placeholder}
        toolsWidth={toolsWidth}
        placement={placement}
        contentType={contentType}
        maxContentWidth={maxContentWidth}
        disableContentPaddings={disableContentPaddings}
      />
    )
  }
)

export {
  AppLayoutSkeleton
}
