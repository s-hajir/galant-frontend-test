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
  LogOut
} from 'lucide-react';
import { SubmenuNavLink2, type SubmenuItem } from './SubmenuNavLink2';
import { cn } from '@/lib/utils';

interface Navigation2Props {
  isOpen: boolean;
  onClose: () => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export const Navigation2: React.FC<Navigation2Props> = ({ isOpen, onClose, isCollapsed, onToggleCollapse }) => {
  // Define submenu items (same as original)
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

  return (
    <aside 
      className={cn(
        "fixed lg:static inset-y-0 left-0 z-50 flex flex-col transition-all duration-500 ease-out",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        isCollapsed ? "lg:w-[88px]" : "lg:w-[280px]",
        "w-[280px]"
      )}
    >
      <div className={cn(
        "flex flex-col h-[96vh] my-[2vh] ml-4 mr-0 rounded-3xl border border-white/10 bg-[#0f1117] shadow-2xl overflow-hidden backdrop-blur-xl",
        "transition-all duration-500 ease-out"
      )}>
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-8 flex-shrink-0">
          <div className={cn("flex items-center gap-3 overflow-hidden transition-all duration-300", isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100")}>
            <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <Truck className="text-white" size={18} />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Galant
            </h1>
          </div>
          
          {/* Mobile Close */}
          <button
            onClick={onClose}
            className="lg:hidden p-2 text-slate-400 hover:bg-white/5 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>

           {/* Desktop Collapse (Centered if collapsed) */}
           <button
            onClick={onToggleCollapse}
            className={cn(
              "hidden lg:flex items-center justify-center w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 transition-all duration-300",
              isCollapsed && "mx-auto rotate-180"
            )}
          >
            <ChevronLeft size={16} />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto overflow-x-hidden px-4 py-2 space-y-2 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
          <div className="mb-6">
             <p className={cn("px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 transition-opacity", isCollapsed ? "hidden" : "opacity-100")}>
               Main
             </p>
             <NavLink2 href="/" label="Dashboard" icon={Home} onClick={onClose} isCollapsed={isCollapsed} />
             <SubmenuNavLink2 label="Rentals" icon={Building} submenuItems={rentalsMenu} onClick={onClose} isCollapsed={isCollapsed} />
             <SubmenuNavLink2 label="Equipment" icon={Truck} submenuItems={equipmentMenu} onClick={onClose} isCollapsed={isCollapsed} />
          </div>

          <div className="mb-6">
             <p className={cn("px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 transition-opacity", isCollapsed ? "hidden" : "opacity-100")}>
               Operations
             </p>
             <SubmenuNavLink2 label="Maintenance" icon={Wrench} submenuItems={maintenanceMenu} onClick={onClose} isCollapsed={isCollapsed} />
             <SubmenuNavLink2 label="Billing" icon={DollarSign} submenuItems={billingMenu} onClick={onClose} isCollapsed={isCollapsed} />
             <NavLink2 href="/customers" label="Customers" icon={Users} onClick={onClose} isCollapsed={isCollapsed} />
          </div>

          <div className="mb-6">
             <p className={cn("px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 transition-opacity", isCollapsed ? "hidden" : "opacity-100")}>
               Insights
             </p>
             <SubmenuNavLink2 label="Reports" icon={FileText} submenuItems={reportsMenu} onClick={onClose} isCollapsed={isCollapsed} />
             <SubmenuNavLink2 label="Analytics" icon={BarChart3} submenuItems={analyticsMenu} onClick={onClose} isCollapsed={isCollapsed} />
          </div>

          <div className="mb-6">
             <p className={cn("px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 transition-opacity", isCollapsed ? "hidden" : "opacity-100")}>
               System
             </p>
             <SubmenuNavLink2 label="Notifications" icon={Bell} submenuItems={notificationsMenu} onClick={onClose} isCollapsed={isCollapsed} />
             <SubmenuNavLink2 label="Settings" icon={Settings} submenuItems={settingsMenu} onClick={onClose} isCollapsed={isCollapsed} />
          </div>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-white/5 bg-black/20">
          <div className={cn("flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors cursor-pointer", isCollapsed ? "justify-center" : "")}>
            <div className="relative">
               <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-lg">
                 JD
               </div>
               <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#0f1117] rounded-full"></div>
            </div>
            
            <div className={cn("flex-1 overflow-hidden transition-all duration-300", isCollapsed ? "w-0 opacity-0 hidden" : "w-auto opacity-100")}>
              <p className="text-sm font-medium text-white truncate">John Doe</p>
              <p className="text-xs text-slate-400 truncate">Fleet Manager</p>
            </div>
            
            {!isCollapsed && (
               <LogOut size={18} className="text-slate-500 hover:text-white transition-colors" />
            )}
          </div>
        </div>

      </div>
    </aside>
  );
};

interface NavLink2Props {
  href: string;
  label: string;
  icon: React.ElementType;
  onClick?: () => void;
  isCollapsed?: boolean;
}

const NavLink2: React.FC<NavLink2Props> = ({ href, label, icon: Icon, onClick, isCollapsed }) => {
  return (
    <RouterNavLink
      to={href}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative overflow-hidden",
          isActive 
            ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25" 
            : "text-slate-400 hover:text-slate-100 hover:bg-white/5",
          isCollapsed && "justify-center px-2"
        )
      }
    >
      <Icon size={20} className={cn("relative z-10 transition-transform duration-300 group-hover:scale-110")} />
      {!isCollapsed && (
        <span className="relative z-10 font-medium text-sm">{label}</span>
      )}
    </RouterNavLink>
  );
};
