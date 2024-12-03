import { inject, Injectable } from '@angular/core'
import { doc, Firestore, updateDoc } from '@angular/fire/firestore'
import { COLLECTION_POSTS } from 'src/app/constants/firestore-collection'
import { PostReaction } from 'src/app/interfaces/post.interface'

@Injectable({
  providedIn: 'any'
})
export class CardPostService {
  // inject
  private readonly _firestore = inject(Firestore)

  updateReactions (id: string, reactions: PostReaction, views: number): Promise<void> {
    const ref = doc(this._firestore, COLLECTION_POSTS, id)
    return updateDoc(ref, {
      reactions,
      views
    })
  }
}
