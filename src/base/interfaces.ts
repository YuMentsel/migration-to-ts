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

interface ErrorResponse {
  status: string;
  code: string;
  message: string;
}

export { SourcesResponse, SourcesData, NewsResponse, Articles, ErrorResponse };
