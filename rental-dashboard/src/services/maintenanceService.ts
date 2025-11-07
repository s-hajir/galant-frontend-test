/**
 * Maintenance service - handles all maintenance operations
 */

import type { MaintenanceLog, NewMaintenanceLog } from '@/data/types';
import { mockMaintenance } from '@/data/mock';
import { MaintenanceStatus } from '@/data/types';

export const maintenanceService = {
  async getMaintenance(): Promise<MaintenanceLog[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockMaintenance), 300);
    });
  },

  async getMaintenanceById(id: string): Promise<MaintenanceLog | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const maintenance = mockMaintenance.find((m) => m.id === id);
        resolve(maintenance || null);
      }, 200);
    });
  },

  async createMaintenance(data: NewMaintenanceLog): Promise<MaintenanceLog> {
    const newMaintenance: MaintenanceLog = {
      ...data,
      id: `maint-${Date.now()}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    return new Promise((resolve) => {
      setTimeout(() => resolve(newMaintenance), 300);
    });
  },

  async updateMaintenance(id: string, data: Partial<MaintenanceLog>): Promise<MaintenanceLog> {
    const maintenance = mockMaintenance.find((m) => m.id === id);
    if (!maintenance) throw new Error('Maintenance record not found');
    
    const updated = { ...maintenance, ...data, updatedAt: new Date() };
    return new Promise((resolve) => {
      setTimeout(() => resolve(updated), 300);
    });
  },

  async completeMaintenance(id: string, completedDate: Date): Promise<MaintenanceLog> {
    return maintenanceService.updateMaintenance(id, {
      completedDate,
      status: MaintenanceStatus.COMPLETED,
    });
  },
};
