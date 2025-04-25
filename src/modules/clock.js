export function getTime(lune, soleil, terre) {
  return 0;
}
export function computeTime(value) {
  if (value <= 2) {
    return "mortin";
  } else if (value <= 4) {
    return "aprenoon";
  } else if (value <= 5) {
    return "soirning";
  }
  return "nuight";
}
