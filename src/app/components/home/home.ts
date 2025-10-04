import { Component, inject } from '@angular/core';
import { PostService } from '../../servics/post-service';
import { Post } from '../post/post';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly postService = inject(PostService);
  public readonly posts = toSignal(this.postService.getPosts());
}
