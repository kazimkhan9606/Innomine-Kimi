/**
 * Date utility helpers
 */

export const getFutureDate = (daysAhead: number = 1): Date => {
  const date = new Date();
  date.setDate(date.getDate() + daysAhead);
  return date;
};

export const getPastDate = (daysBehind: number = 1): Date => {
  const date = new Date();
  date.setDate(date.getDate() - daysBehind);
  return date;
};

export const isExpired = (date: Date): boolean => {
  return new Date().getTime() > date.getTime();
};

export const formatISODate = (date: Date): string => {
  return date.toISOString();
};
