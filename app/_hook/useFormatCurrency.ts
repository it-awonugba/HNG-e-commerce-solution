export const useFormatCurrency = () => {
  const formatCurrency = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(price);
  };

  return { formatCurrency };
};
