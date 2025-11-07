import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import Dashboard from '@/pages/Dashboard';
import { Equipment, Rentals, Maintenance, Billing, Customers, NotFound, Vehicles, Machines, ActiveRentals, RentalHistory, ScheduledMaintenance, MaintenanceHistory } from '@/pages';

function App() {
  const pages = [
    { path: '/', element: <Dashboard /> },
    { path: '/equipment', element: <Equipment /> },
    { path: '/equipment/vehicles', element: <Vehicles /> },
    { path: '/equipment/machines', element: <Machines /> },
    { path: '/rentals', element: <Rentals /> },
    { path: '/rentals/active', element: <ActiveRentals /> },
    { path: '/rentals/history', element: <RentalHistory /> },
    { path: '/maintenance', element: <Maintenance /> },
    { path: '/maintenance/scheduled', element: <ScheduledMaintenance /> },
    { path: '/maintenance/history', element: <MaintenanceHistory /> },
    { path: '/billing', element: <Billing /> },
    { path: '/customers', element: <Customers /> },
    { path: '*', element: <NotFound /> },
  ];

  return (
    <Router>
      <MainLayout>
        <Routes>
          {pages.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
