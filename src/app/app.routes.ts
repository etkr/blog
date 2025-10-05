import { Route } from '@angular/router';
import { Home } from './components/home/home';
import { Post } from './components/post/post';
import { About } from './components/about/about';

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
    path: 'about',
    component: About,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
