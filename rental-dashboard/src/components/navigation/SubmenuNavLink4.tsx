import React, { useState } from 'react';
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { ChevronDown, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SubmenuItem {
  to: string;
  label: string;
  icon: LucideIcon;
}

interface SubmenuNavLink4Props {
  label: string;
  icon: LucideIcon;
  submenuItems: SubmenuItem[];
  onClick?: () => void;
  isCollapsed?: boolean;
  index?: number;
}

export const SubmenuNavLink4: React.FC<SubmenuNavLink4Props> = ({
  label,
  icon: Icon,
  submenuItems,
  onClick,
  isCollapsed,
  index = 0
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  const isParentActive = submenuItems.some(item => location.pathname === item.to);

  const toggleMenu = () => {
    if (isCollapsed) return;
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className="mb-2 animate-in fade-in slide-in-from-left-4 duration-300"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <button
        onClick={toggleMenu}
        aria-expanded={isExpanded}
        className={cn(
          "w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 group relative overflow-hidden",
          isParentActive 
            ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xl shadow-amber-500/40" 
            : "text-slate-300 hover:bg-white/5 hover:text-white",
          isCollapsed && "justify-center px-2"
        )}
      >
        {/* Animated background on hover */}
        {!isParentActive && (
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        )}
        
        <div className="flex items-center gap-3 relative z-10">
          <div className={cn(
            "p-2 rounded-xl transition-all duration-300",
            isParentActive 
              ? "bg-white/20 backdrop-blur-sm" 
              : "bg-transparent group-hover:bg-white/10"
          )}>
            <Icon size={20} className={cn(
              "transition-transform duration-300",
              isParentActive && "drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]",
              !isParentActive && "group-hover:rotate-12 group-hover:scale-110"
            )} />
          </div>
          {!isCollapsed && (
            <span className="font-semibold text-sm tracking-wide">{label}</span>
          )}
        </div>
        {!isCollapsed && (
          <ChevronDown
            size={18}
            className={cn(
              "transition-all duration-500 relative z-10",
              isExpanded ? "rotate-180 text-amber-400" : "text-slate-500"
            )}
          />
        )}
      </button>

      {/* Animated submenu with stagger */}
      <div 
        className={cn(
          "overflow-hidden transition-all duration-500 ease-out",
          isExpanded && !isCollapsed ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
        )}
      >
        <div className="pl-6 pr-2 space-y-1">
          {submenuItems.map((item, idx) => {
            const ItemIcon = item.icon;
            return (
              <RouterNavLink
                key={item.to}
                to={item.to}
                onClick={onClick}
                style={{
                  transitionDelay: isExpanded ? `${idx * 40}ms` : '0ms'
                }}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all duration-300 relative group/item",
                    isActive
                      ? "bg-gradient-to-r from-cyan-500/20 to-amber-500/20 text-amber-300 font-medium border border-amber-500/30"
                      : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {/* Pill indicator for active state */}
                    {isActive && (
                      <div className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-4 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full animate-pulse" />
                    )}
                    <ItemIcon size={16} className={cn(
                      "relative z-10 transition-transform duration-300",
                      isActive ? "text-amber-400" : "group-hover/item:scale-110"
                    )} />
                    <span className="relative z-10">{item.label}</span>
                  </>
                )}
              </RouterNavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};
