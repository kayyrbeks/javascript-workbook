function computeRoomArea(width, length) {
  if (typeof width === "object" || typeof length === "object") {
    return NaN;
  } else {
    return +width * +length;
  }
}

export default computeRoomArea;
