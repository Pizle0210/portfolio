/**
 * Validates a string value.
 * @param value - The value to be validated. It should be a string.
 * @param maxLength - The maximum length allowed for the string.
 * @returns True if the value is a valid string within the specified maximum length, false otherwise.
 */
export const validateString = (value: unknown, maxLength: number): boolean => {
  if (!value || typeof value !== "string" || value.trim().length > maxLength) {
    return false;
  }
  return true;
};

