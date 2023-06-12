/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
import restaurantSource from '../../data/restodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';
// import FavoriteRestaurantSearchPresenter from './resto-fav/favSearcPresenter';
// import FavoriteRestaurantSearchView from './resto-fav/favSearchView';
// import FavoriteRestaurantShowPresenter from './resto-fav/favShowPresenter';

// const view = new FavoriteRestaurantSearchView();

const favoriteResto = {
  async render() {
    return `
      // <div id="search-container" class="search-container">
      //   <input placeholder="Search RestoFood" id="restos" type="search">
      //   <button id="searchButtonElement" type="submit">Search</button>
      // </div>

      <div class="content">
        <h2 class="content__heading">Favorite</h2>
        <div id="restos" class="restos" tabindex="0"></div>
      </div>
      `;
  },

  async afterRender() {
    // new FavoriteRestaurantShowPresenter({
    //   view,
    //   favoriteRestaurants: restaurantSource,
    // });
    // new FavoriteRestaurantSearchPresenter({
    //   view,
    //   favoriteRestaurants: restaurantSource,
    // });
    const favResto = await restaurantSource.restos();
    const restoContainer = document.querySelector('#restos');
    favResto.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default favoriteResto;
