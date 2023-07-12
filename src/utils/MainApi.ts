interface Options {
  url: string,
  headers: {
    'Content-Type': string
  }
}

class MainApi {
  private url: string;
  private headers: {
    'Content-Type': string
  };

  constructor(readonly options: Options) {
    this.url = options.url;
    this.headers = options.headers;
  }
}

export const mainApi = new MainApi({
  url: 'd',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  }
});
