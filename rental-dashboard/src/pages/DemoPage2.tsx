import React, { useState } from 'react';
import { Navigation2 } from '@/components/navigation/Navigation2';
import { Menu, Bell, Search, Calendar } from 'lucide-react';

const DemoPage2 = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-[#09090b] text-slate-200 overflow-hidden font-sans">
      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* New Navigation */}
      <Navigation2 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden relative z-0">
        {/* Top Header */}
        <header className="h-20 px-8 flex items-center justify-between border-b border-white/5 bg-[#09090b]/50 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-white/5 rounded-lg transition-colors"
            >
              <Menu size={24} />
            </button>
            <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/5 focus-within:border-indigo-500/50 transition-colors w-96">
               <Search size={18} className="text-slate-500" />
               <input 
                 type="text" 
                 placeholder="Search anything..." 
                 className="bg-transparent border-none outline-none text-sm w-full placeholder:text-slate-600"
               />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 relative hover:bg-white/5 rounded-full transition-colors">
              <Bell size={20} className="text-slate-400" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-indigo-500 rounded-full border-2 border-[#09090b]"></span>
            </button>
            <div className="h-8 w-px bg-white/10"></div>
            <div className="flex items-center gap-3">
               <div className="text-right hidden md:block">
                 <p className="text-sm font-medium text-white">John Doe</p>
                 <p className="text-xs text-slate-500">Admin</p>
               </div>
               <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border-2 border-white/10"></div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-auto p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            
            {/* Welcome Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
                <p className="text-slate-400">Welcome back, here's what's happening today.</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-medium transition-colors">
                  Export Report
                </button>
                <button className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium shadow-lg shadow-indigo-500/25 transition-all">
                  + New Rental
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Total Revenue', value: '$124,500', change: '+12.5%', trend: 'up' },
                { label: 'Active Rentals', value: '45', change: '+4.2%', trend: 'up' },
                { label: 'Pending Requests', value: '12', change: '-2.1%', trend: 'down' },
                { label: 'Total Customers', value: '1,240', change: '+8.4%', trend: 'up' },
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-3xl bg-[#0f1117] border border-white/5 hover:border-white/10 transition-colors group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                      <Calendar size={20} />
                    </div>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${stat.trend === 'up' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="text-slate-400 text-sm font-medium mb-1">{stat.label}</h3>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Chart Section Placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 p-6 rounded-3xl bg-[#0f1117] border border-white/5 h-96 flex flex-col justify-center items-center text-slate-500">
                <p>Revenue Analytics Chart</p>
                <span className="text-xs opacity-50">(Placeholder)</span>
              </div>
              <div className="p-6 rounded-3xl bg-[#0f1117] border border-white/5 h-96 flex flex-col justify-center items-center text-slate-500">
                <p>Recent Activity</p>
                <span className="text-xs opacity-50">(Placeholder)</span>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default DemoPage2;
