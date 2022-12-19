import { ConfigResponse, Options, ResponseObject, Callback, Method } from '../../base/interfacesAndTypes';
import { ErrorCode } from '../../base/enam';

class Loader {
  private baseLink: string;
  private options: Options;

  constructor(baseLink: string, options: Options) {
    this.baseLink = baseLink;
    this.options = options;
  }

  protected getResp(
    config: ConfigResponse,
    callback: Callback = () => console.error('No callback for GET response')
  ): void {
    this.load('GET', callback, config);
  }

  private errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === ErrorCode.unauthor || res.status === ErrorCode.notFound)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  private makeUrl({ endpoint, options = {} }: ConfigResponse): string {
    const urlOptions: {
      [key: string]: string;
    } = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  private load(method: Method, callback: Callback, config: ConfigResponse): void {
    fetch(this.makeUrl(config), { method })
      .then(this.errorHandler)
      .then((res: Response) => res.json())
      .then((data: ResponseObject) => callback(data))
      .catch((err: Error) => console.error(err));
  }
}

export default Loader;
