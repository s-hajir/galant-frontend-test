import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { Home, Truck, Wrench, DollarSign, Users, Building } from 'lucide-react';

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen bg-background text-foreground">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-auto p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-card text-card-foreground p-6 flex flex-col border-r border-border">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-primary">FleetFlow</h1>
      </div>
      <nav className="space-y-2">
        <NavLink href="/" label="Dashboard" icon={<Home size={20} />} />
        <NavLink href="/equipment" label="Equipment" icon={<Truck size={20} />} />
        <NavLink href="/rentals" label="Rentals" icon={<Building size={20} />} />
        <NavLink href="/maintenance" label="Maintenance" icon={<Wrench size={20} />} />
        <NavLink href="/billing" label="Billing" icon={<DollarSign size={20} />} />
        <NavLink href="/customers" label="Customers" icon={<Users size={20} />} />
      </nav>
    </aside>
  );
};

const Navbar: React.FC = () => {
  return (
    <header className="bg-card px-6 py-4 flex justify-between items-center border-b border-border">
      <div>
        <h2 className="text-xl font-semibold">Fleet & Construction Equipment Rental</h2>
      </div>
      <div className="text-muted-foreground">
        <span>Welcome, Manager</span>
      </div>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, icon }) => {
  return (
    <RouterNavLink
      to={href}
      className={({ isActive }) =>
        `flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
          isActive
            ? 'bg-primary text-primary-foreground'
            : 'hover:bg-muted hover:text-muted-foreground'
        }`
      }
    >
      {icon}
      <span>{label}</span>
    </RouterNavLink>
  );
};
