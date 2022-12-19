import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { getExistentElement } from '../../base/funstions';

class App {
  private controller: AppController;
  private view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  public start(): void {
    getExistentElement('.sources').addEventListener('click', (e) =>
      this.controller.getNews(e, (data) => this.view.drawNews(data))
    );
    this.controller.getSources((data) => this.view.drawSources(data));
    const filterInput: HTMLInputElement = getExistentElement<HTMLInputElement>('.filter__input');
    filterInput.addEventListener('input', () => this.controller.getSources((data) => this.view.drawSources(data)));
  }
}

export default App;
