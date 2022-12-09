interface ISource {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

interface ISourcesResponse {
  status: string;
  totalResults: number;
  sources: ISource[];
}

interface IArticleSource {
  id: string | null;
  name: string;
}

interface IArticle {
  source: IArticleSource;
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
}

interface INewsResponse {
  status: string;
  titalResults: number;
  articles: IArticle[];
}

interface IError {
  status: string;
  code: string;
  message: string;
}

export { ISourcesResponse, INewsResponse, IError };
