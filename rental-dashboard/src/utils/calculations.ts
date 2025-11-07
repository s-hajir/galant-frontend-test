/**
 * Business logic calculations
 */

export const calculateRentalCost = (dailyRate: number, days: number): number => {
  return dailyRate * days;
};

export const calculateLateFees = (days: number, dailyRate: number): number => {
  const lateDays = Math.max(0, days);
  return dailyRate * lateDays * 0.5; // 50% daily rate for late fees
};

export const calculateTotalBilling = (
  dailyRate: number,
  rentalDays: number,
  lateDays: number = 0
): number => {
  const rentalCost = calculateRentalCost(dailyRate, rentalDays);
  const lateFees = calculateLateFees(lateDays, dailyRate);
  return rentalCost + lateFees;
};
