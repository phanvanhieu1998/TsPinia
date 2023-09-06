import axios from "axios";
import TokenService from "./token.service"; // Import your token management service


const HTTP = axios.create({
  baseURL: "http://10.10.0.199:20000/",
  // Configure headers here when needed
  headers: {
    Authorization: "Bearer " + TokenService.getLocalAccessToken(),
    "Content-Type": "application/json",
  },
});

HTTP.interceptors.request.use(
  (config) => {
    // You can add request-specific logic here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response interceptor
HTTP.interceptors.response.use(
  async (response) => {
    const res = response.data;

    if (res.errors) {
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  async (error) => {
    console.log('error',error)
    if (error.response.status === 401) {
      try {
        // Refresh the token
        const refreshToken = TokenService.getLocalRefreshToken();
        const rs = await HTTP.post("/auth/refreshtoken", { refreshToken });
        const { accessToken } = rs.data;

        // Update the local access token and store if applicable
        TokenService.updateLocalAccessToken(accessToken);
        // store.dispatch("auth/refreshToken", accessToken);
      
       

        // Thử lại yêu cầu ban đầu với token mới
        return HTTP(error.config);
      } catch (_error) {
        // Handle token refresh error more gracefully
        return Promise.reject(_error);
      }
    } else {
      // Handle other response errors
      return Promise.reject(error);
    }
  }
);

export default HTTP;