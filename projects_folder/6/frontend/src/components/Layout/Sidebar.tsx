import { useNavigate } from 'react-router-dom';
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const Sidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
    { text: 'Portfolios', icon: <AccountBalanceIcon />, path: '/portfolios' },
    { text: 'Fund Management', icon: <ShowChartIcon />, path: '/funds' },
    { text: 'Data Export', icon: <FileDownloadIcon />, path: '/export' },
  ];

  return (
    <div>
      <Toolbar>
        <Box
          component="img"
          sx={{
            height: 40,
            width: 'auto',
            maxWidth: '100%',
          }}
          alt="Logo"
          src="https://cdn-icons-png.flaticon.com/512/2331/2331937.png"
        />
      </Toolbar>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={() => navigate(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
