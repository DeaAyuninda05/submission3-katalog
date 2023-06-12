import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';


const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Restoran Favorit</h2>
        <div id="restos" class="restos" tabindex="0">
 
        </div>
      </div>
    `;
  },
  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllRestos();
    const restosContainer = document.querySelector('#restos');
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};
export default Like;
