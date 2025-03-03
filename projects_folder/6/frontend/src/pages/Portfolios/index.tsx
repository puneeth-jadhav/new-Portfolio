import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Grid,
  Paper,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import { AppDispatch, RootState } from '../../store';
import { createPortfolio } from '../../store/slices/portfoliosSlice';
import PortfolioList from './components/PortfolioList';

const Portfolios = () => {
  const dispatch = useDispatch<AppDispatch>();
  const portfolios = useSelector((state: RootState) => state.portfolios.items);
  const [open, setOpen] = useState(false);
  const [newPortfolio, setNewPortfolio] = useState({
    name: '',
    description: '',
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewPortfolio({ name: '', description: '' });
  };

  const handleCreate = () => {
    dispatch(createPortfolio(newPortfolio));
    handleClose();
  };

  // const portfolios = [
  //   {
  //     "id": "1",
  //     "name": "Retirement Fund",
  //     "description": "Long-term growth investment for retirement.",
  //     "status": "Active",
  //     "created_at": "2023-01-15T14:48:00.000Z"
  //   },
  //   {
  //     "id": "2",
  //     "name": "Tech Innovations",
  //     "description": "Focused on emerging tech companies.",
  //     "status": "Active",
  //     "created_at": "2023-02-10T10:30:00.000Z"
  //   },
  //   {
  //     "id": "3",
  //     "name": "Real Estate Trust",
  //     "description": "Invest in lucrative real estate projects.",
  //     "status": "Active",
  //     "created_at": "2023-03-05T16:45:00.000Z"
  //   },
  //   {
  //     "id": "4",
  //     "name": "Green Energy",
  //     "description": "Portfolio of companies in renewable energy.",
  //     "status": "Pending",
  //     "created_at": "2023-04-20T11:15:00.000Z"
  //   },
  //   {
  //     "id": "5",
  //     "name": "Dividend Kings",
  //     "description": "Companies with strong dividend payment history.",
  //     "status": "Active",
  //     "created_at": "2023-05-25T09:00:00.000Z"
  //   },
  //   {
  //     "id": "6",
  //     "name": "Healthcare Growth",
  //     "description": "Investments in innovative healthcare solutions.",
  //     "status": "Closed",
  //     "created_at": "2023-06-15T14:48:00.000Z"
  //   },
  //   {
  //     "id": "7",
  //     "name": "Global Markets",
  //     "description": "Diversified international stock portfolio.",
  //     "status": "Active",
  //     "created_at": "2023-07-01T12:00:00.000Z"
  //   },
  //   {
  //     "id": "8",
  //     "name": "Small Cap Leaders",
  //     "description": "High growth potential small-cap companies.",
  //     "status": "Pending",
  //     "created_at": "2023-08-05T14:30:00.000Z"
  //   },
  //   {
  //     "id": "9",
  //     "name": "Cryptocurrency Basket",
  //     "description": "A mix of top cryptocurrencies and tokens.",
  //     "status": "Active",
  //     "created_at": "2023-09-12T10:00:00.000Z"
  //   },
  //   {
  //     "id": "10",
  //     "name": "Value Investing",
  //     "description": "Investments in undervalued stocks.",
  //     "status": "Active",
  //     "created_at": "2023-10-05T15:30:00.000Z"
  //   }
  // ]

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">Portfolios</Typography>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Create Portfolio
        </Button>
      </Grid>

      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <PortfolioList portfolios={portfolios} />
        </Paper>
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create New Portfolio</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Portfolio Name"
            type="text"
            fullWidth
            value={newPortfolio.name}
            onChange={(e) => setNewPortfolio({ ...newPortfolio, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            multiline
            rows={4}
            value={newPortfolio.description}
            onChange={(e) => setNewPortfolio({ ...newPortfolio, description: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCreate} variant="contained" color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Portfolios;