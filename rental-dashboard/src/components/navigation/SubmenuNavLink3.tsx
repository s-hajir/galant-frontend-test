import React, { useState } from 'react';
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { ChevronDown, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SubmenuItem {
  to: string;
  label: string;
  icon: LucideIcon;
}

interface SubmenuNavLink3Props {
  label: string;
  icon: LucideIcon;
  submenuItems: SubmenuItem[];
  onClick?: () => void;
  isCollapsed?: boolean;
}

export const SubmenuNavLink3: React.FC<SubmenuNavLink3Props> = ({
  label,
  icon: Icon,
  submenuItems,
  onClick,
  isCollapsed
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  const isParentActive = submenuItems.some(item => location.pathname === item.to);

  const toggleMenu = () => {
    if (isCollapsed) return;
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mb-1">
      <button
        onClick={toggleMenu}
        aria-expanded={isExpanded}
        className={cn(
          "w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-200 group relative",
          isParentActive 
            ? "bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg shadow-violet-500/30" 
            : "text-slate-300 hover:bg-slate-800/50",
          isCollapsed && "justify-center px-2"
        )}
      >
        <div className="flex items-center gap-3">
          <Icon size={20} className={cn(
            "transition-all duration-300",
            isParentActive ? "drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" : "group-hover:scale-110"
          )} />
          {!isCollapsed && (
            <span className="font-medium text-sm">{label}</span>
          )}
        </div>
        {!isCollapsed && (
          <ChevronDown
            size={16}
            className={cn(
              "transition-all duration-300",
              isExpanded ? "rotate-180" : "",
              isParentActive ? "text-white" : "text-slate-500"
            )}
          />
        )}
      </button>

      {/* Submenu Items with staggered animation effect */}
      <div 
        className={cn(
          "overflow-hidden transition-all duration-300 ease-out",
          isExpanded && !isCollapsed ? "max-h-96 opacity-100 mt-1" : "max-h-0 opacity-0"
        )}
      >
        <div className="pl-11 pr-2 py-1 space-y-0.5">
          {submenuItems.map((item, index) => {
            const ItemIcon = item.icon;
            return (
              <RouterNavLink
                key={item.to}
                to={item.to}
                onClick={onClick}
                style={{
                  transitionDelay: isExpanded ? `${index * 30}ms` : '0ms'
                }}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-all duration-200 relative overflow-hidden group/item",
                    isActive
                      ? "bg-violet-500/20 text-violet-300 font-medium"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/30"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-400 to-purple-500" />
                    )}
                    <ItemIcon size={16} className="relative z-10" />
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
