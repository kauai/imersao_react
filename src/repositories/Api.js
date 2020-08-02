import URL from '../config';

class Api {
  constructor() {
    this.url = URL.URL;
  }

  async genericFetch($url) {
    try {
      return await (await fetch(`${this.url}/${$url}`)).json();
    } catch (error) {
      throw new Error('Não foi possível pegar os dados');
    }
  }

  getCateogories() {
    return this.genericFetch('categorias');
  }

  getVideos() {
    return this.genericFetch('categorias?_embed=videos');
  }
}
export default Api;
