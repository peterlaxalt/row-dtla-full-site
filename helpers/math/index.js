// Convert px to rem
export const pxToRem = (px) => {
  var base = 16;
  return `${(px/base).toFixed(4)}rem`;
};