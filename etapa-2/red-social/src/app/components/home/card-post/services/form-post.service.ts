import { inject, Injectable } from '@angular/core'
import { addDoc, collection, DocumentData, DocumentReference, Firestore } from '@angular/fire/firestore'
import { COLLECTION_POSTS } from 'src/app/constants/firestore-collection'
import { Post } from 'src/app/interfaces/post.interface'

@Injectable({
  providedIn: 'any'
})
export class FormPostService {
  // inject
  private readonly _firestore = inject(Firestore)

  async addPost (post: Post): Promise<DocumentReference<DocumentData>> {
    const ref = collection(this._firestore, COLLECTION_POSTS)
    return await addDoc(ref, post)
  }
}
