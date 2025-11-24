import React, { useState } from 'react';
import { Navigation3 } from '@/components/navigation/Navigation3';
import { Menu, Bell, Search, Plus, TrendingUp, Users, DollarSign, Package } from 'lucide-react';

const DemoPage3 = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200 overflow-hidden">
      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Navigation 3 */}
      <Navigation3 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* Floating animated lines background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[15%] left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/15 to-transparent animate-pulse" 
               style={{ animationDuration: '4s' }} />
          <div className="absolute top-[35%] left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/15 to-transparent animate-pulse" 
               style={{ animationDuration: '5s', animationDelay: '1s' }} />
          <div className="absolute top-[55%] left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/15 to-transparent animate-pulse" 
               style={{ animationDuration: '6s', animationDelay: '2s' }} />
          <div className="absolute top-[75%] left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent animate-pulse" 
               style={{ animationDuration: '5.5s', animationDelay: '0.5s' }} />
          
          {/* Floating liquid glass orbs */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl animate-pulse" 
               style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" 
               style={{ animationDuration: '9s', animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-pink-500/5 rounded-full blur-3xl animate-pulse" 
               style={{ animationDuration: '7s', animationDelay: '1s' }} />
        </div>
        
        {/* Gradient overlay for depth with liquid glass */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 via-transparent to-purple-600/5 pointer-events-none backdrop-blur-[0.5px]" />
        
        {/* Top Header */}
        <header className="relative h-16 px-6 flex items-center justify-between border-b border-slate-800/50 bg-slate-900/50 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <Menu size={24} />
            </button>
            <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-800/50 border border-slate-700/50 focus-within:border-violet-500/50 transition-all w-96 backdrop-blur-sm">
               <Search size={18} className="text-slate-500" />
               <input 
                 type="text" 
                 placeholder="Search rentals, equipment, customers..." 
                 className="bg-transparent border-none outline-none text-sm w-full placeholder:text-slate-600"
               />
               <kbd className="px-2 py-0.5 text-[10px] font-semibold text-slate-400 bg-slate-700/50 rounded border border-slate-600/50">⌘K</kbd>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 relative hover:bg-slate-800 rounded-lg transition-colors group">
              <Bell size={20} className="text-slate-400 group-hover:text-violet-400 transition-colors" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-violet-500 rounded-full border-2 border-slate-900 animate-pulse" />
            </button>
            <div className="h-6 w-px bg-slate-700" />
            <div className="flex items-center gap-3 px-3 py-1.5 rounded-lg hover:bg-slate-800/50 transition-colors cursor-pointer">
               <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 border-2 border-violet-500/30" />
               <div className="hidden md:block">
                 <p className="text-sm font-medium text-white">Alex Manager</p>
                 <p className="text-xs text-slate-500">Admin</p>
               </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="relative flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            
            {/* Welcome Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-violet-200 to-purple-200 bg-clip-text text-transparent mb-2">
                  Dashboard Overview
                </h1>
                <p className="text-slate-400">Track your fleet performance and manage operations</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-4 py-2.5 rounded-xl bg-slate-800/50 hover:bg-slate-700 border border-slate-700/50 text-sm font-medium transition-all flex items-center gap-2">
                  <TrendingUp size={16} />
                  View Reports
                </button>
                <button className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white text-sm font-medium shadow-lg shadow-violet-500/30 transition-all flex items-center gap-2">
                  <Plus size={16} />
                  New Rental
                </button>
              </div>
            </div>

            {/* Stats Grid with liquid glass effects */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { 
                  label: 'Total Revenue', 
                  value: '$124,500', 
                  change: '+12.5%', 
                  icon: DollarSign,
                  gradient: 'from-emerald-500/20 to-teal-500/20',
                  border: 'border-emerald-500/30',
                  iconColor: 'text-emerald-400'
                },
                { 
                  label: 'Active Rentals', 
                  value: '45', 
                  change: '+4.2%', 
                  icon: Package,
                  gradient: 'from-violet-500/20 to-purple-500/20',
                  border: 'border-violet-500/30',
                  iconColor: 'text-violet-400'
                },
                { 
                  label: 'Equipment Fleet', 
                  value: '128', 
                  change: '+2.1%', 
                  icon: Package,
                  gradient: 'from-blue-500/20 to-cyan-500/20',
                  border: 'border-blue-500/30',
                  iconColor: 'text-blue-400'
                },
                { 
                  label: 'Total Customers', 
                  value: '1,240', 
                  change: '+8.4%', 
                  icon: Users,
                  gradient: 'from-pink-500/20 to-rose-500/20',
                  border: 'border-pink-500/30',
                  iconColor: 'text-pink-400'
                },
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className={`relative p-5 rounded-2xl bg-gradient-to-br ${stat.gradient} border ${stat.border} backdrop-blur-md hover:scale-[1.02] transition-all group cursor-pointer overflow-hidden`}
                >
                  {/* Liquid glass shimmer effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`p-2.5 rounded-xl bg-slate-900/50 backdrop-blur-sm ${stat.iconColor} group-hover:scale-110 transition-transform`}>
                        <stat.icon size={20} />
                      </div>
                      <span className="text-xs font-semibold px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 backdrop-blur-sm">
                        {stat.change}
                      </span>
                    </div>
                    <h3 className="text-slate-400 text-sm font-medium mb-1">{stat.label}</h3>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chart Section with gradient borders */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2 p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm h-96 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Revenue Analytics</h3>
                    <p className="text-sm text-slate-400">Monthly performance overview</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 text-xs rounded-lg bg-violet-500/20 text-violet-300 border border-violet-500/30">
                      Month
                    </button>
                    <button className="px-3 py-1.5 text-xs rounded-lg bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:bg-slate-700 transition-colors">
                      Year
                    </button>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center text-slate-500 border-2 border-dashed border-slate-800 rounded-xl">
                  <div className="text-center">
                    <TrendingUp size={48} className="mx-auto mb-2 text-slate-700" />
                    <p>Chart Placeholder</p>
                    <span className="text-xs opacity-50">Revenue trend visualization</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 backdrop-blur-sm h-96 flex flex-col">
                <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
                <div className="space-y-3 flex-1 overflow-auto">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/50 border border-slate-800/50 hover:border-violet-500/30 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-violet-500 mt-1.5" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-white font-medium truncate">New rental created</p>
                        <p className="text-xs text-slate-500">2 hours ago</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default DemoPage3;
