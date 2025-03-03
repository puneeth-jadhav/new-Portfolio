import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

interface Portfolio {
  id: string;
  name: string;
  description: string;
  status: string;
  created_at: string;
}

interface PortfolioSummaryProps {
  portfolios: Portfolio[];
}

const PortfolioSummary = ({ portfolios }: PortfolioSummaryProps) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Portfolio Summary
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {portfolios && Array.isArray(portfolios) ? portfolios.map((portfolio) => (
              <TableRow key={portfolio.id}>
                <TableCell>{portfolio.name}</TableCell>
                <TableCell>{portfolio.description}</TableCell>
                <TableCell>{portfolio.status}</TableCell>
              </TableRow>
            )) : <TableRow><TableCell colSpan={3}>Loading portfolios...</TableCell></TableRow>}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PortfolioSummary;