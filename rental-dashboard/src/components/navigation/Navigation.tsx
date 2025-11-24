import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { 
  Home, 
  Truck, 
  Wrench, 
  DollarSign, 
  Users, 
  Building, 
  ChevronLeft, 
  ChevronRight, 
  X,
  Car,
  Cog,
  Calendar,
  History,
  FileText,
  CreditCard,
  BarChart3,
  TrendingUp,
  LineChart,
  Settings,
  UserCog,
  Shield,
  Bell,
  MessageSquare,
  Clock,
  Code
} from 'lucide-react';
import { SubmenuNavLink, type SubmenuItem } from './SubmenuNavLink';

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ isOpen, onClose, isCollapsed, onToggleCollapse }) => {
  // Define submenu items
  const equipmentMenu: SubmenuItem[] = [
    { to: '/equipment/vehicles', label: 'Vehicles', icon: Car },
    { to: '/equipment/machines', label: 'Machines', icon: Cog }
  ];

  const rentalsMenu: SubmenuItem[] = [
    { to: '/rentals/active', label: 'Active Rentals', icon: Building },
    { to: '/rentals/history', label: 'Rental History', icon: History }
  ];

  const maintenanceMenu: SubmenuItem[] = [
    { to: '/maintenance/scheduled', label: 'Scheduled', icon: Calendar },
    { to: '/maintenance/history', label: 'History', icon: History }
  ];

  const billingMenu: SubmenuItem[] = [
    { to: '/billing/invoices', label: 'Invoices', icon: FileText },
    { to: '/billing/payments', label: 'Payments', icon: CreditCard }
  ];

  const reportsMenu: SubmenuItem[] = [
    { to: '/reports/financial', label: 'Financial Reports', icon: BarChart3 },
    { to: '/reports/equipment', label: 'Equipment Reports', icon: TrendingUp },
    { to: '/reports/customer', label: 'Customer Reports', icon: Users }
  ];

  const analyticsMenu: SubmenuItem[] = [
    { to: '/analytics/utilization', label: 'Utilization', icon: LineChart },
    { to: '/analytics/revenue', label: 'Revenue', icon: DollarSign },
    { to: '/analytics/trends', label: 'Trends', icon: TrendingUp }
  ];

  const settingsMenu: SubmenuItem[] = [
    { to: '/settings/general', label: 'General', icon: Settings },
    { to: '/settings/users', label: 'Users', icon: UserCog },
    { to: '/settings/permissions', label: 'Permissions', icon: Shield }
  ];

  const notificationsMenu: SubmenuItem[] = [
    { to: '/notifications/alerts', label: 'Alerts', icon: Bell },
    { to: '/notifications/messages', label: 'Messages', icon: MessageSquare },
    { to: '/notifications/reminders', label: 'Reminders', icon: Clock }
  ];

  const demoMenu: SubmenuItem[] = [
    { to: '/nav-demo', label: 'Nav Demo', icon: Code },
    { to: '/nav-demo3', label: 'Nav Demo 3', icon: Code },
    { to: '/nav-demo4', label: 'Nav Demo 4', icon: Code }
  ];

  return (
    <>
      {/* Sidebar - Hidden on mobile, visible on lg+ */}
      <aside 
        className={`fixed lg:static inset-y-0 left-0 z-50 flex flex-col border-r transform transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } ${
          isCollapsed ? 'lg:w-20' : 'lg:w-64'
        } w-64`}
        style={{ 
          backgroundColor: 'hsl(var(--sidebar-bg))', 
          color: 'hsl(var(--sidebar-text))',
          borderColor: 'hsl(var(--sidebar-border))'
        }}
      >
        {/* Fixed Header */}
        <div 
          className="flex items-center justify-between px-6 py-6 border-b flex-shrink-0"
          style={{ borderColor: 'hsl(var(--sidebar-border))' }}
        >
          <h1 className={`text-3xl text-primary transition-opacity duration-300 ${isCollapsed ? 'lg:hidden' : ''}`} style={{ fontFamily: "'Permanent Marker', cursive" }}>
            Galant
          </h1>
          {/* Collapse Toggle - Desktop Only */}
          <button
            onClick={onToggleCollapse}
            className="hidden lg:block p-2 hover:bg-slate-800 rounded-lg transition-colors"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
          {/* Mobile Close Button */}
          <button
            onClick={onClose}
            className="lg:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors ml-auto"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Navigation Area */}
        <nav className="space-y-2 flex-1 overflow-y-auto px-6 py-4 scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
          <NavLink href="/" label="Dashboard" icon={<Home size={20} />} onClick={onClose} isCollapsed={isCollapsed} />
          <SubmenuNavLink 
            label="Equipment" 
            icon={Truck} 
            submenuItems={equipmentMenu}
            onClick={onClose}
            isCollapsed={isCollapsed}
          />
          <SubmenuNavLink 
            label="Rentals" 
            icon={Building} 
            submenuItems={rentalsMenu}
            onClick={onClose}
            isCollapsed={isCollapsed}
          />
          <SubmenuNavLink 
            label="Maintenance" 
            icon={Wrench} 
            submenuItems={maintenanceMenu}
            onClick={onClose}
            isCollapsed={isCollapsed}
          />
          <SubmenuNavLink 
            label="Billing" 
            icon={DollarSign} 
            submenuItems={billingMenu}
            onClick={onClose}
            isCollapsed={isCollapsed}
          />
          <NavLink href="/customers" label="Customers" icon={<Users size={20} />} onClick={onClose} isCollapsed={isCollapsed} />
          <SubmenuNavLink 
            label="Reports" 
            icon={Home} 
            submenuItems={reportsMenu}
            onClick={onClose}
            isCollapsed={isCollapsed}
          />
          <SubmenuNavLink 
            label="Analytics" 
            icon={Truck} 
            submenuItems={analyticsMenu}
            onClick={onClose}
            isCollapsed={isCollapsed}
          />
          <SubmenuNavLink 
            label="Settings" 
            icon={Wrench} 
            submenuItems={settingsMenu}
            onClick={onClose}
            isCollapsed={isCollapsed}
          />
          <SubmenuNavLink 
            label="Notifications" 
            icon={Building} 
            submenuItems={notificationsMenu}
            onClick={onClose}
            isCollapsed={isCollapsed}
          />
          <SubmenuNavLink 
            label="Demo Pages" 
            icon={Code} 
            submenuItems={demoMenu}
            onClick={onClose}
            isCollapsed={isCollapsed}
          />
        </nav>

        {/* Fixed Footer */}
        <div 
          className={`border-t px-6 py-4 flex-shrink-0 flex items-center transition-all duration-300 ${isCollapsed ? 'lg:px-3 lg:justify-center' : 'space-x-3'}`}
          style={{ 
            borderColor: 'hsl(var(--sidebar-border))',
            backgroundColor: 'hsl(var(--sidebar-bg))' 
          }}
        >
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
            <Users size={16} className="text-primary" />
          </div>
          <div className={`min-w-0 flex-1 transition-opacity duration-300 ${isCollapsed ? 'lg:hidden' : ''}`}>
            <p className="text-sm font-medium truncate" style={{ color: 'hsl(var(--sidebar-text))' }}>Manager</p>
            <p className="text-xs truncate text-slate-400">Fleet Admin</p>
          </div>
        </div>
      </aside>
    </>
  );
};

interface NavLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
  isCollapsed?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, icon, onClick, isCollapsed }) => {
  return (
    <RouterNavLink
      to={href}
      onClick={onClick}
      title={isCollapsed ? label : undefined}
      className={({ isActive }) =>
        `flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
          isActive
            ? 'bg-primary/40 text-primary-foreground'
            : 'text-slate-300 hover:bg-slate-800 hover:text-white'
        } ${isCollapsed ? 'lg:justify-center lg:px-2' : ''}`
      }
    >
      {icon}
      <span className={`transition-opacity duration-300 ${isCollapsed ? 'lg:hidden' : ''}`}>{label}</span>
    </RouterNavLink>
  );
};
