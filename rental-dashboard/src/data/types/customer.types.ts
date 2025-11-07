/**
 * Customer entity types
 */

import type { CustomerStatus } from './common.types';

export interface Customer {
  id: string;
  name: string;
  company?: string;
  email: string;
  phone: string;
  address?: string;
  rentalHistory: string[];
  totalRentals: number;
  outstandingBalance: number;
  status: typeof CustomerStatus[keyof typeof CustomerStatus];
  createdAt: Date;
  updatedAt: Date;
}

export interface NewCustomer extends Omit<Customer, 'id' | 'createdAt' | 'updatedAt' | 'rentalHistory' | 'totalRentals' | 'outstandingBalance'> {}
