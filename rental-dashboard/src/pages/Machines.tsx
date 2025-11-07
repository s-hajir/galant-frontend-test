import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Plus } from 'lucide-react';

const Machines: React.FC = () => {
  return (
    <div className="space-y-6">
      <Breadcrumb
        items={[
          { label: 'Dashboard', href: '/' },
          { label: 'Equipment', href: '/equipment' },
          { label: 'Machines' }
        ]}
      />

      <div>
        <h1 className="text-3xl font-bold">Machines</h1>
        <p className="text-muted-foreground mt-2">Manage your construction machine inventory</p>
      </div>
      
      <Card className="p-12 text-center">
        <div className="space-y-4">
          <div className="text-6xl opacity-20">🏗️</div>
          <h2 className="text-xl font-semibold">No Machines Yet</h2>
          <p className="text-muted-foreground max-w-sm mx-auto">
            Build your equipment fleet by adding construction machines. Track maintenance schedules, rental history, and operational costs.
          </p>
          <Button className="mt-6 gap-2">
            <Plus size={18} />
            Add First Machine
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Machines;
