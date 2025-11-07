import React, { useState } from 'react';
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { Home, Truck, Wrench, DollarSign, Users, Building, ChevronDown, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar with Mobile Toggle */}
        <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-auto p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

const Sidebar: React.FC<{ isOpen: boolean; onClose: () => void; isCollapsed: boolean; onToggleCollapse: () => void }> = ({ isOpen, onClose, isCollapsed, onToggleCollapse }) => {
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({});
  const location = useLocation();

  const toggleMenu = (menuId: string) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuId]: !prev[menuId]
    }));
  };

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
          <h1 className={`text-3xl text-primary transition-opacity duration-300 ${isCollapsed ? 'lg:hidden' : 'hidden lg:block'}`} style={{ fontFamily: "'Permanent Marker', cursive" }}>
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
            icon={<Truck size={20} />} 
            menuId="equipment"
            isExpanded={expandedMenus.equipment || false}
            onToggle={toggleMenu}
            submenu={[
              { href: '/equipment/vehicles', label: 'Vehicles' },
              { href: '/equipment/machines', label: 'Machines' }
            ]}
            currentPath={location.pathname}
            onClick={onClose}
            isCollapsed={isCollapsed}
          />
          <SubmenuNavLink 
            label="Rentals" 
            icon={<Building size={20} />} 
            menuId="rentals"
            isExpanded={expandedMenus.rentals || false}
            onToggle={toggleMenu}
            submenu={[
              { href: '/rentals/active', label: 'Active Rentals' },
              { href: '/rentals/history', label: 'Rental History' }
            ]}
            currentPath={location.pathname}
            onClick={onClose}
            isCollapsed={isCollapsed}
          />
          <SubmenuNavLink 
            label="Maintenance" 
            icon={<Wrench size={20} />} 
            menuId="maintenance"
            isExpanded={expandedMenus.maintenance || false}
            onToggle={toggleMenu}
            submenu={[
              { href: '/maintenance/scheduled', label: 'Scheduled' },
              { href: '/maintenance/history', label: 'History' }
            ]}
            currentPath={location.pathname}
            onClick={onClose}
            isCollapsed={isCollapsed}
          />
          <SubmenuNavLink 
            label="Billing" 
            icon={<DollarSign size={20} />} 
            menuId="billing"
            isExpanded={expandedMenus.billing || false}
            onToggle={toggleMenu}
            submenu={[
              { href: '/billing/invoices', label: 'Invoices' },
              { href: '/billing/payments', label: 'Payments' }
            ]}
            currentPath={location.pathname}
            onClick={onClose}
            isCollapsed={isCollapsed}
          />
          <NavLink href="/customers" label="Customers" icon={<Users size={20} />} onClick={onClose} isCollapsed={isCollapsed} />
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

const Navbar: React.FC<{ onMenuClick: () => void }> = ({ onMenuClick }) => {
  return (
    <header className="lg:hidden bg-card px-4 py-3 border-b border-border flex items-center justify-between">
      <button
        onClick={onMenuClick}
        className="p-2 hover:bg-muted rounded-lg transition-colors"
        aria-label="Toggle sidebar"
      >
        <Menu size={24} />
      </button>
      <h1 className="text-2xl text-primary" style={{ fontFamily: "'Permanent Marker', cursive" }}>
        Galant
      </h1>
    </header>
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

interface Submenu {
  href: string;
  label: string;
}

interface SubmenuNavLinkProps {
  label: string;
  icon: React.ReactNode;
  menuId: string;
  isExpanded: boolean;
  onToggle: (menuId: string) => void;
  submenu: Submenu[];
  currentPath: string;
  onClick?: () => void;
  isCollapsed?: boolean;
}

const SubmenuNavLink: React.FC<SubmenuNavLinkProps> = ({
  label,
  icon,
  menuId,
  isExpanded,
  onToggle,
  submenu,
  currentPath,
  onClick,
  isCollapsed
}) => {
  // Check if any submenu item is active
  const isParentActive = submenu.some(item => currentPath === item.href);

  return (
    <div>
      <button
        onClick={() => onToggle(menuId)}
        aria-expanded={isExpanded}
        aria-controls={`submenu-${menuId}`}
        title={isCollapsed ? label : undefined}
        className={`w-full flex items-center justify-between px-4 py-2 rounded-lg transition-colors ${
          isParentActive
            ? 'bg-primary/40 text-primary-foreground'
            : 'text-slate-300 hover:bg-slate-800 hover:text-white'
        } ${isCollapsed ? 'lg:justify-center lg:px-2' : ''}`}
      >
        <div className={`flex items-center space-x-3 ${isCollapsed ? 'lg:space-x-0' : ''}`}>
          {icon}
          <span className={`transition-opacity duration-300 ${isCollapsed ? 'lg:hidden' : ''}`}>{label}</span>
        </div>
        <ChevronDown
          size={18}
          className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''} ${isCollapsed ? 'lg:hidden' : ''}`}
        />
      </button>
      {isExpanded && !isCollapsed && (
        <div className="ml-4 mt-2 space-y-1 border-l-2 pl-4 animate-in fade-in duration-200" style={{ borderColor: 'hsl(var(--sidebar-border))' }}>
          {submenu.map((item) => (
            <RouterNavLink
              key={item.href}
              to={item.href}
              onClick={onClick}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg transition-colors text-sm border-l-3 pl-3 ${
                  isActive
                    ? 'bg-accent/80 text-accent-foreground border-l-accent'
                    : 'border-l-transparent text-slate-400 hover:bg-slate-800 hover:text-white'
                }`
              }
            >
              {item.label}
            </RouterNavLink>
          ))}
        </div>
      )}
    </div>
  );
};
