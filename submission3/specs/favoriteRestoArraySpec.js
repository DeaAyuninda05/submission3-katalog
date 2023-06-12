/* eslint-disable consistent-return */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-undef */
import { itActsAsFavoriteRestoModel } from "./contract/favoriteRestoContract";

let favoriteRestos = [];

const FavoriteRestoArray = {
  getResto(id) {
    if (!id) {
      return;
    }

    return favoriteRestos.find((resto) => resto.id === id);
  },

  getAllRestos() {
    return favoriteRestos;
  },

  putResto(resto) {
    if (!resto.hasOwnProperty("id")) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteMovies
    if (this.getResto(resto.id)) {
      return;
    }

    favoriteRestos.push(resto);
  },

  deleteResto(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteRestos = favoriteRestos.filter((resto) => resto.id !== id);
  },
};

describe("Favorite Resto Array Contract Test Implementation", () => {
  // eslint-disable-next-line no-return-assign
  afterEach(() => (favoriteRestos = []));

  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});
