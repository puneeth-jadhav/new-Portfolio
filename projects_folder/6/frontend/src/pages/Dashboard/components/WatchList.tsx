import {
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

interface Fund {
  id: string;
  name: string;
  ticker: string;
}

interface WatchListProps {
  funds: Fund[];
}

const WatchList = ({ funds }: WatchListProps) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Watch List
      </Typography>
      <List>
        {funds.map((fund) => (
          <ListItem key={fund.id}>
            <ListItemText
              primary={fund.name}
              secondary={fund.ticker}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default WatchList;