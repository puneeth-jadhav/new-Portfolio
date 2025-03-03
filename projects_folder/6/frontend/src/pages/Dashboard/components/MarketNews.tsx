import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';

const MarketNews = () => {
  // Mock data - replace with actual API integration
  const news = [
    {
      id: 1,
      title: 'Market Update',
      summary: 'Latest market trends and analysis',
      date: '2024-02-27',
    },
    {
      id: 2,
      title: 'Economic Indicators',
      summary: 'Key economic indicators for this quarter',
      date: '2024-02-27',
    },
  ];

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Market News
      </Typography>
      <List>
        {news.map((item, index) => (
          <div key={item.id}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={item.title}
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {item.date}
                    </Typography>
                    {` — ${item.summary}`}
                  </>
                }
              />
            </ListItem>
            {index < news.length - 1 && <Divider />}
          </div>
        ))}
      </List>
    </>
  );
};

export default MarketNews;