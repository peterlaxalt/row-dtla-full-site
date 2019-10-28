const truncateText = (text, wordLimit) => {
  const textArray = text.split(' ');
  if (textArray.length < wordLimit) return text;
  let shortened = textArray.slice(0, wordLimit);
  return `${shortened.join(' ')}...`;
};

export { truncateText };
