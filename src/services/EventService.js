// Serviços
const { request } = require("./RequestService");

// Constantes
const BASE_URL = `${process.env.REACT_APP_API_URL}/event`;

export function getUserEvents() {
  const url = new URL(BASE_URL);

  let method = "GET";

  return request({
    url,
    method,
  });
}

export function getEvent(slug) {
  const url = new URL(BASE_URL + `/${slug}`);

  let method = "GET";

  return request({
    url,
    method,
  });
}

export function getSlot(eventSlug, slotSlug) {
  const url = new URL(BASE_URL + `/${eventSlug}/${slotSlug}`);

  let method = "GET";

  return request({
    url,
    method,
  });
}

export function getAll({ page, limit = 10, hotData = false, search = "" }) {
  const url = new URL(BASE_URL + `/list`);

  let method = "POST";

  return request({
    url,
    body: { page, limit, hotData, search },
    method,
  });
}

export function create(event) {
  const options = {
    "Content-Type": "multipart/form-data",
  };

  const url = new URL(BASE_URL);

  let method = "POST";

  let data = new FormData();
  data.append("event", JSON.stringify(event));
  data.append("file", event.image);

  return request({
    url,
    body: data,
    method,
    options,
  });
}

export function update(event) {
  const options = {
    "Content-Type": "multipart/form-data",
  };

  const url = new URL(BASE_URL);

  let method = "PUT";

  let data = new FormData();
  data.append("event", JSON.stringify(event));
  data.append("file", event.image);

  return request({
    url,
    body: data,
    method,
    options,
  });
}

export function createEnrollment(data) {
  const url = new URL(BASE_URL + "/enrollment");

  let method = "POST";

  return request({
    url,
    body: data,
    method,
  });
}
