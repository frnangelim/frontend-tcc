const { history } = require("../history");

const TIMEOUT_IN_SECONDS = parseInt(
  process.env.REACT_APP_TIMEOUT_IN_SECONDS || 20
);

/**
 * Executa uma requisição para a url informada.
 *
 * @param {Object} data Opções da requisição
 */
export async function request(data) {
  let { url, params, options } = data;

  let headers = {};

  if (!options || !options["Content-Type"]) {
    headers["Content-Type"] = "application/json";
  }

  let userToken = localStorage.getItem("USER_JWT");

  if (userToken) {
    headers["Authorization"] = userToken;
  }

  data.headers = new Headers(headers);

  if (params) {
    Object.keys(params).forEach((key) => {
      if (params[key] !== undefined) {
        url.searchParams.append(key, params[key]);
      }
    });
  }

  if (data.body && headers["Content-Type"] === "application/json") {
    data.body = JSON.stringify(data.body);
  }

  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error("Promise timeout"));
    }, TIMEOUT_IN_SECONDS * 1000);

    fetch(url, data).then((response) => {
      clearTimeout(timeoutId);

      if (response.status === 401) history.push(`/entrar`); // TODO NOT AUTHORIZED?

      if (response.ok) {
        response.json().then((result) => {
          resolve(result);
        });
      } else {
        response.json().then((result) => {
          reject(result);
        });
      }
    });
  });
}
