import React, { useState } from 'react';
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { ChevronRight, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SubmenuItem {
  to: string;
  label: string;
  icon: LucideIcon;
}

interface SubmenuNavLink2Props {
  label: string;
  icon: LucideIcon;
  submenuItems: SubmenuItem[];
  onClick?: () => void;
  isCollapsed?: boolean;
}

export const SubmenuNavLink2: React.FC<SubmenuNavLink2Props> = ({
  label,
  icon: Icon,
  submenuItems,
  onClick,
  isCollapsed
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  // Check if any submenu item is active
  const isParentActive = submenuItems.some(item => location.pathname === item.to);

  const toggleMenu = () => {
    if (isCollapsed) return;
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative group">
      <button
        onClick={toggleMenu}
        aria-expanded={isExpanded}
        className={cn(
          "w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-200 group-hover:bg-white/5",
          isParentActive ? "text-white bg-white/10" : "text-slate-400 hover:text-slate-100",
          isCollapsed && "justify-center px-2"
        )}
      >
        <div className="flex items-center gap-3">
          <Icon size={20} className={cn("transition-colors", isParentActive ? "text-indigo-400" : "text-slate-400 group-hover:text-indigo-300")} />
          {!isCollapsed && (
            <span className="font-medium text-sm">{label}</span>
          )}
        </div>
        {!isCollapsed && (
          <ChevronRight
            size={16}
            className={cn(
              "transition-transform duration-300 text-slate-500",
              isExpanded ? "rotate-90" : ""
            )}
          />
        )}
      </button>

      {/* Submenu Items */}
      <div 
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isExpanded && !isCollapsed ? "max-h-96 opacity-100 mt-1" : "max-h-0 opacity-0"
        )}
      >
        <div className="pl-10 pr-2 py-1 space-y-1">
          {submenuItems.map((item) => {
            const ItemIcon = item.icon;
            return (
              <RouterNavLink
                key={item.to}
                to={item.to}
                onClick={onClick}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200",
                    isActive
                      ? "bg-indigo-500/20 text-indigo-300"
                      : "text-slate-500 hover:text-slate-200 hover:bg-white/5"
                  )
                }
              >
                <ItemIcon size={16} />
                <span>{item.label}</span>
              </RouterNavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};
