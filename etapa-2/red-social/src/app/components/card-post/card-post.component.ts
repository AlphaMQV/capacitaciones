import { CommonModule } from '@angular/common'
import { Component, inject, Input, OnInit } from '@angular/core'
import { PostReaction, ResponsePost } from 'src/app/interfaces/post.interface'
import { MaterialModule } from 'src/app/material/material.module'
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
    CardPostButtonComponent
  ],
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss']
})
export class CardPostComponent implements OnInit {
  // input
  @Input() post: ResponsePost

  // inject
  private readonly _cardPostService = inject(CardPostService)
  private readonly _cardPostHelper = inject(CardPostHelper)
  private readonly _toast = inject(ToastService)

  ngOnInit (): void {
  }

  // --------------------- Functions ---------------------

  changeButtonLike (): void {
    // obtener las nuevas reacciones
    const { reactions, views } = this._cardPostHelper.calculateReactions('likes', this.post.reactions)
    // actualizar el post
    this.updatePostReactions(reactions, views)
  }

  changeButtonDislike (): void {
    // obtener las nuevas reacciones
    const { reactions, views } = this._cardPostHelper.calculateReactions('dislikes', this.post.reactions)
    // actualizar el post
    this.updatePostReactions(reactions, views)
  }

  // --------------------- helpers ---------------------

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
