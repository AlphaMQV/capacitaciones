import { inject, Injectable } from '@angular/core'
import { doc, docData, Firestore, setDoc, updateDoc } from '@angular/fire/firestore'
import { Observable } from 'rxjs'
import { COLLECTION_INTERACTIONS, COLLECTION_POSTS } from 'src/app/constants/firestore-collection'
import { Interaction, ResponseInteraction } from 'src/app/interfaces/interaction.interface'
import { PostReaction } from 'src/app/interfaces/post.interface'

@Injectable({
  providedIn: 'any'
})
export class CardPostService {
  // inject
  private readonly _firestore = inject(Firestore)

  getInteractions (idDocument: string, userUid: string): Observable<ResponseInteraction> {
    const ref = doc(
      this._firestore,
      COLLECTION_POSTS, idDocument, COLLECTION_INTERACTIONS, userUid
    )
    return docData(ref, { idField: 'id' }) as Observable<ResponseInteraction>
  }

  setReactions (idDocument: string, userUid: string, interaction: Interaction): Promise<void> {
    const ref = doc(
      this._firestore,
      COLLECTION_POSTS, idDocument, COLLECTION_INTERACTIONS, userUid
    )
    return setDoc(ref, interaction)
  }

  updateReactions (
    idDocument: string,
    reactions: PostReaction,
    views: number
  ): Promise<void> {
    const ref = doc(this._firestore, COLLECTION_POSTS, idDocument)
    return updateDoc(ref, {
      reactions,
      views
    })
  }
}
