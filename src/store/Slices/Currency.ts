import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
interface StateType {
  currencyData: {
    currency: string;
    valueInUSD: number;
    updatedAt: string;
  }[];
  currencyDataLoading: boolean;
}
export const getCurrencyData = createAsyncThunk('getCurrencyData', async () => {
  const baseCurrency = 'USD';
  const targetCurrencies = ['USD', 'ARS', 'CAD', 'JPY', 'AUD', 'CNY', 'EUR', 'BTC'].join(',');

  try {
    const response = await axios.get(`https://rest.coinapi.io/v1/exchangerate/${baseCurrency}`, {
      headers: {
        Accept: 'application/json',
        'X-CoinAPI-Key': process.env.CURRENCY_API,
      },
      params: {
        filter_asset_id: targetCurrencies,
      },
    });
    return response.data.rates.map(({ asset_id_quote, rate, time }) => ({
      currency: asset_id_quote,
      valueInUSD: (1 / rate).toFixed(2),
      updatedAt: time,
    }));
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    throw error;
  }
});

const initialState: StateType = {
  currencyData: [],
  currencyDataLoading: false,
};

const CurrencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrencyData.pending, (state) => {
      state.currencyDataLoading = true;
    });
    builder.addCase(getCurrencyData.fulfilled, (state, action) => {
      state.currencyDataLoading = false;
      state.currencyData = action.payload;
    });
    builder.addCase(getCurrencyData.rejected, (state) => {
      state.currencyDataLoading = true;
    });
  },
});

// export { } = CurrencySlice.actions
export const CurrencyReducer = CurrencySlice.reducer;
