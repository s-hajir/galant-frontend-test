/**
 * Common types and enums used across the application
 */

export type Condition = 'excellent' | 'good' | 'fair' | 'needs_maintenance';
export type Priority = 'LOW' | 'MEDIUM' | 'HIGH';
export type MaintenanceType = 'ROUTINE' | 'REPAIR' | 'INSPECTION';

export const EquipmentStatus = {
  AVAILABLE: 'AVAILABLE',
  RENTED: 'RENTED',
  MAINTENANCE: 'MAINTENANCE',
  STORED: 'STORED',
} as const;
export type EquipmentStatusType = typeof EquipmentStatus[keyof typeof EquipmentStatus];

export const EquipmentType = {
  EXCAVATOR: 'excavator',
  BULLDOZER: 'bulldozer',
  TRUCK: 'truck',
  CRANE: 'crane',
  LOADER: 'loader',
  GRADER: 'grader',
  OTHER: 'other',
} as const;
export type EquipmentTypeType = typeof EquipmentType[keyof typeof EquipmentType];

export const RentalStatus = {
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  OVERDUE: 'OVERDUE',
} as const;
export type RentalStatusType = typeof RentalStatus[keyof typeof RentalStatus];

export const BillingStatus = {
  PENDING: 'PENDING',
  INVOICED: 'INVOICED',
  PAID: 'PAID',
} as const;
export type BillingStatusType = typeof BillingStatus[keyof typeof BillingStatus];

export const CustomerStatus = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  SUSPENDED: 'SUSPENDED',
} as const;
export type CustomerStatusType = typeof CustomerStatus[keyof typeof CustomerStatus];

export const MaintenanceStatus = {
  SCHEDULED: 'SCHEDULED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
} as const;
export type MaintenanceStatusType = typeof MaintenanceStatus[keyof typeof MaintenanceStatus];
