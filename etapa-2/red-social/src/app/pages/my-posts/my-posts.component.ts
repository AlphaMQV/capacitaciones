import { Component, inject, OnDestroy, OnInit } from '@angular/core'
import { User } from '@angular/fire/auth'
import { Subject, takeUntil } from 'rxjs'
import { ResponsePost } from 'src/app/interfaces/post.interface'
import { AuthService } from 'src/app/services/auth.service'
import { PostByUserService } from 'src/app/services/post-by-user.service'

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.scss']
})
export class MyPostsComponent implements OnInit, OnDestroy {
  // inject
  private readonly _authService = inject(AuthService)
  private readonly _postByUserService = inject(PostByUserService)

  private readonly _onDestroy$ = new Subject<void>()
  private readonly _userChange$ = new Subject<void>()

  private user: User | null = null
  posts: ResponsePost[] = []

  ngOnInit (): void {
    this.susbcribeUser()
  }

  ngOnDestroy (): void {
    this._userChange$.next()
    this._userChange$.complete()
    this._onDestroy$.next()
    this._onDestroy$.complete()
  }

  private susbcribeUser (): void {
    this._authService.authState$
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(user => {
        this._userChange$.next()
        this.user = user
        this.subscribePostsByUser()
      })
  }

  private subscribePostsByUser (): void {
    if (!this.user) return
    this._postByUserService.getPostsByUser(this.user.uid)
      .pipe(takeUntil(this._userChange$))
      .subscribe(posts => {
        this.posts = posts
      })
  }
}
