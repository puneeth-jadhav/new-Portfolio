import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import Portfolios from '../pages/Portfolios';
import FundManagement from '../pages/FundManagement';
import DataExport from '../pages/DataExport';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="portfolios" element={<Portfolios />} />
        <Route path="funds" element={<FundManagement />} />
        <Route path="export" element={<DataExport />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;