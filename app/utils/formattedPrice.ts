// Formata o preço para o formato brasileiro
export const formatPrice = (price: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "USD",
  }).format(price);
