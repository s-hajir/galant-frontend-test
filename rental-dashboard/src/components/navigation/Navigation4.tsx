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
  Flame,
  Zap,
  Star
} from 'lucide-react';
import { SubmenuNavLink4, type SubmenuItem } from './SubmenuNavLink4';
import { cn } from '@/lib/utils';

interface Navigation4Props {
  isOpen: boolean;
  onClose: () => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export const Navigation4: React.FC<Navigation4Props> = ({ isOpen, onClose, isCollapsed, onToggleCollapse }) => {
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
        "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        isCollapsed ? "lg:w-[80px]" : "lg:w-[300px]",
        "w-[300px]"
      )}
    >
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-500/20 via-transparent to-cyan-500/20 animate-pulse" 
             style={{ animationDuration: '8s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.15),transparent_50%)]" />
      </div>
      
      <div className="relative flex flex-col h-full">
        {/* Header with fluid glass effect */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/10 backdrop-blur-xl bg-white/5">
          <div className={cn(
            "flex items-center gap-3 overflow-hidden transition-all duration-300",
            isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
          )}>
            <div className="relative">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 flex items-center justify-center shadow-2xl shadow-amber-500/50 animate-pulse"
                   style={{ animationDuration: '3s' }}>
                <Flame className="text-white" size={22} fill="white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full border-2 border-slate-900 flex items-center justify-center">
                <Zap size={10} className="text-white" fill="white" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-black bg-gradient-to-r from-amber-400 via-orange-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
                Galant
              </h1>
              <p className="text-[9px] text-amber-500/80 font-bold tracking-widest uppercase">Premium Edition</p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="lg:hidden p-2 text-slate-400 hover:bg-white/10 rounded-xl transition-all hover:text-amber-400"
          >
            <X size={20} />
          </button>

          <button
            onClick={onToggleCollapse}
            className={cn(
              "hidden lg:flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-amber-500/20 to-cyan-500/20 hover:from-amber-500/30 hover:to-cyan-500/30 text-amber-400 transition-all duration-300 border border-amber-500/30",
              isCollapsed && "mx-auto rotate-180"
            )}
          >
            <ChevronLeft size={16} />
          </button>
        </div>

        {/* Premium badge */}
        {!isCollapsed && (
          <div className="px-6 py-4">
            <div className="relative p-3 rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-cyan-500/10 border border-amber-500/20 backdrop-blur-sm overflow-hidden group cursor-pointer hover:border-amber-500/40 transition-all">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg shadow-amber-500/30">
                  <Star size={16} className="text-white" fill="white" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-amber-400">Pro Member</p>
                  <p className="text-[10px] text-slate-400">Unlimited access</p>
                </div>
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </div>
          </div>
        )}

        {/* Navigation Items with animated list */}
        <nav className="flex-1 overflow-y-auto overflow-x-hidden px-4 py-2 space-y-1 scrollbar-thin scrollbar-thumb-amber-500/30 scrollbar-track-transparent">
          <NavLink4 href="/" label="Dashboard" icon={Home} onClick={onClose} isCollapsed={isCollapsed} index={0} />
          <SubmenuNavLink4 label="Rentals" icon={Building} submenuItems={rentalsMenu} onClick={onClose} isCollapsed={isCollapsed} index={1} />
          <SubmenuNavLink4 label="Equipment" icon={Truck} submenuItems={equipmentMenu} onClick={onClose} isCollapsed={isCollapsed} index={2} />
          <SubmenuNavLink4 label="Maintenance" icon={Wrench} submenuItems={maintenanceMenu} onClick={onClose} isCollapsed={isCollapsed} index={3} />
          <SubmenuNavLink4 label="Billing" icon={DollarSign} submenuItems={billingMenu} onClick={onClose} isCollapsed={isCollapsed} index={4} />
          <NavLink4 href="/customers" label="Customers" icon={Users} onClick={onClose} isCollapsed={isCollapsed} index={5} />
          <SubmenuNavLink4 label="Reports" icon={FileText} submenuItems={reportsMenu} onClick={onClose} isCollapsed={isCollapsed} index={6} />
          <SubmenuNavLink4 label="Analytics" icon={BarChart3} submenuItems={analyticsMenu} onClick={onClose} isCollapsed={isCollapsed} index={7} />
          <SubmenuNavLink4 label="Notifications" icon={Bell} submenuItems={notificationsMenu} onClick={onClose} isCollapsed={isCollapsed} index={8} />
          <SubmenuNavLink4 label="Settings" icon={Settings} submenuItems={settingsMenu} onClick={onClose} isCollapsed={isCollapsed} index={9} />
        </nav>

        {/* User Profile with fluid glass */}
        <div className="p-4 border-t border-white/10 backdrop-blur-xl bg-gradient-to-r from-white/5 to-transparent">
          <div className={cn(
            "flex items-center gap-3 p-3 rounded-2xl transition-all cursor-pointer group relative overflow-hidden",
            "hover:bg-gradient-to-r hover:from-amber-500/10 hover:to-cyan-500/10 border border-transparent hover:border-amber-500/30",
            isCollapsed ? "justify-center" : ""
          )}>
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-cyan-500/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
            
            <div className="relative flex-shrink-0">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-cyan-500 flex items-center justify-center text-white font-black shadow-xl ring-2 ring-amber-500/30 text-lg">
                JD
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-br from-emerald-400 to-emerald-600 border-2 border-slate-900 rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
              </div>
            </div>
            
            <div className={cn(
              "flex-1 overflow-hidden transition-all duration-300 relative",
              isCollapsed ? "w-0 opacity-0 hidden" : "w-auto opacity-100"
            )}>
              <p className="text-sm font-bold text-white truncate">John Doe</p>
              <p className="text-xs text-amber-400 truncate font-medium">Fleet Director</p>
            </div>
            
            {!isCollapsed && (
              <div className="w-2 h-2 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

interface NavLink4Props {
  href: string;
  label: string;
  icon: React.ElementType;
  onClick?: () => void;
  isCollapsed?: boolean;
  index?: number;
}

const NavLink4: React.FC<NavLink4Props> = ({ href, label, icon: Icon, onClick, isCollapsed, index = 0 }) => {
  return (
    <RouterNavLink
      to={href}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 group relative overflow-hidden mb-2 animate-in fade-in slide-in-from-left-4",
          isActive 
            ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xl shadow-amber-500/40" 
            : "text-slate-300 hover:bg-white/5 hover:text-white",
          isCollapsed && "justify-center px-2"
        )
      }
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {({ isActive }) => (
        <>
          {!isActive && (
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          )}
          
          <div className={cn(
            "p-2 rounded-xl transition-all duration-300 relative z-10",
            isActive 
              ? "bg-white/20 backdrop-blur-sm" 
              : "bg-transparent group-hover:bg-white/10"
          )}>
            <Icon size={20} className={cn(
              "transition-all duration-300",
              isActive && "drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]",
              !isActive && "group-hover:rotate-12 group-hover:scale-110"
            )} />
          </div>
          {!isCollapsed && (
            <span className="relative z-10 font-semibold text-sm tracking-wide">{label}</span>
          )}
        </>
      )}
    </RouterNavLink>
  );
};
