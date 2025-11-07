/**
 * Validation utility functions
 */

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
  return phoneRegex.test(phone);
};

export const validateDates = (startDate: Date, endDate: Date): boolean => {
  return new Date(startDate) < new Date(endDate);
};

export const validatePositiveNumber = (num: number): boolean => {
  return num > 0;
};
