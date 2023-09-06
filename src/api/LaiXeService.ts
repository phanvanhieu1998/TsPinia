import HTTP from "../utils/request";


class LaiXeService {
  LayDanhSachLaiXe(data) {
    return HTTP.post("/api/Auth/dang-nhap", data);
  }

  xxxx(data) {
    return HTTP.get("/user/login", {
      params: data,
    });
  }
}

export default new LaiXeService();