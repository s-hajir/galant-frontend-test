import React from 'react';
import { Card } from '@/components/ui/card';
import { Breadcrumb } from '@/components/common/Breadcrumb';

const MaintenanceHistory: React.FC = () => {
  return (
    <div className="space-y-6">
      <Breadcrumb
        items={[
          { label: 'Dashboard', href: '/' },
          { label: 'Maintenance', href: '/maintenance' },
          { label: 'History' }
        ]}
      />

      <div>
        <h1 className="text-3xl font-bold">Maintenance History</h1>
        <p className="text-muted-foreground mt-2">View completed maintenance tasks and service records</p>
      </div>
      
      <Card className="p-12 text-center">
        <div className="space-y-4">
          <div className="text-6xl opacity-20">📝</div>
          <h2 className="text-xl font-semibold">No Maintenance Records</h2>
          <p className="text-muted-foreground max-w-sm mx-auto">
            Completed maintenance tasks will appear here once you start scheduling and completing maintenance.
          </p>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">📊 Maintenance Costs</h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center pb-2 border-b border-border">
            <span className="text-muted-foreground">Total Tasks Completed</span>
            <span className="font-semibold">0</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-border">
            <span className="text-muted-foreground">Total Cost</span>
            <span className="font-semibold">$0</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-border">
            <span className="text-muted-foreground">Average Cost per Task</span>
            <span className="font-semibold">$0</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Most Expensive Equipment to Maintain</span>
            <span className="font-semibold">-</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MaintenanceHistory;
