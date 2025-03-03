import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  TextField,
  Button,
  Grid,
} from '@mui/material';
import { AppDispatch } from '../../../store';
import { fetchFunds } from '../../../store/slices/fundsSlice';

const FundSearch = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams, setSearchParams] = useState({
    name: '',
    ticker: '',
  });

  const handleSearch = () => {
    dispatch(fetchFunds({ page: 1, limit: 10 }));
  };

  return (
    <Box component="form" noValidate autoComplete="off">
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Fund Name"
            value={searchParams.name}
            onChange={(e) => setSearchParams({ ...searchParams, name: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Ticker"
            value={searchParams.ticker}
            onChange={(e) => setSearchParams({ ...searchParams, ticker: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            fullWidth
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FundSearch;