// Serviços
const { request } = require("./RequestService");

// Constantes
const BASE_URL = `${process.env.REACT_APP_API_URL}/user`;

export function getOne(slug) {
  const url = new URL(BASE_URL + `/${slug}`);

  let method = "GET";

  return request({
    url,
    method,
  });
}

export function getAuthenticatedUser() {
  const url = new URL(BASE_URL + "/authenticated");

  let method = "GET";

  return request({
    url,
    method,
  });
}

export function signup(data) {
  const url = new URL(BASE_URL);

  let method = "POST";

  return request({
    url,
    body: data,
    method,
  });
}

export function update(user) {
  const options = {
    "Content-Type": "multipart/form-data",
  };

  const url = new URL(BASE_URL);

  let method = "PUT";

  let data = new FormData();
  data.append("user", JSON.stringify(user));
  if (user.profileImage && user.profileImage instanceof Blob) {
    data.append("file", user.profileImage, "profileImage");
  }
  if (user.coverImage && user.coverImage instanceof Blob) {
    data.append("file", user.coverImage, "coverImage");
  }

  return request({
    url,
    body: data,
    method,
    options,
  });
}
