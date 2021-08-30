export const pricingService = (state) => {
  const bunPrice = 5;
  const cutletPrice = 2;
  const slicePrice = 1;
  const saladPrice = 5;

  let total = 0
  total = (state.bun ? bunPrice * state.bun : 0)
    + (state.cutlet ? cutletPrice * Number(state.cutlet) : 0)
    + (state.slice ? slicePrice * Number(state.slice) : 0)
    + (state.salad ? saladPrice : 0)
  return total;
}