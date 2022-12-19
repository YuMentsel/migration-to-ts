import News from './news/news';
import Sources from './sources/sources';
import { SourcesResponse, SourcesData, NewsResponse, Articles } from '../../base/interfacesAndTypes';

export class AppView {
  private news: News;
  private sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  public drawNews(data: NewsResponse): void {
    const values: Articles[] = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  public drawSources(data: SourcesResponse): void {
    const values: SourcesData[] = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
