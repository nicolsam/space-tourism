export const convertStringToSlug = (unformatted: string) => {
  const url = unformatted
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
  return url;
};
