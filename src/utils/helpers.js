export const formatCurrency = (price) => {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'INR',
  }).format(price);
};

export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

export const calcMinutesLeft = (date) => {
  const d1 = new Date().getTime();
  const d2 = new Date(date).getTime();
  return Math.round((d2 - d1) / 60000);
};
