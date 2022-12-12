import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: '3fd4d09866b34ee0a48d40542d41b770',
    });
  }
}

export default AppLoader;
