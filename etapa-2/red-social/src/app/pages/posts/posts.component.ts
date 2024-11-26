import { Component, inject, OnDestroy, OnInit } from '@angular/core'
import { Subject, takeUntil } from 'rxjs'
import { Post } from 'src/app/interfaces/post.interface'
import { PostService } from 'src/app/services/post.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  // inject
  private readonly _postService = inject(PostService)

  private readonly _onDestroy$ = new Subject<void>()

  posts: Post[] = []

  ngOnInit (): void {
    // obtener posts
    this.getPosts()
  }

  ngOnDestroy (): void {
    this.destroySubscriptions()
  }

  // ---------------------------- init ----------------------------

  private getPosts (): void {
    this._postService.getPosts()
      .pipe(takeUntil(this._onDestroy$))
      .subscribe((data) => {
        this.posts = data
      })
  }

  // ---------------------------- destroy ----------------------------

  private destroySubscriptions (): void {
    this._onDestroy$.next()
    this._onDestroy$.complete()
  }

  // ---------------------------- functions ----------------------------
}
