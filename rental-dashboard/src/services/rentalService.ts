/**
 * Rental service - handles all rental operations
 */

import type { Rental, NewRental } from '@/data/types';
import { mockRentals } from '@/data/mock';
import { RentalStatus, BillingStatus } from '@/data/types';

export const rentalService = {
  async getRentals(): Promise<Rental[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockRentals), 300);
    });
  },

  async getRentalById(id: string): Promise<Rental | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const rental = mockRentals.find((r) => r.id === id);
        resolve(rental || null);
      }, 200);
    });
  },

  async createRental(data: NewRental): Promise<Rental> {
    const newRental: Rental = {
      ...data,
      id: `rent-${Date.now()}`,
      status: RentalStatus.ACTIVE,
      billingStatus: BillingStatus.PENDING,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    return new Promise((resolve) => {
      setTimeout(() => resolve(newRental), 300);
    });
  },

  async updateRental(id: string, data: Partial<Rental>): Promise<Rental> {
    const rental = mockRentals.find((r) => r.id === id);
    if (!rental) throw new Error('Rental not found');
    
    const updated = { ...rental, ...data, updatedAt: new Date() };
    return new Promise((resolve) => {
      setTimeout(() => resolve(updated), 300);
    });
  },

  async completeRental(id: string, actualReturnDate: Date): Promise<Rental> {
    return rentalService.updateRental(id, {
      actualReturnDate,
      status: RentalStatus.COMPLETED,
    });
  },
};
