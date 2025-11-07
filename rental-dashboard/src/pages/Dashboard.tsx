import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle, Wrench, Truck } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Fleet Management Overview</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard title="Available Equipment" value="12" />
        <DashboardCard title="Active Rentals" value="8" />
        <DashboardCard title="Maintenance Due" value="3" />
        <DashboardCard title="Revenue (Month)" value="$45.2K" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> New Rental
          </Button>
          <Button variant="secondary">
            <Truck className="mr-2 h-4 w-4" /> Add Equipment
          </Button>
          <Button variant="secondary">
            <Wrench className="mr-2 h-4 w-4" /> Schedule Maintenance
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

interface DashboardCardProps {
  title: string;
  value: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
};

export default Dashboard;
