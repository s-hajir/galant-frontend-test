import React from 'react';

export { default as Dashboard } from './Dashboard';

export const Equipment: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Equipment</h1>
      <p className="text-gray-600">Manage your fleet inventory</p>
    </div>
  );
};

export const Rentals: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Rentals</h1>
      <p className="text-gray-600">Track active and completed rentals</p>
    </div>
  );
};

export const Maintenance: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Maintenance</h1>
      <p className="text-gray-600">Schedule and track maintenance</p>
    </div>
  );
};

export const Billing: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Billing</h1>
      <p className="text-gray-600">Manage invoices and payments</p>
    </div>
  );
};

export const Customers: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Customers</h1>
      <p className="text-gray-600">Manage customer profiles</p>
    </div>
  );
};

export const NotFound: React.FC = () => {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-gray-600 mt-2">Page not found</p>
    </div>
  );
};
