// Serviços
const { request } = require("./RequestService");

// Constantes
const BASE_URL = `${process.env.REACT_APP_API_URL}/auth`;

export function login(data) {
  const url = new URL(BASE_URL + "/login");

  let method = "POST";

  return request({
    url,
    body: data,
    method,
  });
}
