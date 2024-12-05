import { inject, Injectable } from '@angular/core'
import { collection, collectionData, Firestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs'
import { COLLECTION_POSTS } from '../constants/firestore-collection'
import { ResponsePost } from '../interfaces/post.interface'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // inject
  private readonly _firestore = inject(Firestore)

  getPosts (): Observable<ResponsePost[]> {
    const ref = collection(this._firestore, COLLECTION_POSTS)
    return collectionData(ref, { idField: 'id' }) as Observable<ResponsePost[]>
  }
}
