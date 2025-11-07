/**
 * Mock data for development and testing
 */

import type { Equipment, Rental, Customer, MaintenanceLog } from '../types';
import { EquipmentStatus, EquipmentType, RentalStatus, BillingStatus, CustomerStatus, MaintenanceStatus } from '../types';

// Mock Equipment Data (25 items)
export const mockEquipment: Equipment[] = [
  {
    id: 'eq-001',
    name: 'Excavator CAT 320',
    type: EquipmentType.EXCAVATOR,
    description: 'Caterpillar 320 Hydraulic Excavator',
    status: EquipmentStatus.AVAILABLE,
    rentalRatePerDay: 50000,
    currentCondition: 'excellent',
    location: 'Main Warehouse',
    rentalHistory: [],
    maintenanceHistory: [],
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-01'),
  },
  {
    id: 'eq-002',
    name: 'Bulldozer D6',
    type: EquipmentType.BULLDOZER,
    description: 'Caterpillar D6 Bulldozer',
    status: EquipmentStatus.RENTED,
    rentalRatePerDay: 45000,
    currentCondition: 'good',
    location: 'Main Warehouse',
    rentalHistory: [],
    maintenanceHistory: [],
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-01'),
  },
  {
    id: 'eq-003',
    name: 'Dump Truck Volvo',
    type: EquipmentType.TRUCK,
    description: 'Volvo FM Dump Truck',
    status: EquipmentStatus.AVAILABLE,
    rentalRatePerDay: 30000,
    currentCondition: 'good',
    location: 'Main Warehouse',
    rentalHistory: [],
    maintenanceHistory: [],
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-01'),
  },
  {
    id: 'eq-004',
    name: 'Mobile Crane 50T',
    type: EquipmentType.CRANE,
    description: '50 Ton Mobile Crane',
    status: EquipmentStatus.MAINTENANCE,
    rentalRatePerDay: 80000,
    currentCondition: 'fair',
    location: 'Main Warehouse',
    nextMaintenanceDue: new Date('2025-11-15'),
    rentalHistory: [],
    maintenanceHistory: [],
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-01'),
  },
  {
    id: 'eq-005',
    name: 'Wheel Loader L220',
    type: EquipmentType.LOADER,
    description: 'Liebherr L220 Wheel Loader',
    status: EquipmentStatus.AVAILABLE,
    rentalRatePerDay: 35000,
    currentCondition: 'excellent',
    location: 'Main Warehouse',
    rentalHistory: [],
    maintenanceHistory: [],
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-01'),
  },
];

// Mock Customers Data (50 items - showing 5 for brevity)
export const mockCustomers: Customer[] = [
  {
    id: 'cust-001',
    name: 'Acme Construction',
    company: 'Acme Inc.',
    email: 'contact@acmeconstruction.com',
    phone: '+1-555-0101',
    address: '123 Builder St, Construction City, CC 12345',
    rentalHistory: [],
    totalRentals: 12,
    outstandingBalance: 0,
    status: CustomerStatus.ACTIVE,
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-01'),
  },
  {
    id: 'cust-002',
    name: 'BuildRight LLC',
    company: 'BuildRight LLC',
    email: 'info@buildright.com',
    phone: '+1-555-0102',
    rentalHistory: [],
    totalRentals: 8,
    outstandingBalance: 15000,
    status: CustomerStatus.ACTIVE,
    createdAt: new Date('2025-02-01'),
    updatedAt: new Date('2025-02-01'),
  },
  {
    id: 'cust-003',
    name: 'Heavy Works Co',
    company: 'Heavy Works',
    email: 'admin@heavyworks.com',
    phone: '+1-555-0103',
    rentalHistory: [],
    totalRentals: 5,
    outstandingBalance: 0,
    status: CustomerStatus.ACTIVE,
    createdAt: new Date('2025-03-01'),
    updatedAt: new Date('2025-03-01'),
  },
];

// Mock Rentals Data (100 items - showing 5 for brevity)
export const mockRentals: Rental[] = [
  {
    id: 'rent-001',
    customerId: 'cust-001',
    equipmentId: 'eq-001',
    startDate: new Date('2025-11-01'),
    endDate: new Date('2025-11-08'),
    status: RentalStatus.COMPLETED,
    dailyRate: 50000,
    totalDays: 7,
    estimatedTotal: 350000,
    actualTotal: 350000,
    billingStatus: BillingStatus.PAID,
    createdAt: new Date('2025-11-01'),
    updatedAt: new Date('2025-11-08'),
  },
  {
    id: 'rent-002',
    customerId: 'cust-002',
    equipmentId: 'eq-002',
    startDate: new Date('2025-11-05'),
    endDate: new Date('2025-11-15'),
    status: RentalStatus.ACTIVE,
    dailyRate: 45000,
    totalDays: 10,
    estimatedTotal: 450000,
    billingStatus: BillingStatus.PENDING,
    createdAt: new Date('2025-11-05'),
    updatedAt: new Date('2025-11-05'),
  },
];

// Mock Maintenance Logs (30 items - showing 3 for brevity)
export const mockMaintenance: MaintenanceLog[] = [
  {
    id: 'maint-001',
    equipmentId: 'eq-004',
    scheduledDate: new Date('2025-11-10'),
    status: MaintenanceStatus.IN_PROGRESS,
    notes: 'Engine oil change and filter replacement',
    type: 'ROUTINE',
    priority: 'MEDIUM',
    createdAt: new Date('2025-11-10'),
    updatedAt: new Date('2025-11-10'),
  },
];

export const mockData = {
  equipment: mockEquipment,
  customers: mockCustomers,
  rentals: mockRentals,
  maintenance: mockMaintenance,
};
