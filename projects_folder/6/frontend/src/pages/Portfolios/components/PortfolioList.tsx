import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface Portfolio {
  id: string;
  name: string;
  description: string;
  status: string;
  created_at: string;
}

interface PortfolioListProps {
  portfolios: Portfolio[];
}

const PortfolioList = ({ portfolios }: PortfolioListProps) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Created</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {portfolios.map((portfolio) => (
            <TableRow key={portfolio.id}>
              <TableCell>{portfolio.name}</TableCell>
              <TableCell>{portfolio.description}</TableCell>
              <TableCell>{portfolio.status}</TableCell>
              <TableCell>
                {new Date(portfolio.created_at).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <IconButton size="small">
                  <EditIcon />
                </IconButton>
                <IconButton size="small" color="error">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PortfolioList;