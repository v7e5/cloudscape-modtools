const _rng = o => {
  if (o !== undefined) {
    const {start, end} = o
    return JSON.stringify({
      start: start.line + 1 + ', ' + (start.column + 1),
      end: end.line + 1 + ', ' + (end.column + 1)
    })
  }
}

const dump = n => ({
  kind: n.kind(),
  text: n.text().slice(0, 79),
  range: _rng(n?.range()),
  isLeaf: n.isLeaf(),
  isNamed: n.isNamed(),
  isNamedLeaf: n.isNamedLeaf(),
  parent: {
    kind: n.parent()?.kind(),
    range: _rng(n.parent()?.range()),
    text: n.parent()?.text().slice(0, 79)
  },
  parent_parent: {
    kind: n.parent()?.parent()?.kind(),
    range: _rng(n.parent()?.parent()?.range()),
    text: n.parent()?.parent()?.text().slice(0, 79)
  },
  child: n.child(0) && {
    kind: n.child(0)?.kind(),
    range: _rng(n.child(0)?.range())
  },
  next: n.next() && {
    kind: n.next()?.kind(),
    range: _rng(n.next()?.range())
  },
  prev: n.prev() && {
    kind: n.prev()?.kind(),
    range: _rng(n.prev()?.range())
  }
})

const closest = (n, k) => {
  if (!!n) {
    if (n.kind() === k) {
      return n
    }
    return closest(n.parent(), k)
  }
}

const delta = 'Δ'
const _rdx = (a, v) => {
  const r = v.range()
  return a.fill(delta, r.start.index, r.end.index)
}

module.exports = {
  dump,
  closest,
  delta,
  _rdx
}
