import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: '2559aa4f38a246b7a439966306385e65',
    });
  }
}

export default AppLoader;
