import React from 'react';
import { Card } from '@/components/ui/card';
import { Breadcrumb } from '@/components/common/Breadcrumb';

const RentalHistory: React.FC = () => {
  return (
    <div className="space-y-6">
      <Breadcrumb
        items={[
          { label: 'Dashboard', href: '/' },
          { label: 'Rentals', href: '/rentals' },
          { label: 'Rental History' }
        ]}
      />

      <div>
        <h1 className="text-3xl font-bold">Rental History</h1>
        <p className="text-muted-foreground mt-2">View past rental transactions and completed rentals</p>
      </div>
      
      <Card className="p-12 text-center">
        <div className="space-y-4">
          <div className="text-6xl opacity-20">📜</div>
          <h2 className="text-xl font-semibold">No Rental History</h2>
          <p className="text-muted-foreground max-w-sm mx-auto">
            Completed rentals will appear here. Start by creating an active rental.
          </p>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">💹 Revenue Summary</h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center pb-2 border-b border-border">
            <span className="text-muted-foreground">Total Rentals Completed</span>
            <span className="font-semibold">0</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-border">
            <span className="text-muted-foreground">Total Revenue</span>
            <span className="font-semibold">$0</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-border">
            <span className="text-muted-foreground">Average Rental Duration</span>
            <span className="font-semibold">-</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Most Rented Equipment</span>
            <span className="font-semibold">-</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default RentalHistory;
