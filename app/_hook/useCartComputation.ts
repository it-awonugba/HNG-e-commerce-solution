import { useCart } from "../_context/CartContext";
import { useFormatCurrency } from "./useFormatCurrency";

export const useCartComputation = () => {
  const { cart } = useCart();
  const { formatCurrency } = useFormatCurrency();

  const calculateTax = () => {
    return cart.length > 0
      ? formatCurrency(
          (2 / 100) *
            cart.reduce((total, item) => total + item.price * item.quantity!, 0)
        )
      : formatCurrency(0);
  };

  const calculateSubTotal = () => {
    return cart.length > 0
      ? formatCurrency(
          cart.reduce((total, item) => total + item.price * item.quantity!, 0)
        )
      : formatCurrency(0);
  };

  const calculateFinalTotal = () => {
    const total =
      cart.reduce((total, item) => total + item.price * item.quantity!, 0) +
      calculateTax();
    return formatCurrency(parseInt(total) + parseInt(total) * (2 / 100));
  };

  return {
    tax: calculateTax(),
    subTotal: calculateSubTotal(),
    total: calculateFinalTotal(),
  };
};
