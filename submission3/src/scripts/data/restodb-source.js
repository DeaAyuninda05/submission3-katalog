/* eslint-disable no-dupe-class-members */
import API_ENDPOINT from '../globals/api-endpoint';

class restaurantSource {
  static async restos() {
    const response = await fetch(API_ENDPOINT.RESTO);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detail(id) {
    const response = await fetch(API_ENDPOINT.FAVORITE(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async detail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default restaurantSource;
