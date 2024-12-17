import { configureStore } from '@reduxjs/toolkit';

import { CurrencyReducer } from '@/store/Slices/Currency';
import { ThemeReducer } from '@/store/Slices/Theme';

export const store = configureStore({
  reducer: {
    theme: ThemeReducer,
    currency: CurrencyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
