import Resto from '../views/pages/resto';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': Resto,
  '/resto': Resto,
  '/favorite': Favorite,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
