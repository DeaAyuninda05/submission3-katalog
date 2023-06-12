import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
  <div class="detail">
  
    <h2 class="title">
      ${resto.name}
    </h2>

    <img class="detImage" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" crossorigin="anonymous" alt="${resto.name}" />

    <div class="detInfo">
      <h2 class="detPart">Information</h2>
      <ul class="detList">
        <li>
          <h3>Kota</h3>
          <p>${resto.city}</p>
        </li>
        <li>
          <h3>Alamat</h3>
          <p>${resto.address}</p>
        </li>
        <li>
          <h3>Rating</h3>
          <p>${resto.rating}</p>
        </li>
        <li>
          <h3>Foods Menu</h3>
          <span id="food">
          <p>${resto.menus.foods.map((food) => food.name).join(', ')}</p>
          </span>
        </li>
        <li>
          <h3>Drinks Menu</h3>
          <span id="drink">
            <p>${resto.menus.drinks.map((food) => food.name).join(', ')}</p>
          </span>
        </li>
      </ul>
    </div>

    <div class="overview">
      <h2>Overview</h2>
      <p>${resto.description}</p>
    </div>

        <div class="review">
          <h1 class="detPart">Costumer Review</h1>
          <table  class="revTab" border="1" cellspacing="0" cellpadding="10">
            <tr>
              <th class="revItem">Nama Customer</th>
              <th class="revItem">Tanggal Review</th>
              <th class="revItem">Review</th>
            </tr>
        
        ${resto.customerReviews.map((costumerRev) => `
          <tr>
          <td class="revItem">${costumerRev.name}</td>
          <td class="revItem">${costumerRev.date}</td>
          <td class="revItem">${costumerRev.review}</td>
          </tr>
        `).join('')}
            </table>
          </div>

        </div>
      `;

const createRestoItemTemplate = (restos) => `
  <div class="resto-item">
    <div class="resto-item__header">

      <img class="resto-item__header__poster" crossorigin="anonymous" alt="${restos.name}"
           src="${CONFIG.BASE_IMAGE_URL + restos.pictureId}">
           
      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${restos.rating}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3><a href="/#/detail/${restos.id}">${restos.name}</a></h3>
      <p>${restos.description.slice(0, 150)}</p>
    </div>
  </div>
`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};
