import './news.css';
import { Articles } from '../../../base/interfaces';
import { isHTMLElement, getExistentElement } from '../../../base/funstions';

class News {
  draw(data: readonly Articles[]): void {
    const news: readonly Articles[] = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
    const fragment: DocumentFragment = document.createDocumentFragment();
    const newsItemTemp: HTMLTemplateElement = getExistentElement<HTMLTemplateElement>('#newsItemTemp');

    news.forEach((item, idx) => {
      const newsClone: Node = newsItemTemp.content.cloneNode(true);
      if (!isHTMLElement(newsClone)) throw new Error(`Element is not HTMLElement!`);
      if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');
      getExistentElement('.news__meta-photo', newsClone).style.backgroundImage = `url(${
        item.urlToImage || 'img/news_placeholder.jpg'
      })`;
      getExistentElement('.news__meta-author', newsClone).textContent = item.author || item.source.name;
      getExistentElement('.news__meta-date', newsClone).textContent = item.publishedAt
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('-');

      getExistentElement('.news__description-title', newsClone).textContent = item.title;
      getExistentElement('.news__description-source', newsClone).textContent = item.source.name;
      getExistentElement('.news__description-content', newsClone).textContent = item.description;
      getExistentElement('.news__read-more a', newsClone).setAttribute('href', item.url);

      fragment.append(newsClone);
    });
    getExistentElement('.news').innerHTML = '';
    getExistentElement('.news').appendChild(fragment);
  }
}

export default News;
