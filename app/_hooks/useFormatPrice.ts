import { Product } from "./useFetchData";

export const useFormatPrice = () => {
  const formatPrice = (product: Product) => {
    const symbol = Object.keys(product.current_price[0])[0];
    const [price, discountedPrice] = Object.values(product.current_price[0])[0];

    let displayPrice = formatCurrency(price, symbol);

    if (Number(discountedPrice)) {
      displayPrice = formatCurrency(discountedPrice, symbol);
    }
    return displayPrice;
  };

  const formatCurrency = (price: number, currency: string) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: currency,
    }).format(price);
  };

  const calculateDiscountPercentage = (product: Product) => {
    const [price, discountedPrice] = Object.values(product.current_price[0])[0];
    return ((Number(price) - Number(discountedPrice)) / Number(price)) * 100;
  };

  return { formatPrice, formatCurrency, calculateDiscountPercentage };
};
