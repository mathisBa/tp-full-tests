let values = {
  lune: {
    0: {
      cadran: 0,
      power: 0,
    },
    1: {
      cadran: 1,
      power: -2,
    },
    2: {
      cadran: 2,
      power: 0,
    },
  },
  soleil: {
    0: {
      cadran: 0,
      power: 0,
    },
    1: {
      cadran: 1,
      power: 0,
    },
    2: {
      cadran: 2,
      power: 0,
    },
  },
  terre: {
    0: {
      cadran: 0,
      power: 0,
    },
    1: {
      cadran: 1,
      power: 2,
    },
    2: {
      cadran: 2,
      power: 6,
    },
  },
};
export function getTime(lune, soleil, terre) {
  if (lune + terre + soleil === 0) {
    return 0;
  }
  if (soleil != 1 && terre === 2) {
    return 6;
  }
  if (soleil === 1 && terre != 0) {
    return getTime(lune, soleil, 0);
  }
  let total = 0;
  // terre
  total += terre;
  if (terre === 1) {
    total += 2;
  }
  // soleil
  total += soleil;
  if (soleil === 2) {
    total += terre;
  }
  // lune
  total += lune;
  if (lune === 1) {
    total -= 2;
  } else if (lune === 2) {
    total = Math.floor(total / 2);
  }
  return total;
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
