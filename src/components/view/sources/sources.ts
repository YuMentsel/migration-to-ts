import './sources.css';
import { SourcesData } from '../../../base/interfacesAndTypes';
import { isHTMLElement, getExistentElement } from '../../../base/funstions';

class Sources {
  draw(data: SourcesData[]): void {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement = getExistentElement<HTMLTemplateElement>('#sourceItemTemp');
    const filterInputValue: string = getExistentElement<HTMLInputElement>('.filter__input').value.toLowerCase().trim();
    const source: HTMLElement = getExistentElement('.sources');

    while (source.firstChild) {
      source.removeChild(source.firstChild);
    }

    data
      .filter((item) => item.name.toLowerCase().includes(filterInputValue))
      .forEach((item) => {
        const sourceClone: Node = sourceItemTemp.content.cloneNode(true);
        if (!isHTMLElement(sourceClone)) throw new Error(`Element is not HTMLElement!`);
        getExistentElement('.source__item-name', sourceClone).textContent = item.name;
        getExistentElement('.source__item', sourceClone).setAttribute('data-source-id', item.id);

        fragment.append(sourceClone);
      });

    source.append(fragment);
  }
}

export default Sources;
