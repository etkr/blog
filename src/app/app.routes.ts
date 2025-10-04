import { Route } from '@angular/router';
import { Home } from './components/home/home';
import { Post } from './components/post/post';

export const appRoutes: Route[] = [
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'posts/:id',
    component: Post,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
