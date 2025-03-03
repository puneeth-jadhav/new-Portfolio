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
import { fetchPortfolios } from '../../store/slices/portfoliosSlice';
import { fetchFunds } from '../../store/slices/fundsSlice';
import PortfolioSummary from './components/PortfolioSummary';
import WatchList from './components/WatchList';
import MarketNews from './components/MarketNews';

const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: portfolios, status: portfoliosStatus, error: portfoliosError } = 
    useSelector((state: RootState) => state.portfolios);
  const { items: funds, status: fundsStatus, error: fundsError } = 
    useSelector((state: RootState) => state.funds);

  useEffect(() => {
    if (portfoliosStatus === 'idle') {
      dispatch(fetchPortfolios());
    }
    if (fundsStatus === 'idle') {
      dispatch(fetchFunds({"page": 1, "limit": 10}));
    }
  }, [dispatch, portfoliosStatus, fundsStatus]);

  if (portfoliosStatus === 'loading' || fundsStatus === 'loading') {
    return (
      <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <CircularProgress />
      </Grid>
    );
  }

  if (portfoliosError || fundsError) {
    return (
      <Alert severity="error">
        {portfoliosError || fundsError}
      </Alert>
    );
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
      </Grid>
      
      <Grid item xs={12} md={8}>
        <Paper sx={{ p: 2, height: '100%' }}>
          <PortfolioSummary portfolios={portfolios} />
        </Paper>
      </Grid>
      
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2, mb: 3 }}>
          <WatchList funds={funds} />
        </Paper>
        <Paper sx={{ p: 2 }}>
          <MarketNews />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;