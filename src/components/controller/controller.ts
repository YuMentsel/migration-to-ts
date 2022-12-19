import AppLoader from './appLoader';
import { isHTMLElement } from '../../base/funstions';
import { Callback } from '../../base/interfacesAndTypes';

class AppController extends AppLoader {
  public getSources(callback: Callback): void {
    super.getResp(
      {
        endpoint: 'sources',
        options: {},
      },
      callback
    );
  }

  public getNews(e: Event, callback: Callback): void {
    let target: EventTarget | null = e.target;
    const newsContainer: EventTarget | null = e.currentTarget;

    while (target !== newsContainer) {
      if (!isHTMLElement(target) || !isHTMLElement(newsContainer)) throw new Error(`Element is not HTMLElement!`);
      if (target.classList.contains('source__item')) {
        const sourceId: string | null = target.getAttribute('data-source-id');
        if (!sourceId) return;
        if (newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: 'everything',
              options: {
                sources: sourceId,
              },
            },
            callback
          );
        }
        return;
      }
      target = target.parentNode;
    }
  }
}

export default AppController;
