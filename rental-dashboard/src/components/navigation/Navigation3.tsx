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
  Sparkles,
  Zap
} from 'lucide-react';
import { SubmenuNavLink3, type SubmenuItem } from './SubmenuNavLink3';
import { cn } from '@/lib/utils';

interface Navigation3Props {
  isOpen: boolean;
  onClose: () => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export const Navigation3: React.FC<Navigation3Props> = ({ isOpen, onClose, isCollapsed, onToggleCollapse }) => {
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
        "fixed lg:static inset-y-0 left-0 z-50 flex flex-col transition-all duration-500 ease-out overflow-hidden",
        "bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        isCollapsed ? "lg:w-[72px]" : "lg:w-[280px]",
        "w-[280px]"
      )}
    >
      {/* Floating animated lines background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent animate-pulse" 
             style={{ animationDuration: '3s' }} />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-pulse" 
             style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent animate-pulse" 
             style={{ animationDuration: '5s', animationDelay: '2s' }} />
        
        {/* Floating orbs for liquid glass effect */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-40 left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '7s', animationDelay: '1.5s' }} />
      </div>
      
      {/* Animated gradient overlay with liquid glass effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-transparent to-purple-600/10 pointer-events-none backdrop-blur-[1px]" />
      
      <div className="relative flex flex-col h-full">
        {/* Header with gradient accent */}
        <div className="flex items-center justify-between px-5 py-6 border-b border-slate-800/50">
          <div className={cn(
            "flex items-center gap-3 overflow-hidden transition-all duration-300",
            isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
          )}>
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/30">
                <Zap className="text-white" size={20} fill="white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-slate-900 animate-pulse" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-white via-violet-200 to-purple-200 bg-clip-text text-transparent">
                Galant
              </h1>
              <p className="text-[10px] text-slate-500 font-medium tracking-wider">FLEET MANAGER</p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="lg:hidden p-2 text-slate-400 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>

          <button
            onClick={onToggleCollapse}
            className={cn(
              "hidden lg:flex items-center justify-center w-7 h-7 rounded-lg bg-slate-800/50 hover:bg-slate-700 text-slate-400 transition-all duration-300 border border-slate-700/50",
              isCollapsed && "mx-auto rotate-180"
            )}
          >
            <ChevronLeft size={14} />
          </button>
        </div>

        {/* Quick Stats Bar */}
        {!isCollapsed && (
          <div className="px-4 py-4 grid grid-cols-2 gap-2">
            <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-lg p-2.5 group hover:from-violet-500/20 hover:to-purple-500/20 transition-all cursor-pointer">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles size={12} className="text-violet-400" />
                <span className="text-[10px] text-slate-400 font-medium">ACTIVE</span>
              </div>
              <p className="text-lg font-bold text-white">24</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-lg p-2.5 group hover:from-emerald-500/20 hover:to-teal-500/20 transition-all cursor-pointer">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp size={12} className="text-emerald-400" />
                <span className="text-[10px] text-slate-400 font-medium">REVENUE</span>
              </div>
              <p className="text-lg font-bold text-white">$45k</p>
            </div>
          </div>
        )}

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto overflow-x-hidden px-3 py-2 space-y-1 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
          <div className="mb-4">
            <p className={cn(
              "px-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2",
              isCollapsed ? "hidden" : "block"
            )}>
              <div className="w-1 h-1 rounded-full bg-violet-500" />
              Core
            </p>
            <NavLink3 href="/" label="Dashboard" icon={Home} onClick={onClose} isCollapsed={isCollapsed} />
            <SubmenuNavLink3 label="Rentals" icon={Building} submenuItems={rentalsMenu} onClick={onClose} isCollapsed={isCollapsed} />
            <SubmenuNavLink3 label="Equipment" icon={Truck} submenuItems={equipmentMenu} onClick={onClose} isCollapsed={isCollapsed} />
          </div>

          <div className="mb-4">
            <p className={cn(
              "px-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2",
              isCollapsed ? "hidden" : "block"
            )}>
              <div className="w-1 h-1 rounded-full bg-purple-500" />
              Operations
            </p>
            <SubmenuNavLink3 label="Maintenance" icon={Wrench} submenuItems={maintenanceMenu} onClick={onClose} isCollapsed={isCollapsed} />
            <SubmenuNavLink3 label="Billing" icon={DollarSign} submenuItems={billingMenu} onClick={onClose} isCollapsed={isCollapsed} />
            <NavLink3 href="/customers" label="Customers" icon={Users} onClick={onClose} isCollapsed={isCollapsed} />
          </div>

          <div className="mb-4">
            <p className={cn(
              "px-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2",
              isCollapsed ? "hidden" : "block"
            )}>
              <div className="w-1 h-1 rounded-full bg-pink-500" />
              Analytics
            </p>
            <SubmenuNavLink3 label="Reports" icon={FileText} submenuItems={reportsMenu} onClick={onClose} isCollapsed={isCollapsed} />
            <SubmenuNavLink3 label="Analytics" icon={BarChart3} submenuItems={analyticsMenu} onClick={onClose} isCollapsed={isCollapsed} />
          </div>

          <div className="mb-4">
            <p className={cn(
              "px-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2",
              isCollapsed ? "hidden" : "block"
            )}>
              <div className="w-1 h-1 rounded-full bg-cyan-500" />
              System
            </p>
            <SubmenuNavLink3 label="Notifications" icon={Bell} submenuItems={notificationsMenu} onClick={onClose} isCollapsed={isCollapsed} />
            <SubmenuNavLink3 label="Settings" icon={Settings} submenuItems={settingsMenu} onClick={onClose} isCollapsed={isCollapsed} />
          </div>
        </nav>

        {/* User Profile with gradient */}
        <div className="p-4 border-t border-slate-800/50 bg-slate-900/50 backdrop-blur-sm">
          <div className={cn(
            "flex items-center gap-3 p-2.5 rounded-xl transition-all cursor-pointer group",
            "hover:bg-gradient-to-r hover:from-violet-500/10 hover:to-purple-500/10 border border-transparent hover:border-violet-500/20",
            isCollapsed ? "justify-center" : ""
          )}>
            <div className="relative flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg ring-2 ring-violet-500/20">
                AM
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-slate-900 rounded-full" />
            </div>
            
            <div className={cn(
              "flex-1 overflow-hidden transition-all duration-300",
              isCollapsed ? "w-0 opacity-0 hidden" : "w-auto opacity-100"
            )}>
              <p className="text-sm font-semibold text-white truncate">Alex Manager</p>
              <p className="text-xs text-slate-400 truncate">Premium Plan</p>
            </div>
            
            {!isCollapsed && (
              <div className="w-2 h-2 rounded-full bg-violet-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

interface NavLink3Props {
  href: string;
  label: string;
  icon: React.ElementType;
  onClick?: () => void;
  isCollapsed?: boolean;
}

const NavLink3: React.FC<NavLink3Props> = ({ href, label, icon: Icon, onClick, isCollapsed }) => {
  return (
    <RouterNavLink
      to={href}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative overflow-hidden mb-1",
          isActive 
            ? "bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg shadow-violet-500/30" 
            : "text-slate-300 hover:bg-slate-800/50",
          isCollapsed && "justify-center px-2"
        )
      }
    >
      {({ isActive }) => (
        <>
          <Icon size={20} className={cn(
            "relative z-10 transition-all duration-300",
            isActive ? "drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" : "group-hover:scale-110"
          )} />
          {!isCollapsed && (
            <span className="relative z-10 font-medium text-sm">{label}</span>
          )}
        </>
      )}
    </RouterNavLink>
  );
};
