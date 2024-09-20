import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency, fetchExchangeCurrency } from './operations';

const initialState = {
  baseCurrency: '',
  loading: false,
  error: null,
  exchangeInfo: null,
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setBaseCurrency: (state, { payload }) => {
      state.baseCurrency = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchBaseCurrency.fulfilled, (state, { payload }) => {
        state.baseCurrency = payload;
      })
      .addCase(fetchExchangeCurrency.pending, (state) => {
        state.loading = true,
          state.error = null
      })
      .addCase(fetchExchangeCurrency.fulfilled, (state, { payload }) => {
        state.loading = false,
    state.exchangeInfo = payload
  })
      .addCase(fetchExchangeCurrency.rejected, (state, { payload }) => {
        state.loading = false,
          state.error = payload,
          state.exchangeInfo = null
  }),
});

export const { setBaseCurrency } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;
