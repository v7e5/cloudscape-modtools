const NavigationItemsList = memo(({
  items,
  variant,
  activeHref,
  fireChange,
  fireFollow
}) => {
  const lists = []
  let currentListIndex = 0
  lists[currentListIndex] = {
    listVariant: variant,
    items: []
  }
  items.forEach((item, index) => {
    const itemid = index + 1
    switch (item.type) {
      case 'divider': {
        const dividerIndex = lists.length
        lists[dividerIndex] = {
          element: (
            <div data-itemid={`item-${itemid}`}>
              <Divider variant='default' />
            </div>
          )
        }
        currentListIndex = lists.length
        lists[currentListIndex] = {
          listVariant: variant,
          items: []
        }
        return
      }
      case 'link': {
        lists[currentListIndex].items?.push({
          element: (
            <li
              key={index}
              data-itemid={`item-${itemid}`}
              className={styles['list-item']}>
              <XinK
                definition={item}
                activeHref={activeHref}
                fireChange={fireChange}
                fireFollow={fireFollow}
              />
            </li>
          )
        })
        return
      }
      case 'section': {
        lists[currentListIndex].items?.push({
          element: (
            <li
              key={index}
              data-itemid={`item-${itemid}`}
              className={styles['list-item']}>
              <Section
                definition={item}
                activeHref={activeHref}
                variant={variant}
                fireChange={fireChange}
                fireFollow={fireFollow}
              />
            </li>
          )
        })
        return
      }
      case 'section-group': {
        lists[currentListIndex].items?.push({
          element: (
            <li
              key={index}
              data-itemid={`item-${itemid}`}
              className={styles['list-item']}>
              <SectionGroup
                definition={item}
                activeHref={activeHref}
                fireChange={fireChange}
                fireFollow={fireFollow}
              />
            </li>
          )
        })
        return
      }
      case 'link-group': {
        lists[currentListIndex].items?.push({
          element: (
            <li
              key={index}
              data-itemid={`item-${itemid}`}
              className={styles['list-item']}>
              <LinkGroup
                definition={item}
                activeHref={activeHref}
                fireChange={fireChange}
                fireFollow={fireFollow}
              />
            </li>
          )
        })
        return
      }
      case 'expandable-link-group': {
        lists[currentListIndex].items?.push({
          element: (
            <li
              key={index}
              data-itemid={`item-${itemid}`}
              className={styles['list-item']}>
              <ExpandableLinkGroup
                definition={item}
                activeHref={activeHref}
                fireChange={fireChange}
                fireFollow={fireFollow}
                variant={variant}
              />
            </li>
          )
        })
        return
      }
    }
  })
  const lastListIndex = lists.length - 1
  return (
    <>
      {lists.map((list, index) => {
        if (!list.items || list.items.length === 0) {
          return (
            <div
              key={`hr-${index}`}
              className={clsx(styles.list, styles[`list-variant-${variant}`], {
                [styles['list-variant-root--last']]:
                  list.listVariant === 'root' && index === lastListIndex
              })}>
              {list.element}
            </div>
          )
        } else {
          return (
            <ul
              key={`list-${index}`}
              className={clsx(
                styles.list,
                styles[`list-variant-${list.listVariant}`],
                {
                  [styles['list-variant-root--last']]:
                    list.listVariant === 'root' && index === lastListIndex
                }
              )}>
              {list.items.map(item => item.element)}
            </ul>
          )
        }
      })}
    </>
  )
})


const AA = memo(() => {
  return (
    <TransitionGroup aria-label={ariaLabel}>
      {items.map((item, index) => (
        <Transition
          transitionChangeDelay={{entering: TIMEOUT_FOR_ENTERING_ANIMATION}}
          key={item.id ?? index}
          in={true}>
          {(state, transitionRootElement) => (
            <li className={styles['flash-list-item']}>
              {renderItem(
                item,
                item.id ?? index,
                transitionRootElement,
                state
              )}
            </li>
          )}
        </Transition>
      ))}
    </TransitionGroup>
  )
})


const Bb = memo(() => {
  const Ff = memo(() => <div>xxx</div>)

  return (
    <TransitionGroup
      component='ul'
      className={styles['flash-list']}
      aria-label={ariaLabel}>
      {items.map((item, index) => (
        <Transition
          transitionChangeDelay={{entering: TIMEOUT_FOR_ENTERING_ANIMATION}}
          key={item.id ?? index}
          in={true}>
          {(state, transitionRootElement) => (
            <li className={styles['flash-list-item']}>
              {renderItem(
                item,
                item.id ?? index,
                transitionRootElement,
                state
              )}
            </li>
          )}
        </Transition>
      ))}
    </TransitionGroup>
  )
})


const C = memo(forwardRef(() => {
  memo((() => <X>ass</X>)())


  return (
    <div>
      {items.forEach((item, index) => {
        <div data-itemid={`item-${itemid}`}>
          <Divider variant='default' />
        </div>
      })}
    </div>
  )
}))


const X = memo(() => {
  return (
    <TransitionGroup aria-label={ariaLabel}>
      {((state, transitionRootElement) => (
        <li className={styles['flash-list-item']}>
          {renderItem(item, item.id ?? index, transitionRootElement, state)}
        </li>
      ))()}
    </TransitionGroup>
  )
})


const Y = memo(() => {
  return <TransitionGroup
    abc='abc'
    >{
    () => <li>ass</li>
  }</TransitionGroup>
})

