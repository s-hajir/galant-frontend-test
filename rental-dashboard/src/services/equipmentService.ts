/**
 * Equipment service - handles all equipment operations
 */

import type { Equipment, NewEquipment } from '@/data/types';
import { mockEquipment } from '@/data/mock';

export const equipmentService = {
  async getEquipment(): Promise<Equipment[]> {
    // Simulating API call
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockEquipment), 300);
    });
  },

  async getEquipmentById(id: string): Promise<Equipment | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const equipment = mockEquipment.find((e) => e.id === id);
        resolve(equipment || null);
      }, 200);
    });
  },

  async createEquipment(data: NewEquipment): Promise<Equipment> {
    const newEquipment: Equipment = {
      ...data,
      id: `eq-${Date.now()}`,
      createdAt: new Date(),
      updatedAt: new Date(),
      rentalHistory: [],
      maintenanceHistory: [],
    };
    return new Promise((resolve) => {
      setTimeout(() => resolve(newEquipment), 300);
    });
  },

  async updateEquipment(id: string, data: Partial<Equipment>): Promise<Equipment> {
    const equipment = mockEquipment.find((e) => e.id === id);
    if (!equipment) throw new Error('Equipment not found');
    
    const updated = { ...equipment, ...data, updatedAt: new Date() };
    return new Promise((resolve) => {
      setTimeout(() => resolve(updated), 300);
    });
  },

  async deleteEquipment(_id: string): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 300);
    });
  },
};
