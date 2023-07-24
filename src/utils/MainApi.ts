interface Options {
  url: string,
  headers: {
    'Content-Type': string
  }
}
interface Register {
  name: string,
  surname: string,
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

  public get products() {
    return fetch(`${this.url}/items`, {
      method: 'GET',
      headers: this.headers,
    })
    .then(res => res.json())
  }
  public register({ name, surname, email, password }: Register) {
    return fetch(`${this.url}/signup`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        surname: surname,
        email: email,
        password: password,
      })
    })
    .then(res => res.json())
  }
}

export const mainApi = new MainApi({
  url: 'http://localhost:5001',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  }
});
