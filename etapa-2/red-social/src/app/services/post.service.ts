import { inject, Injectable } from '@angular/core'
import { addDoc, collection, collectionData, DocumentData, DocumentReference, Firestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs'
import { COLLECTION_POSTS } from '../constants/firestore-collection'
import { Post, ResponsePost } from '../interfaces/post.interface'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // inject
  private readonly _firestore = inject(Firestore)

  private readonly _collectionRef = collection(this._firestore, COLLECTION_POSTS)

  getPosts (): Observable<ResponsePost[]> {
    return collectionData(this._collectionRef, { idField: 'id' }) as Observable<ResponsePost[]>
  }

  async addPost (post: Post): Promise<DocumentReference<DocumentData>> {
    return await addDoc(this._collectionRef, post)
  }
}
