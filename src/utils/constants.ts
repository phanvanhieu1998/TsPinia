// export const url = Object.freeze({
//     PASSWORD_RESET_TOKEN: "passwordResetToken",
//     VERIFY_EMAIL_TOKEN: "verifyEmailToken",
//   });

export const url = import.meta.env.VITE_API_URL || "http://localhost:3002/api/v1";