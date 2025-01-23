import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { ApiUrl } from '@/constants/api';

interface StateType {
  currencyData: {
    currency: string;
    valueInUSD: number;
    updatedAt: string;
  }[];
  currencyDataLoading: boolean;
  convertValue: {
    rate: number;
  };
  convertValueLoading: boolean;
}
export const getCurrencyData = createAsyncThunk('getCurrencyData', async () => {
  const baseCurrency = 'USD';
  const targetCurrencies = ['USD', 'ARS', 'CAD', 'JPY', 'AUD', 'CNY', 'EUR', 'BTC'].join(',');

  try {
    const response = await axios.get(`${ApiUrl}/exchangerate/${baseCurrency}`, {
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
    return error.data.message;
  }
});

export const getConvertData = createAsyncThunk(
  'getConvertData',
  async ({ baseCurrency, convertCurrency }: { baseCurrency: string; convertCurrency: string }) => {
    try {
      const response = await axios.get(`${ApiUrl}/exchangerate/${baseCurrency}/${convertCurrency}`, {
        headers: {
          Accept: 'application/json',
          'X-CoinAPI-Key': process.env.CURRENCY_API,
        },
      });
      return response.data;
    } catch (error) {
      return error.data.message;
    }
  },
);

const initialState: StateType = {
  currencyData: [],
  currencyDataLoading: false,
  convertValue: null,
  convertValueLoading: false,
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
    builder.addCase(getConvertData.pending, (state) => {
      state.convertValueLoading = true;
    });
    builder.addCase(getConvertData.fulfilled, (state, action) => {
      state.currencyDataLoading = false;
      state.convertValue = action.payload;
    });
    builder.addCase(getConvertData.rejected, (state) => {
      state.convertValueLoading = true;
    });
  },
});

// export { } = CurrencySlice.actions
export const CurrencyReducer = CurrencySlice.reducer;
