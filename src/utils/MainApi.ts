interface Options {
  url: string,
  headers: {
    'Content-Type': string
  }
}
interface Auth {
  name?: string,
  email: string,
  password: string,
}

class MainApi {
  private readonly url: string;
  private readonly headers: {
    'Content-Type': string
  };

  constructor(options: Options) {
    this.url = options.url;
    this.headers = options.headers;
  }
  private statusRequest(res: any) {
    if(!res.ok) {
      return Promise.reject(`Ошибка: ${res.statusText + ' ' + res.status}`);
    }

    return res.json();
  }
  public products() {
    return fetch(`${this.url}/items`, {
      method: 'GET',
      headers: this.headers,
    })
    .then(res => this.statusRequest(res))
  }
  public register({ name, email, password }: Auth) {
    return fetch(`${this.url}/signup`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      })
    })
    .then(res => this.statusRequest(res))
  }
  public login({ email, password }: Auth) {
    return fetch(`${this.url}/signin`, {
      method: 'POST',
      headers: this.headers,
      credentials: 'include',
      body: JSON.stringify({
        email: email,
        password: password,
      })
    })
    .then(res => this.statusRequest(res))
  }
  public exit() {
    return fetch(`${this.url}/signout`, {
      method: 'DELETE',
      headers: this.headers,
      credentials: 'include',
    })
    .then(res => this.statusRequest(res))
  }
  public user() {
    return fetch(`${this.url}/users/me`, {
      method: 'GET',
      headers: this.headers,
      credentials: 'include',
    })
    .then(res => this.statusRequest(res))
  }
}

export const mainApi = new MainApi({
  url: 'http://localhost:5001',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  }
});
