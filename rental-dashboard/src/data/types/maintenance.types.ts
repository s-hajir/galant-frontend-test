/**
 * Maintenance entity types
 */

import { MaintenanceStatus } from './common.types';
import type { MaintenanceType, Priority } from './common.types';

export interface MaintenanceLog {
  id: string;
  equipmentId: string;
  scheduledDate: Date;
  completedDate?: Date;
  status: typeof MaintenanceStatus[keyof typeof MaintenanceStatus];
  notes: string;
  type: MaintenanceType;
  priority: Priority;
  createdAt: Date;
  updatedAt: Date;
}

export interface NewMaintenanceLog extends Omit<MaintenanceLog, 'id' | 'createdAt' | 'updatedAt'> {}
