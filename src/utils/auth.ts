let info = {
  token: "co",
  role: "Admin",
};

export function getToken() {
  return info;
}

export function setToken(newToken) {
  info.token = newToken;
}

export function clearToken() {
  info.token = null;
}

export function getInfo() {
  return info;
}
