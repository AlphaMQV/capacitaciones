import { inject, Injectable } from '@angular/core'
import { collection, collectionData, Firestore, query, where } from '@angular/fire/firestore'
import { Observable } from 'rxjs'
import { COLLECTION_POSTS } from '../constants/firestore-collection'
import { ResponsePost } from '../interfaces/post.interface'

@Injectable({
  providedIn: 'root'
})
export class PostByUserService {
  // inject
  private readonly _firestore = inject(Firestore)

  getPostsByUser (userId: string): Observable<ResponsePost[]> {
    const ref = collection(this._firestore, COLLECTION_POSTS)
    const qr = query(ref,
      where('userid', '==', userId)
    )
    return collectionData(
      qr,
      { idField: 'id' }
    ) as Observable<ResponsePost[]>
  }
}
