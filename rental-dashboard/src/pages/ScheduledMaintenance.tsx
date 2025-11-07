import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Plus } from 'lucide-react';

const ScheduledMaintenance: React.FC = () => {
  return (
    <div className="space-y-6">
      <Breadcrumb
        items={[
          { label: 'Dashboard', href: '/' },
          { label: 'Maintenance', href: '/maintenance' },
          { label: 'Scheduled' }
        ]}
      />

      <div>
        <h1 className="text-3xl font-bold">Scheduled Maintenance</h1>
        <p className="text-muted-foreground mt-2">View upcoming maintenance tasks and schedule new ones</p>
      </div>
      
      <Card className="p-12 text-center">
        <div className="space-y-4">
          <div className="text-6xl opacity-20">🔧</div>
          <h2 className="text-xl font-semibold">No Scheduled Maintenance</h2>
          <p className="text-muted-foreground max-w-sm mx-auto">
            Schedule maintenance tasks for your equipment to keep it in optimal condition.
          </p>
          <Button className="mt-6 gap-2">
            <Plus size={18} />
            Schedule Maintenance
          </Button>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">📅 Maintenance Overview</h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center pb-2 border-b border-border">
            <span className="text-muted-foreground">Upcoming Tasks</span>
            <span className="font-semibold">0</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-border">
            <span className="text-muted-foreground">Overdue Tasks</span>
            <span className="font-semibold text-red-500">0</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-border">
            <span className="text-muted-foreground">This Month</span>
            <span className="font-semibold">0</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Next 30 Days</span>
            <span className="font-semibold">0</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ScheduledMaintenance;
