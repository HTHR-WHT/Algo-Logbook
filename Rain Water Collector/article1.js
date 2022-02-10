// this is a space to solve your algo
// this article was written by Kyle Combs

// vol = 7
const a = [0, 0, 1, 2, 4, 3, 2, 5, 0, 0, 2, 1];

// vol = 6
const b = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

// vol = 12
const c = [0, 3, 0, 1, 0, 0, 0, 1, 0, 2];

// vol = 8
const d = [0, 1, 0, 3, 5, 0, 0, 0, 2, 0, 1];

// vol = 38
const e = [0, 5, 3, 2, 8, 8, 1, 1, 2, 4, 3, 3, 7, 1, 2, 4, 3, 2];

const getPeaks = (array, leftOrRight) => {
  const peaks = [...array];

  if (leftOrRight === "left") {
    for (let i = 1; i < array.length; i++) {
      if (array[i] > peaks[i - 1]) {
        peaks[i] = array[i];
      } else {
        peaks[i] = peaks[i - 1];
      }
    }
  } else {
    for (let i = array.length - 2; i >= 0; i--) {
      if (array[i] > peaks[i + 1]) {
        peaks[i] = array[i];
      } else {
        peaks[i] = peaks[i + 1];
      }
    }
  }

  return peaks;
};

const totalVol = (array) => {
  let totalVol = 0;
  const leftPeaks = getPeaks(array, "left");
  const rightPeaks = getPeaks(array, "right");

  for (let i = 0; i < array.length; i++) {
    currentVol = Math.min(leftPeaks[i], rightPeaks[i]) - array[i];
    totalVol += currentVol;
  }
  return totalVol;
};

console.log('collection device "a" can hold', totalVol(a));

console.log('collection device "b" can hold', totalVol(b));

console.log('collection device "c" can hold', totalVol(c));

console.log('collection device "d" can hold', totalVol(d));

console.log('collection device "e" can hold', totalVol(e));
