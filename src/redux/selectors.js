export const selectBaseCurrency = state => state.currency.baseCurrency;

export const selectIsLoading = state => state.currency.loading;
export const selectError = state => state.currency.error;
export const selectExchangeInfo = state => state.currency.exchangeInfo;
