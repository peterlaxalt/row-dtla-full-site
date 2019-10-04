export const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const slugifyString = string => {
  return string.toLowerCase().replace(/ /g, '-');
};

export const stringifySlug = slug => {
  return slug
    .split('-')
    .map(el => el.charAt(0, 1).toUpperCase() + el.slice(1))
    .join(' ');
};
