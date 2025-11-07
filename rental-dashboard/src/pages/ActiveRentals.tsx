import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Plus } from 'lucide-react';

const ActiveRentals: React.FC = () => {
  return (
    <div className="space-y-6">
      <Breadcrumb
        items={[
          { label: 'Dashboard', href: '/' },
          { label: 'Rentals', href: '/rentals' },
          { label: 'Active Rentals' }
        ]}
      />

      <div>
        <h1 className="text-3xl font-bold">Active Rentals</h1>
        <p className="text-muted-foreground mt-2">View and manage currently active equipment rentals</p>
      </div>
      
      <Card className="p-12 text-center">
        <div className="space-y-4">
          <div className="text-6xl opacity-20">📋</div>
          <h2 className="text-xl font-semibold">No Active Rentals</h2>
          <p className="text-muted-foreground max-w-sm mx-auto">
            Currently there are no active rentals. Create a new rental to get started.
          </p>
          <Button className="mt-6 gap-2">
            <Plus size={18} />
            Create New Rental
          </Button>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">📊 Quick Stats</h3>
        <div className="grid grid-cols-3 gap-4 text-center text-sm">
          <div className="p-3 bg-muted rounded-lg">
            <p className="text-2xl font-bold text-primary">0</p>
            <p className="text-muted-foreground">Active Rentals</p>
          </div>
          <div className="p-3 bg-muted rounded-lg">
            <p className="text-2xl font-bold text-accent">$0</p>
            <p className="text-muted-foreground">Daily Revenue</p>
          </div>
          <div className="p-3 bg-muted rounded-lg">
            <p className="text-2xl font-bold">0</p>
            <p className="text-muted-foreground">Due Today</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ActiveRentals;
