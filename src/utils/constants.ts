// export const url = Object.freeze({
//     PASSWORD_RESET_TOKEN: "passwordResetToken",
//     VERIFY_EMAIL_TOKEN: "verifyEmailToken",
//   });

export const url = process.env["VUE_APP_API_URL"] || "http://localhost:3002/api/v1";