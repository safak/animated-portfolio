export const getImageUrl = (path) => {
  return new URL(`/public/${path}`, import.meta.url).href;
};
