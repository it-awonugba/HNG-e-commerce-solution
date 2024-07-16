import { Product } from "./useFetchData";

export const useFormatImage = () => {
  const formatImage = (product: Product) => {
    const imageUrl = `https://api.timbu.cloud/images/${product.photos[0].url.toString()}`;
    return imageUrl;
  };
  return { formatImage };
};