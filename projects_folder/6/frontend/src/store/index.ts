import { configureStore } from '@reduxjs/toolkit';
import portfoliosReducer from './slices/portfoliosSlice';
import fundsReducer from './slices/fundsSlice';

export const store = configureStore({
  reducer: {
    portfolios: portfoliosReducer,
    funds: fundsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;