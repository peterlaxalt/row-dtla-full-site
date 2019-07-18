// Convert px to rem
export const pxToRem = px => {
  var base = 16;
  return `${(px / base).toFixed(4)}rem`;
};

// Add commas to long numbers
export const insertCommas = num => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// Add ordinal suffix to number
export const addOrdinalSuffix = i => {
  if (i === 'Ground') {
    return i;
  }
  let s = ['th', 'st', 'nd', 'rd'];
  let v = i % 100;
  return i + (s[(v - 20) % 10] || s[v] || s[0]);
};
