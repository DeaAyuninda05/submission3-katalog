import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import data from '../DATA.json';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

document.addEventListener('DOMContentLoaded', () => {
  const postElement = document.querySelector('.posts');
  const { restaurants } = data;
  restaurants.forEach((restaurant) => {
    postElement.innerHTML += `
            <div class="post-item">
                <div class="post-item__content">
                    <h1 class="post-item__title" tabindex="0">${restaurant.name} Restaurant</h1>
                    <img class="post-item__thumbnail"
                    src="${restaurant.pictureId}" alt="${restaurant.name} Picture" >
                    <h4 class=rating>&#9733 ${restaurant.rating}</4>            
                    <h4 class="post-item_city">Location: ${restaurant.city}</h4>
                    <p class="post-item__description" >${restaurant.description}</p>
                    <a tabindex="0" href="https://www.instagram.com/nindha_dea/ " class="socmed-link">Info Restaurant Contact</a><br>
                    <button tabindex="0 " class="button-item" >Check For More</button>
                </div>
            </div>
        `;
  });
});
