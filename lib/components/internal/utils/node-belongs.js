import {findUpUntil} from './dom'
import {nodeContains} from '~/components/internal/toolkit/dom'

const nodeBelongs = (container, target) => {
  if (!(target instanceof Node)) {
    return false
  }
  const portal = findUpUntil(
    target,
    node =>
      node === container ||
      (node instanceof HTMLElement && !!node.dataset.awsuiReferrerId)
  )
  if (portal && portal === container) {
    return true
  }
  const referrer =
    portal instanceof HTMLElement
      ? document.getElementById(portal.dataset.awsuiReferrerId ?? '')
      : null
  return referrer
    ? nodeContains(container, referrer)
    : nodeContains(container, target)
}

export {
  nodeBelongs
}
