export const getImgUrl = (index) => {
  return new URL(`../assets/images/card-${index+1}.png`, import.meta.url).href;
};