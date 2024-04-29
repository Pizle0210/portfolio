export const getErrorMessage = (error: unknown): string => {
  let message: string;
  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = `${error.message}`;
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "An error occurred.";
  }
  return message; 
};
