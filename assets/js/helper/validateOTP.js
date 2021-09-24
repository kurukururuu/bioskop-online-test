export default function validateNumber(event) {
  const unicode = event.keyCode ? event.keyCode : event.charCode

  if ((unicode > 31 && (unicode < 48 || unicode > 57)) && unicode !== 46) {
    /* For other keys that might allowed like [Backspace]. */
    /*
        8:  Backspace
        9:  Tab
        27: Escape
        35: End
        36: Home
        37: Left Arrow
        39: Right Arrow
        45: Insert
        46: Delete
    */

    const allowedKeys = [8, 9, 27, 35, 36, 37, 39, 45, 46];
    if (allowedKeys.includes(unicode)) {
      return true
    } else {
      event.preventDefault()
    }
  } else {
    /* For Numbers. */
    return true
  }
}