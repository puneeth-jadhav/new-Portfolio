import { useState } from 'react';
import {
  Grid,
  Paper,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  SelectChangeEvent,
} from '@mui/material';
import axios from 'axios';

const DataExport = () => {
  const [selectedPortfolio, setSelectedPortfolio] = useState('');
  const [fileType, setFileType] = useState('');

  const handlePortfolioChange = (event: SelectChangeEvent) => {
    setSelectedPortfolio(event.target.value);
  };

  const handleFileTypeChange = (event: SelectChangeEvent) => {
    setFileType(event.target.value);
  };

  const handleExport = async () => {
    try {
      const response = await axios.post(
        '/exports',
        {
          portfolio_id: selectedPortfolio,
          file_type: fileType,
        },
        {
          headers: {},
        }
      );

      // Handle the file download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `portfolio-export.${fileType}`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Export failed:', error);
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Data Export
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Paper sx={{ p: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Select Portfolio</InputLabel>
                <Select
                  value={selectedPortfolio}
                  label="Select Portfolio"
                  onChange={handlePortfolioChange}
                >
                  <MenuItem value="portfolio1">Portfolio 1</MenuItem>
                  <MenuItem value="portfolio2">Portfolio 2</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>File Type</InputLabel>
                <Select
                  value={fileType}
                  label="File Type"
                  onChange={handleFileTypeChange}
                >
                  <MenuItem value="csv">CSV</MenuItem>
                  <MenuItem value="pdf">PDF</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleExport}
                disabled={!selectedPortfolio || !fileType}
                fullWidth
              >
                Export Data
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default DataExport;