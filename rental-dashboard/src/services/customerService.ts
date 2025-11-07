/**
 * Customer service - handles all customer operations
 */

import type { Customer, NewCustomer } from '@/data/types';
import { mockCustomers } from '@/data/mock';

export const customerService = {
  async getCustomers(): Promise<Customer[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockCustomers), 300);
    });
  },

  async getCustomerById(id: string): Promise<Customer | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const customer = mockCustomers.find((c) => c.id === id);
        resolve(customer || null);
      }, 200);
    });
  },

  async createCustomer(data: NewCustomer): Promise<Customer> {
    const newCustomer: Customer = {
      ...data,
      id: `cust-${Date.now()}`,
      rentalHistory: [],
      totalRentals: 0,
      outstandingBalance: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    return new Promise((resolve) => {
      setTimeout(() => resolve(newCustomer), 300);
    });
  },

  async updateCustomer(id: string, data: Partial<Customer>): Promise<Customer> {
    const customer = mockCustomers.find((c) => c.id === id);
    if (!customer) throw new Error('Customer not found');
    
    const updated = { ...customer, ...data, updatedAt: new Date() };
    return new Promise((resolve) => {
      setTimeout(() => resolve(updated), 300);
    });
  },
};
