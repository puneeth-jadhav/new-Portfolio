import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';

interface Fund {
  id: string;
  name: string;
  ticker: string;
}

interface FundListProps {
  funds: Fund[];
}

const FundList = ({ funds }: FundListProps) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Ticker</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {funds.map((fund) => (
            <TableRow key={fund.id}>
              <TableCell>{fund.name}</TableCell>
              <TableCell>{fund.ticker}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ mr: 1 }}
                >
                  Add to Portfolio
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                >
                  View Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FundList;