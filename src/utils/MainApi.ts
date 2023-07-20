interface Options {
  url: string,
  headers: {
    'Content-Type': string
  }
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
}

export const mainApi = new MainApi({
  url: 'http://localhost:5001',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  }
});
