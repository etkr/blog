import { RenderMode, ServerRoute } from '@angular/ssr';
import { PostService } from './servics/post-service';
import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'posts/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams(): Promise<Record<string, string>[]> {
      const postService = inject(PostService);
      const posts = await firstValueFrom(postService.getPosts());
      return posts.map(({ id }) => ({ id }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
