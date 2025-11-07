import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Plus } from 'lucide-react';

const Vehicles: React.FC = () => {
  return (
    <div className="space-y-6">
      <Breadcrumb
        items={[
          { label: 'Dashboard', href: '/' },
          { label: 'Equipment', href: '/equipment' },
          { label: 'Vehicles' }
        ]}
      />

      <div>
        <h1 className="text-3xl font-bold">Vehicles</h1>
        <p className="text-muted-foreground mt-2">Manage your vehicle inventory</p>
      </div>
      
      <Card className="p-12 text-center">
        <div className="space-y-4">
          <div className="text-6xl opacity-20">🚗</div>
          <h2 className="text-xl font-semibold">No Vehicles Yet</h2>
          <p className="text-muted-foreground max-w-sm mx-auto">
            Start building your vehicle inventory by adding your first vehicle. Track maintenance, rentals, and usage in one place.
          </p>
          <Button className="mt-6 gap-2">
            <Plus size={18} />
            Add First Vehicle
          </Button>
        </div>
      </Card>

      <div className="space-y-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-3">📋 Vehicle Management Features</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Track vehicle details (make, model, year, VIN)</li>
            <li>• Monitor fuel efficiency and consumption</li>
            <li>• Schedule regular maintenance tasks</li>
            <li>• Track repair history and costs</li>
            <li>• Manage insurance and registration</li>
            <li>• View rental history and availability</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-3">🔧 Maintenance Tracking</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Keep your fleet in top condition with automated maintenance reminders and cost tracking.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>✓ Oil changes and filter replacements</li>
            <li>✓ Tire rotations and replacements</li>
            <li>✓ Brake service and inspections</li>
            <li>✓ Battery maintenance</li>
            <li>✓ Transmission service</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-3">💰 Financial Overview</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Monitor the financial performance of each vehicle in your fleet.
          </p>
          <div className="grid grid-cols-2 gap-4 text-center text-sm">
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-2xl font-bold text-primary">$0</p>
              <p className="text-muted-foreground">Total Maintenance</p>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-2xl font-bold text-accent">$0</p>
              <p className="text-muted-foreground">Total Revenue</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-3">📊 Fleet Statistics</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center pb-2 border-b border-border">
              <span className="text-muted-foreground">Total Vehicles</span>
              <span className="font-semibold">0</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-border">
              <span className="text-muted-foreground">Active Rentals</span>
              <span className="font-semibold">0</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-border">
              <span className="text-muted-foreground">In Maintenance</span>
              <span className="font-semibold">0</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Available</span>
              <span className="font-semibold">0</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-3">🚀 Getting Started with Vehicles</h3>
          <ol className="space-y-3 text-sm text-muted-foreground list-decimal list-inside">
            <li>Click "Add First Vehicle" to create a new vehicle entry</li>
            <li>Enter vehicle details (VIN, make, model, year, license plate)</li>
            <li>Set up maintenance schedule and reminders</li>
            <li>Track rental history and availability</li>
            <li>Monitor maintenance costs and fleet health</li>
            <li>Generate reports for fleet management</li>
          </ol>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-3">❓ FAQ</h3>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold mb-1">How do I add a new vehicle?</p>
              <p className="text-muted-foreground">Click the "Add First Vehicle" button and fill in the vehicle details form.</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Can I import vehicles in bulk?</p>
              <p className="text-muted-foreground">Yes, you can use the CSV import feature in the admin panel. Contact your administrator for assistance.</p>
            </div>
            <div>
              <p className="font-semibold mb-1">How are maintenance costs tracked?</p>
              <p className="text-muted-foreground">All maintenance tasks and their costs are logged automatically. You can view the complete history in the vehicle details page.</p>
            </div>
          </div>
        </Card>

        <div className="pb-8" />
      </div>
    </div>
  );
};

export default Vehicles;
