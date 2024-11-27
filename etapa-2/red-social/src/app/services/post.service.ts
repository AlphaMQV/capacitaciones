import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { addDoc, collection, collectionData, DocumentData, DocumentReference, Firestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Post, ResponsePost } from '../interfaces/post.interface'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // inject
  private readonly _http = inject(HttpClient)
  private readonly _firestore = inject(Firestore)

  private readonly _apiUrl = environment.apiPosts.url
  private readonly _collectionRef = collection(this._firestore, 'posts')

  getPosts (): Observable<ResponsePost[]> {
    return collectionData(this._collectionRef, { idField: 'id' }) as Observable<ResponsePost[]>
  }

  getPost (idDocument: string): Observable<Post> {
    return this._http.get<Post>(`${this._apiUrl}/posts/${idDocument}`)
  }

  async addPost (post: Post): Promise<DocumentReference<DocumentData>> {
    return await addDoc(this._collectionRef, post)
  }
}
