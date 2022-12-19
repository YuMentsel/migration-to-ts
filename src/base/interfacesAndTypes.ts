interface SourcesData {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

interface ArticleSource {
  id: string | null;
  name: string;
}

interface Articles {
  source: ArticleSource;
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
}

interface ResponseObject {
  status: string;
  titalResults: number;
  sources: SourcesData[];
  articles: Articles[];
}

type SourcesResponse = Pick<ResponseObject, 'status' | 'titalResults' | 'sources'>;

type NewsResponse = Pick<ResponseObject, 'status' | 'titalResults' | 'articles'>;

interface ConfigResponse {
  endpoint: 'sources' | 'everything';
  options?: Options;
}

interface Options {
  [key: string]: string;
}

interface Callback {
  <T extends ResponseObject>(data: T): void;
}

type Method = 'GET' | 'POST';

export {
  SourcesResponse,
  SourcesData,
  NewsResponse,
  Articles,
  ConfigResponse,
  Options,
  ResponseObject,
  Callback,
  Method,
};
