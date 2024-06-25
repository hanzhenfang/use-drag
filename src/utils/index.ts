type Coordinate = { x: number; y: number }

interface ElementRectInfo {
  element: HTMLElement
  rectInfo: DOMRect
  ltp: Coordinate
  lbp: Coordinate
  rtp: Coordinate
  rbp: Coordinate
  center: Coordinate
}

export function getElementRectInfo<T extends HTMLElement = HTMLDivElement>(element: T): ElementRectInfo {
  const rectInfo = element.getBoundingClientRect()
  const { width, height, left, right, top, bottom } = rectInfo
  return {
    element: element,
    rectInfo,
    ltp: {
      x: left,
      y: top,
    },
    lbp: {
      x: left,
      y: bottom,
    },
    rtp: {
      x: right,
      y: top,
    },
    rbp: {
      x: right,
      y: bottom,
    },
    center: { x: left + width / 2, y: top + height / 2 },
  }
}
