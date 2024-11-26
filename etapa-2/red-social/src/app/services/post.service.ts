import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Post } from '../interfaces/post.interface'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // inject
  private readonly _http = inject(HttpClient)
  private readonly _apiUrl = environment.apiPosts.url

  getPosts (): Observable<Post[]> {
    // fetch(`${this._apiUrl}/posts`)
    return this._http.get<Post[]>(`${this._apiUrl}/posts`)
  }
}
