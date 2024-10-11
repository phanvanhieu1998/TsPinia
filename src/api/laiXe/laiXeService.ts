import HTTP from "@/utils/request";
import { LaiXe } from "./apiEndpoints"
const buildUrl = (endpoint: string, params: Record<string, string>) => {
  let url = endpoint;
  // Thay thế các tham số trong endpoint
  for (const key in params) {
    url = url.replace(`:${key}`, params[key]);
  }

  return url;
}
class LaiXeService {
  LayDanhSachLaiXe(data: any) {
    //request body
    return HTTP.post(LaiXe.layDanhSachLaiXe, data);
  }

  yyy(Parameters: any) {
    const url = buildUrl(LaiXe.layDanhSachLaiXe, Parameters);
    //data = { id: '123', type: 'active' } => replate id 
    // request Parameters
    return HTTP.get(url);
  }
  zzzz(data: any) {
    return HTTP.get(LaiXe.layDanhSachLaiXe, {
      // request params /user/login?username=test&password=123
      params: data,
    });
  }
  xxxx(data: any) {
    const url = buildUrl(LaiXe.layDanhSachLaiXe, data);
    //data = { id: '123', type: 'active' } => replate id
    return HTTP.get(url, {
      params: data,
    });
     // request params and parameters
  }
}

export default new LaiXeService();