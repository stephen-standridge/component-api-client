import { Map, List } from 'immutable'

export const xy = Map({ x: 0, y: 0 })
export const wh = Map({ width: 0, height: 0 })
export const cd = Map({
  coords: xy,
  dimensions: wh
})
export const cell = Map({
  value: Map({
    coords: xy,
    dimensions: wh,
    active: true,
    color: 'rgba(255,255,255,1)',
  })
})
export const initial = Map({
  value: Map({
    canDivide: true,
    coords: Map({x: 170, y:15}),
    dimensions: Map({width: 300, height: 600}),
    color: 'rgba(255,255,255,1)',
  })
})
export const defaults = Map({
  pixel: 15,
  offset: xy.set('y', - 1).set('x', - 1),
  mutation: 0,
  counter: xy,
  color: List.of(255, 255, 255, 1),
  structure: Map({
    config: Map({
      depth: 5,
      branches: 2
    }),
    data: List.of( initial )
  })
})

