import { Injectable } from '@angular/core'
import { PostReaction } from 'src/app/interfaces/post.interface'

@Injectable({
  providedIn: 'any'
})
export class CardPostHelper {
  calculateReactions (
    type: 'likes' | 'dislikes',
    reactions: PostReaction,
    active: boolean
  ): { reactions: PostReaction, views: number } {
    // clonar el objeto para no modificar el original
    const newReactions = structuredClone(reactions)
    const operator = active ? -1 : 1
    // incrementar el contador
    newReactions[type] = newReactions[type] + operator
    // sumar los likes y dislikes
    const views = newReactions.dislikes + newReactions.likes
    return {
      reactions: newReactions,
      views
    }
  }
}
