/**
 * Equipment entity types
 */

import type { Condition, EquipmentStatusType, EquipmentTypeType } from './common.types';

export interface Equipment {
  id: string;
  name: string;
  type: EquipmentTypeType;
  description: string;
  status: EquipmentStatusType;
  rentalRatePerDay: number; // in cents (e.g., 50000 = $500.00)
  rentalRatePerHour?: number;
  currentCondition: Condition;
  location: string;
  lastMaintenanceDate?: Date;
  nextMaintenanceDue?: Date;
  rentalHistory: string[];
  maintenanceHistory: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface NewEquipment extends Omit<Equipment, 'id' | 'createdAt' | 'updatedAt' | 'rentalHistory' | 'maintenanceHistory'> {}
