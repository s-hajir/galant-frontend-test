/**
 * Application constants
 */

export const EQUIPMENT_TYPES = [
  { value: 'excavator', label: 'Excavator' },
  { value: 'bulldozer', label: 'Bulldozer' },
  { value: 'truck', label: 'Truck' },
  { value: 'crane', label: 'Crane' },
  { value: 'loader', label: 'Loader' },
  { value: 'grader', label: 'Grader' },
  { value: 'other', label: 'Other' },
];

export const EQUIPMENT_STATUSES = [
  { value: 'AVAILABLE', label: 'Available', color: 'bg-green-100 text-green-800' },
  { value: 'RENTED', label: 'Rented', color: 'bg-blue-100 text-blue-800' },
  { value: 'MAINTENANCE', label: 'Maintenance', color: 'bg-yellow-100 text-yellow-800' },
  { value: 'STORED', label: 'Stored', color: 'bg-gray-100 text-gray-800' },
];

export const RENTAL_STATUSES = [
  { value: 'ACTIVE', label: 'Active', color: 'bg-blue-100 text-blue-800' },
  { value: 'COMPLETED', label: 'Completed', color: 'bg-green-100 text-green-800' },
  { value: 'OVERDUE', label: 'Overdue', color: 'bg-red-100 text-red-800' },
];

export const CONDITIONS = [
  { value: 'excellent', label: 'Excellent' },
  { value: 'good', label: 'Good' },
  { value: 'fair', label: 'Fair' },
  { value: 'needs_maintenance', label: 'Needs Maintenance' },
];

export const PRIORITIES = [
  { value: 'LOW', label: 'Low' },
  { value: 'MEDIUM', label: 'Medium' },
  { value: 'HIGH', label: 'High' },
];
