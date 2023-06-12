export function formatVNDCurrency(price: number) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "VND",
  });

  return formatter.format(price);
}

export function calcDiscountedPercent(origin: number, discounted: number) {
  return Math.ceil((1 - discounted / origin) * 100);
}
