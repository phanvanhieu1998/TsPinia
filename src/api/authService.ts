import HTTP from "../utils/request";
import { LoginData } from "../interfaces/auth";
class authService {
  // logIn(data) {
  //   return HTTP.post("/api/Auth/dang-nhap", data, {
  //     headers: { "Content-Type": "multipart/form-data" },
  //   });
  // }
  logIn(data: LoginData) {
    return HTTP.post("/api/Auth/dang-nhap", data);
  }

  xxxx(data) {
    return HTTP.get("/user/login", {
      // request params /user/login?username=test&password=123
      params: data,
    });
  }
}

export default new authService();
