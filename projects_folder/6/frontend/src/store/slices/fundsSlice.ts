import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Fund {
  id: string;
  name: string;
  ticker: string;
}

interface FundsState {
  items: Fund[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: FundsState = {
  items: [],
  status: 'idle',
  error: null,
};

export const fetchFunds = createAsyncThunk(
  'funds/fetchFunds',
  async ({ page = 1, limit = 10 }: { page?: number; limit?: number } = {}) => {
    const response = await axios.get('http://127.0.0.1:8000/api/v1/funds', {
      headers: {},
      params: { page, limit },
    });
    console.log(response);
    return response.data;
  }
);

const fundsSlice = createSlice({
  name: 'funds',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFunds.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFunds.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload.funds;
      })
      .addCase(fetchFunds.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export default fundsSlice.reducer;