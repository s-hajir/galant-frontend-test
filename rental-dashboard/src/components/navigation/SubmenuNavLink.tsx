import React, { useState } from 'react';
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { ChevronDown, type LucideIcon } from 'lucide-react';

export interface SubmenuItem {
  to: string;
  label: string;
  icon: LucideIcon;
}

interface SubmenuNavLinkProps {
  label: string;
  icon: LucideIcon;
  submenuItems: SubmenuItem[];
  onClick?: () => void;
  isCollapsed?: boolean;
}

export const SubmenuNavLink: React.FC<SubmenuNavLinkProps> = ({
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
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <button
        onClick={toggleMenu}
        aria-expanded={isExpanded}
        aria-controls={`submenu-${label}`}
        title={isCollapsed ? label : undefined}
        className={`w-full flex items-center justify-between px-4 py-2 rounded-lg transition-colors ${
          isParentActive
            ? 'bg-primary/40 text-primary-foreground'
            : 'text-slate-300 hover:bg-slate-800 hover:text-white'
        } ${isCollapsed ? 'lg:justify-center lg:px-2' : ''}`}
      >
        <div className={`flex items-center space-x-3 ${isCollapsed ? 'lg:space-x-0' : ''}`}>
          <Icon size={20} />
          <span className={`transition-opacity duration-300 ${isCollapsed ? 'lg:hidden' : ''}`}>{label}</span>
        </div>
        <ChevronDown
          size={18}
          className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''} ${isCollapsed ? 'lg:hidden' : ''}`}
        />
      </button>
      {isExpanded && !isCollapsed && (
        <div className="ml-4 mt-2 space-y-1 border-l-2 pl-4 animate-in fade-in duration-200" style={{ borderColor: 'hsl(var(--sidebar-border))' }}>
          {submenuItems.map((item) => {
            const ItemIcon = item.icon;
            return (
              <RouterNavLink
                key={item.to}
                to={item.to}
                onClick={onClick}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors text-sm border-l-3 pl-3 ${
                    isActive
                      ? 'bg-accent/80 text-accent-foreground border-l-accent'
                      : 'border-l-transparent text-slate-400 hover:bg-slate-800 hover:text-white'
                  }`
                }
              >
                <ItemIcon size={16} />
                <span>{item.label}</span>
              </RouterNavLink>
            );
          })}
        </div>
      )}
    </div>
  );
};
