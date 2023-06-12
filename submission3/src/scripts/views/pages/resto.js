import restaurantSource from '../../data/restodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Resto = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">All Restaurant</h2>
        <div id="restos" class="restos">
        </div>
    </div>
    `;
  },

  async afterRender() {
    const restos = await restaurantSource.restos();
    const restoContainer = document.querySelector('#restos');
    restos.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Resto;
