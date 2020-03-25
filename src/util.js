// https://gist.github.com/xenozauros/f6e185c8de2a04cdfecf
export function hexToHsl(hex) {
  let { r, g, b } = hexToRgb(hex)

  r /= 255
  g /= 255
  b /= 255

  const min = Math.min(r, g, b)
  const max = Math.max(r, g, b)

  let h = undefined
  let s = undefined
  const l = (min + max) / 2

  if (min === max) {
    h = s = 0
  } else {
    const d = max - min

    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }

    h /= 6
  }

  return { h, s, l }
}

// https://stackoverflow.com/a/11868159
export function isColorDark(hex) {
  const { r, g, b } = hexToRgb(hex)

  // https://www.w3.org/TR/AERT/#color-contrast
  const brightness = (r * 299 + g * 587 + b * 114) * 0.001

  return brightness < 125
}

export function hexToRgb(hex) {
  const result = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i)

  const r = parseInt(result[1] || 0, 16)
  const g = parseInt(result[2] || 0, 16)
  const b = parseInt(result[3] || 0, 16)

  return { r, g, b }
}
