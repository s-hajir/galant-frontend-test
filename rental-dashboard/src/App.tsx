import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import Dashboard from '@/pages/Dashboard';
import { Equipment, Rentals, Maintenance, Billing, Customers, NotFound } from '@/pages';

function App() {
  const pages = [
    { path: '/', element: <Dashboard /> },
    { path: '/equipment', element: <Equipment /> },
    { path: '/rentals', element: <Rentals /> },
    { path: '/maintenance', element: <Maintenance /> },
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
