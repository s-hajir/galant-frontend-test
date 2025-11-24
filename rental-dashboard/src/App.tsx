import { BrowserRouter as Router, Routes, Route, Outlet, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Navigation } from '@/components/navigation/Navigation';
import Dashboard from '@/pages/Dashboard';
import { Equipment, Rentals, Maintenance, Billing, Customers, NotFound, Vehicles, Machines, ActiveRentals, RentalHistory, ScheduledMaintenance, MaintenanceHistory } from '@/pages';
import DemoPage2 from '@/pages/DemoPage2';
import DemoPage3 from '@/pages/DemoPage3';
import DemoPage4 from '@/pages/DemoPage4';
import { ProtectedRoute } from './components/common/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 text-foreground">
      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <Navigation 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header Navbar. lg:hidden - class hides the header on large screens and above (1024px+) */}
        <header className="lg:hidden bg-card px-4 py-3 border-b border-border flex items-center justify-between">
          <h1 className="text-2xl text-primary" style={{ fontFamily: "'Permanent Marker', cursive" }}>
            Galant
          </h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle sidebar"
          >
            <Menu size={24} />
          </button>
        </header>
        {/* Page Outlet */}
        <main className="flex-1 overflow-auto p-4 md:p-6 lg:p-8">
          {/* Renders the matched child route */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <AuthProvider>
      <BrowserRouter>
        <Routes>
            {/* Public route - not protected */}
            <Route path="/login" element={<Rentals />} />
            <Route path="/nav-demo" element={<DemoPage2 />} />
            <Route path="/nav-demo3" element={<DemoPage3 />} />
            <Route path="/nav-demo4" element={<DemoPage4 />} />

            {/* Protected layout - wraps all authenticated routes */}
            <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
              {/* All these routes share the same AppLayout */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/equipment" element={<Equipment />} />
              <Route path="/equipment/vehicles" element={<Vehicles />} />
              <Route path="/equipment/machines" element={<Machines />} />
              <Route path="/rentals" element={<Rentals />} />
              <Route path="/rentals/active" element={<ActiveRentals />} />
              <Route path="/rentals/history" element={<RentalHistory />} />
              <Route path="/maintenance" element={<Maintenance />} />
              <Route path="/maintenance/scheduled" element={<ScheduledMaintenance />} />
              <Route path="/maintenance/history" element={<MaintenanceHistory />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/customers" element={<Customers />} />

              {/* Role-protected routes 
              <Route path="/admin" element={<ProtectedRoute requiredRole="ADMIN"><Calendar /></ProtectedRoute>} />
              */}
              {/* Catch-all for 404 */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  );
}

export default App;
