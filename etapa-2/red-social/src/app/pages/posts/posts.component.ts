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
  post: Post | null = null

  ngOnInit (): void {
    // obtener posts
    this.getPosts()
    // obtener post indivual
    this.getPost()
  }

  ngOnDestroy (): void {
    this.destroySubscriptions()
  }

  // ---------------------------- init ----------------------------

  private getPosts (): void {
    this._postService.getPosts()
      .pipe(takeUntil(this._onDestroy$))
      .subscribe((posts) => {
        this.posts = posts
      })
  }

  private getPost (): void {
    this._postService.getPost('An7VJzp0LPRBw3QXDu5T')
      .pipe(takeUntil(this._onDestroy$))
      .subscribe((post) => {
        this.post = post
      })
  }

  // ---------------------------- destroy ----------------------------

  private destroySubscriptions (): void {
    this._onDestroy$.next()
    this._onDestroy$.complete()
  }

  // ---------------------------- functions ----------------------------
}
