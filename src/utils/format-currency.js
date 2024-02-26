function formatCurrency(value) {
  const options = {
    style: "currency",
    currency: "USD", // You can change this based on your requirement
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true,
  };

  const formatter = new Intl.NumberFormat("en-US", options);
  return formatter.format(value);
}

export default formatCurrency;
