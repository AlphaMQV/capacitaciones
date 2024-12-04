import { Injectable } from '@angular/core'
import { PostReaction } from 'src/app/interfaces/post.interface'

@Injectable({
  providedIn: 'any'
})
export class CardPostHelper {
  calculateReactions (
    type: 'likes' | 'dislikes',
    reactions: PostReaction
  ): { reactions: PostReaction, views: number } {
    // clonar el objeto para no modificar el original
    const newReactions = structuredClone(reactions)
    // incrementar el contador de dislikes
    if (type === 'likes') newReactions.likes++
    if (type === 'dislikes') newReactions.dislikes++
    // sumar los likes y dislikes
    const views = newReactions.dislikes + newReactions.likes
    return {
      reactions: newReactions,
      views
    }
  }
}
