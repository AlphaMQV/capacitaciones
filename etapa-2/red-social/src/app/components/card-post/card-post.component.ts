import { CommonModule } from '@angular/common'
import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { Subject, takeUntil } from 'rxjs'
import { Interaction, ResponseInteraction } from 'src/app/interfaces/interaction.interface'
import { FieldReaction, PostReaction, ResponsePost } from 'src/app/interfaces/post.interface'
import { MaterialModule } from 'src/app/material/material.module'
import { AuthService } from 'src/app/services/auth.service'
import { ToastService } from 'src/app/services/toast.service'
import { CardPostButtonComponent } from './card-post-button/card-post-button.component'
import { CardPostHelper } from './helpers/card-post.helper'
import { CardPostService } from './services/card-post.service'

@Component({
  selector: 'app-card-post',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    MatCardModule,
    CardPostButtonComponent
  ],
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss']
})
export class CardPostComponent implements OnInit, OnDestroy {
  // input
  @Input() post: ResponsePost

  // inject
  private readonly _authService = inject(AuthService)
  private readonly _cardPostService = inject(CardPostService)
  private readonly _cardPostHelper = inject(CardPostHelper)
  private readonly _toast = inject(ToastService)

  private readonly _onDestroy$ = new Subject<void>()

  interaction?: ResponseInteraction
  userUid: string = ''

  ngOnInit (): void {
    this.suscribeUserUid()
  }

  ngOnDestroy (): void {
    this._onDestroy$.next()
    this._onDestroy$.complete()
  }

  // --------------------- oninit ---------------------

  private suscribeUserUid (): void {
    this._authService.uid$
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(uid => {
        if (uid === null) return
        this.userUid = uid
        this.subscribeInteractions()
      })
  }

  private subscribeInteractions (): void {
    this._cardPostService.getInteractions(this.post.id, this.userUid)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(interaction => {
        this.interaction = interaction
      })
  }

  // --------------------- Functions ---------------------

  async handleButton (type: FieldReaction): Promise<void> {
    if (!this.userUid) return
    try {
      await Promise.all([
        this._cardPostService.setReactions(
          this.post.id,
          this.userUid,
          this.getInteraction(type)
        ),
        this.changeButton(type, this.activeLike)
      ])
    } catch {
      this._toast.error('Error al actualizar el post')
    }
  }

  private getInteraction (type: FieldReaction): Interaction {
    const interaction = {
      like: this.activeLike,
      dislike: this.activeDislike
    }
    if (type === 'likes') {
      interaction.like = !interaction.like
    } else {
      interaction.dislike = !interaction.dislike
    }
    return interaction
  }

  private async changeButton (type: FieldReaction, active: boolean): Promise<void> {
    // obtener las nuevas reacciones
    const { reactions, views } = this._cardPostHelper.calculateReactions(type, this.post.reactions, active)
    // actualizar el post
    await this.updatePostReactions(reactions, views)
  }

  // --------------------- helpers ---------------------

  get activeLike (): boolean {
    if (!this.interaction) return false
    return this.interaction.like
  }

  get activeDislike (): boolean {
    if (!this.interaction) return false
    return this.interaction.dislike
  }

  private async updatePostReactions (
    reactions: PostReaction,
    views: number
  ): Promise<void> {
    try {
      await this._cardPostService.updateReactions(
        this.post.id,
        reactions,
        views
      )
      this._toast.success('Post actualizado')
    } catch {
      this._toast.error('Error al actualizar el post')
    }
  }
}
