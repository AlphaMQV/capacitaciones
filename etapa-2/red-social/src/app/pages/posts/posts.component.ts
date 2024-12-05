import { Component, inject } from '@angular/core'
import { PostService } from 'src/app/services/post.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  // inject
  private readonly _postService = inject(PostService)

  readonly posts$ = this._postService.posts$
}
