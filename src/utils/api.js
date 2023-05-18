const apiConfig = {
  baseUrl: `https://api.green-api.com`,
  login: `/waInstance${idInstance}/GetSettings/${apiTokenInstance}`,
};

function makeUrl(baseUrl, endpoint) {
  return `${baseUrl}${endpoint}`;
}

function handleResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

class Api {
  constructor({ baseUrl, login }) {
    this._baseUrl = baseUrl;
    this._login = login;
  }

  async getHotels() {
    const url = makeUrl(this._baseUrl, this._login);
    return fetch(url)
      .then(handleResponse);
  }
}

export const apiHotels = new Api(apiConfig);
