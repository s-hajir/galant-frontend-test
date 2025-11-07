/**
 * Date utility functions
 */

export const formatDate = (date: Date | undefined): string => {
  if (!date) return '';
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const calculateDays = (startDate: Date, endDate: Date): number => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end.getTime() - start.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

export const isDueForMaintenance = (nextDueDate: Date | undefined): boolean => {
  if (!nextDueDate) return false;
  return new Date() >= new Date(nextDueDate);
};

export const isOverdue = (dueDate: Date): boolean => {
  return new Date() > new Date(dueDate);
};
