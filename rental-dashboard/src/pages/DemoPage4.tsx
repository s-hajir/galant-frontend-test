import React, { useState } from 'react';
import { Navigation4 } from '@/components/navigation/Navigation4';
import { Menu, Bell, Search, Plus, TrendingUp, Users, DollarSign, Package, Zap, Flame, Star, ArrowUpRight, Activity, Clock } from 'lucide-react';

const DemoPage4 = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200 overflow-hidden">
      {/* Animated background mesh */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(251,146,60,0.15),transparent_40%)] animate-pulse" 
             style={{ animationDuration: '6s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(6,182,212,0.15),transparent_40%)] animate-pulse" 
             style={{ animationDuration: '8s', animationDelay: '1s' }} />
      </div>

      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Navigation 4 */}
      <Navigation4 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden relative z-10">
        {/* Top Header with fluid glass */}
        <header className="relative h-20 px-8 flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-white/5 to-transparent backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2.5 hover:bg-white/10 rounded-xl transition-all hover:text-amber-400"
            >
              <Menu size={24} />
            </button>
            <div className="hidden md:flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 focus-within:border-amber-500/50 transition-all w-96 backdrop-blur-md">
               <Search size={18} className="text-slate-500" />
               <input 
                 type="text" 
                 placeholder="Search anything..." 
                 className="bg-transparent border-none outline-none text-sm w-full placeholder:text-slate-600 font-medium"
               />
               <kbd className="px-2.5 py-1 text-[10px] font-bold text-amber-400 bg-amber-500/10 rounded-lg border border-amber-500/30">⌘K</kbd>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2.5 relative hover:bg-white/10 rounded-xl transition-all group">
              <Bell size={20} className="text-slate-400 group-hover:text-amber-400 transition-colors" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full border-2 border-slate-900 animate-pulse" />
            </button>
            <div className="h-8 w-px bg-white/10" />
            <div className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-white/5 transition-all cursor-pointer border border-transparent hover:border-amber-500/30">
               <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 border-2 border-amber-500/30 shadow-lg shadow-amber-500/20" />
               <div className="hidden md:block">
                 <p className="text-sm font-bold text-white">John Doe</p>
                 <p className="text-xs text-amber-400 font-medium">Fleet Director</p>
               </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content with Magic Bento Grid */}
        <main className="relative flex-1 overflow-auto p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            
            {/* Welcome Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-4xl font-black bg-gradient-to-r from-amber-400 via-orange-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  Dashboard
                </h1>
                <p className="text-slate-400 font-medium">Manage your fleet with premium tools</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-5 py-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-500/30 text-sm font-bold transition-all flex items-center gap-2 group">
                  <TrendingUp size={16} className="group-hover:text-amber-400 transition-colors" />
                  Analytics
                </button>
                <button className="px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white text-sm font-bold shadow-2xl shadow-amber-500/40 transition-all flex items-center gap-2 group">
                  <Plus size={16} className="group-hover:rotate-90 transition-transform" />
                  New Rental
                </button>
              </div>
            </div>

            {/* Magic Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px]">
              
              {/* Large Featured Card - Spans 2 columns */}
              <div className="lg:col-span-2 lg:row-span-2 relative p-6 rounded-3xl bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-amber-600/20 border border-amber-500/30 backdrop-blur-md overflow-hidden group hover:border-amber-500/50 transition-all cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-4 right-4 p-3 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-xl shadow-amber-500/30">
                  <Flame size={24} className="text-white" fill="white" />
                </div>
                <div className="relative h-full flex flex-col justify-between">
                  <div>
                    <p className="text-sm font-bold text-amber-400 mb-2">TOTAL REVENUE</p>
                    <h2 className="text-5xl font-black text-white mb-2">$124.5k</h2>
                    <p className="text-sm text-slate-400 font-medium">+12.5% from last month</p>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                    <ArrowUpRight size={16} />
                    <span>Trending up</span>
                  </div>
                </div>
              </div>

              {/* Stat Card 1 */}
              <div className="relative p-5 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 backdrop-blur-md overflow-hidden group hover:border-cyan-500/50 transition-all cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="p-2.5 rounded-xl bg-cyan-500/20 w-fit mb-3">
                    <Package size={20} className="text-cyan-400" />
                  </div>
                  <p className="text-xs font-bold text-cyan-400 mb-1">ACTIVE RENTALS</p>
                  <h3 className="text-3xl font-black text-white">45</h3>
                </div>
              </div>

              {/* Stat Card 2 */}
              <div className="relative p-5 rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-md overflow-hidden group hover:border-purple-500/50 transition-all cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="p-2.5 rounded-xl bg-purple-500/20 w-fit mb-3">
                    <Users size={20} className="text-purple-400" />
                  </div>
                  <p className="text-xs font-bold text-purple-400 mb-1">CUSTOMERS</p>
                  <h3 className="text-3xl font-black text-white">1.2k</h3>
                </div>
              </div>

              {/* Activity Card - Spans 2 rows */}
              <div className="lg:row-span-2 relative p-6 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-md overflow-hidden">
                <h3 className="text-lg font-black text-white mb-4 flex items-center gap-2">
                  <Activity size={20} className="text-amber-400" />
                  Recent Activity
                </h3>
                <div className="space-y-3">
                  {[
                    { label: 'New rental created', time: '2m ago', color: 'from-amber-400 to-orange-500' },
                    { label: 'Payment received', time: '15m ago', color: 'from-emerald-400 to-emerald-600' },
                    { label: 'Equipment returned', time: '1h ago', color: 'from-cyan-400 to-cyan-600' },
                    { label: 'Maintenance scheduled', time: '2h ago', color: 'from-purple-400 to-purple-600' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-amber-500/30 transition-all group cursor-pointer">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${item.color} mt-1.5 animate-pulse`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-white font-semibold truncate">{item.label}</p>
                        <p className="text-xs text-slate-500 font-medium">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="relative p-5 rounded-3xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 backdrop-blur-md overflow-hidden group hover:border-emerald-500/50 transition-all cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="p-2.5 rounded-xl bg-emerald-500/20 w-fit mb-3">
                    <DollarSign size={20} className="text-emerald-400" />
                  </div>
                  <p className="text-xs font-bold text-emerald-400 mb-1">PROFIT</p>
                  <h3 className="text-3xl font-black text-white">$45k</h3>
                </div>
              </div>

              {/* Premium Feature Card */}
              <div className="lg:col-span-2 relative p-6 rounded-3xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-cyan-500/10 border border-amber-500/20 backdrop-blur-md overflow-hidden group hover:border-amber-500/40 transition-all cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-2xl shadow-amber-500/40">
                      <Star size={28} className="text-white" fill="white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-white mb-1">Premium Analytics</h3>
                      <p className="text-sm text-slate-400 font-medium">Advanced insights & reporting</p>
                    </div>
                  </div>
                  <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-sm shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transition-all flex items-center gap-2 group/btn">
                    Explore
                    <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Time Card */}
              <div className="relative p-5 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-blue-500/20 border border-indigo-500/30 backdrop-blur-md overflow-hidden group hover:border-indigo-500/50 transition-all cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="p-2.5 rounded-xl bg-indigo-500/20 w-fit mb-3">
                    <Clock size={20} className="text-indigo-400" />
                  </div>
                  <p className="text-xs font-bold text-indigo-400 mb-1">AVG. RENTAL</p>
                  <h3 className="text-3xl font-black text-white">7.2d</h3>
                </div>
              </div>

            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default DemoPage4;
