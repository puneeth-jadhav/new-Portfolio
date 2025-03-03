import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Grid,
  Paper,
  Typography,
  CircularProgress,
  Alert,
} from '@mui/material';
import { AppDispatch, RootState } from '../../store';
import { fetchFunds } from '../../store/slices/fundsSlice';
import FundList from './components/FundList';
import FundSearch from './components/FundSearch';

const FundManagement = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: funds, status, error } = useSelector((state: RootState) => state.funds);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchFunds({"page": 1, "limit":10}));
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return (
      <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <CircularProgress />
      </Grid>
    );
  }

  if (error) {
    return (
      <Alert severity="error">
        {error}
      </Alert>
    );
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Fund Management
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Paper sx={{ p: 2, mb: 3 }}>
          <FundSearch />
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <FundList funds={funds} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default FundManagement;