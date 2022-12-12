interface SourcesData {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

interface SourcesResponse {
  status: string;
  totalResults: number;
  sources: SourcesData[];
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

interface NewsResponse {
  status: string;
  titalResults: number;
  articles: Articles[];
}

interface ConfigResponse {
  endpoint: 'sources' | 'everything';
  options?: Options;
}

type Options = {
  [key: string]: string;
};

interface ResponseObject extends NewsResponse, SourcesResponse {}

interface Callback {
  <T extends ResponseObject>(data: T): void;
}

export { SourcesResponse, SourcesData, NewsResponse, Articles, ConfigResponse, Options, ResponseObject, Callback };
