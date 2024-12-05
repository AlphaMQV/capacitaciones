import { inject, Injectable } from '@angular/core'
import { collection, collectionData, Firestore } from '@angular/fire/firestore'
import { BehaviorSubject, Observable } from 'rxjs'
import { COLLECTION_POSTS } from '../constants/firestore-collection'
import { ResponsePost } from '../interfaces/post.interface'
import { ToastService } from './toast.service'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // inject
  private readonly _firestore = inject(Firestore)
  private readonly _toast = inject(ToastService)

  private readonly _posts$ = new BehaviorSubject<ResponsePost[]>([])

  constructor () {
    this.getPosts()
      .subscribe({
        next: posts => { this._posts$.next(posts) },
        error: () => { this._toast.error('Error al obtener los posts') }
      })
  }

  get posts$ (): Observable<ResponsePost[]> {
    return this._posts$.asObservable()
  }

  private getPosts (): Observable<ResponsePost[]> {
    const ref = collection(this._firestore, COLLECTION_POSTS)
    return collectionData(ref, { idField: 'id' }) as Observable<ResponsePost[]>
  }
}
