import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, AlertCircle, DollarSign, Activity, Zap } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Fleet Management Overview</p>
      </div>

      {/* 1. Key Metrics */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Key Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard icon={<Zap className="h-5 w-5" />} label="Available Equipment" value="12" color="text-blue-500" />
          <MetricCard icon={<Activity className="h-5 w-5" />} label="Active Rentals" value="8" color="text-green-500" />
          <MetricCard icon={<AlertCircle className="h-5 w-5" />} label="Maintenance Due" value="3" color="text-orange-500" />
          <MetricCard icon={<DollarSign className="h-5 w-5" />} label="Monthly Revenue" value="$45.2K" color="text-accent" />
        </div>
      </div>

      {/* 2. Revenue Analytics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Revenue Analytics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 border-b">
              <span className="text-sm">Total Revenue (YTD)</span>
              <span className="text-xl font-bold text-accent">$185.6K</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b">
              <span className="text-sm">Average Deal Value</span>
              <span className="text-xl font-bold">$3.2K</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Projected (EOY)</span>
              <span className="text-xl font-bold text-primary">$450K</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 3. Equipment Status */}
      <Card>
        <CardHeader>
          <CardTitle>Equipment Status Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <StatusBar label="In Service" value={75} color="bg-green-500" />
            <StatusBar label="Maintenance" value={15} color="bg-orange-500" />
            <StatusBar label="Available" value={10} color="bg-blue-500" />
          </div>
        </CardContent>
      </Card>

      {/* 4. Top Performing Equipment */}
      <Card>
        <CardHeader>
          <CardTitle>Top Performing Equipment</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <RankingItem rank={1} name="Excavator CAT 320" rentals="24 rentals" revenue="$18.5K" />
            <RankingItem rank={2} name="Forklift Toyota 8FG" rentals="18 rentals" revenue="$12.3K" />
            <RankingItem rank={3} name="Compressor Atlas" rentals="16 rentals" revenue="$9.8K" />
            <RankingItem rank={4} name="Crane Liebherr 300" rentals="12 rentals" revenue="$15.2K" />
            <RankingItem rank={5} name="Dump Truck Volvo" rentals="10 rentals" revenue="$8.6K" />
          </div>
        </CardContent>
      </Card>

      {/* 5. Maintenance Schedule */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Maintenance Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <MaintenanceItem equipment="Excavator CAT 320" date="Nov 12, 2025" type="Oil Change & Service" status="pending" />
            <MaintenanceItem equipment="Compressor Atlas" date="Nov 15, 2025" type="Filter Replacement" status="pending" />
            <MaintenanceItem equipment="Crane Liebherr 300" date="Nov 20, 2025" type="Safety Inspection" status="scheduled" />
            <MaintenanceItem equipment="Forklift Toyota 8FG" date="Nov 25, 2025" type="Hydraulic Check" status="scheduled" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

interface MetricCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ icon, label, value, color }) => (
  <Card>
    <CardContent className="pt-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-muted-foreground font-medium">{label}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <div className={`${color} opacity-70`}>{icon}</div>
      </div>
    </CardContent>
  </Card>
);

interface StatusBarProps {
  label: string;
  value: number;
  color: string;
}

const StatusBar: React.FC<StatusBarProps> = ({ label, value, color }) => (
  <div>
    <div className="flex justify-between mb-1 text-sm">
      <span>{label}</span>
      <span className="font-semibold">{value}%</span>
    </div>
    <div className="w-full bg-muted rounded-full h-2.5">
      <div className={`${color} h-2.5 rounded-full`} style={{ width: `${value}%` }} />
    </div>
  </div>
);

interface RankingItemProps {
  rank: number;
  name: string;
  rentals: string;
  revenue: string;
}

const RankingItem: React.FC<RankingItemProps> = ({ rank, name, rentals, revenue }) => (
  <div className="flex items-center gap-3 pb-3 border-b last:border-b-0">
    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm font-bold text-primary">
      {rank}
    </div>
    <div className="flex-1">
      <p className="font-medium">{name}</p>
      <p className="text-xs text-muted-foreground">{rentals}</p>
    </div>
    <span className="font-semibold text-accent">{revenue}</span>
  </div>
);

interface MaintenanceItemProps {
  equipment: string;
  date: string;
  type: string;
  status: 'pending' | 'scheduled';
}

const MaintenanceItem: React.FC<MaintenanceItemProps> = ({ equipment, date, type, status }) => (
  <div className="flex items-start justify-between pb-3 border-b last:border-b-0">
    <div className="flex-1">
      <p className="font-medium">{equipment}</p>
      <p className="text-sm text-muted-foreground">{type}</p>
    </div>
    <div className="text-right">
      <p className="text-sm font-medium">{date}</p>
      <span className={`text-xs font-semibold ${status === 'pending' ? 'text-orange-500' : 'text-green-500'}`}>
        {status === 'pending' ? '⚠️ Pending' : '✓ Scheduled'}
      </span>
    </div>
  </div>
);

export default Dashboard;
