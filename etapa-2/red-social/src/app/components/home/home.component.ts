import { Component, inject, OnInit } from '@angular/core'
import { PostService } from 'src/app/services/post.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // inject
  private readonly _postService = inject(PostService)

  ngOnInit (): void {
  }

  // ------------------------- functions -------------------------

  async addDoc (): Promise<void> {
    try {
      const response = await this._postService.addPost({
        title: 'Mi segundo post',
        body: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
        reactions: {
          likes: 0,
          dislikes: 0
        },
        views: 0,
        userid: ''
      })
      console.log(response)
    } catch (error) {
      console.error('Error:', error)
    }
  }
}
