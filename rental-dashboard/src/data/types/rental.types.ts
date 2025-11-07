/**
 * Rental entity types
 */

import type { RentalStatus, BillingStatus, Condition } from './common.types';

export interface Rental {
  id: string;
  customerId: string;
  equipmentId: string;
  startDate: Date;
  endDate: Date;
  actualReturnDate?: Date;
  status: typeof RentalStatus[keyof typeof RentalStatus];
  dailyRate: number;
  totalDays: number;
  estimatedTotal: number;
  actualTotal?: number;
  damageNotes?: string;
  condition?: Condition;
  billingStatus: typeof BillingStatus[keyof typeof BillingStatus];
  invoiceId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface NewRental extends Omit<Rental, 'id' | 'createdAt' | 'updatedAt' | 'status' | 'billingStatus'> {
  status?: typeof RentalStatus[keyof typeof RentalStatus];
  billingStatus?: typeof BillingStatus[keyof typeof BillingStatus];
}
