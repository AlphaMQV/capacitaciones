import { Component, inject, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { FormPost } from 'src/app/interfaces/form-post.interface'
import { PostService } from 'src/app/services/post.service'
import { errorControlString } from 'src/app/utils/error-control-string'
import { FormPostInit } from './helpers/form-post.init'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // inject
  private readonly _postService = inject(PostService)
  private readonly _formPostInit = inject(FormPostInit)

  private _formPost: FormGroup<FormPost>

  constructor () {
    this.initAllForms()
  }

  ngOnInit (): void {
  }

  // ------------------------- constructor -------------------------

  private initAllForms (): void {
    this._formPost = this._formPostInit.groupPost()
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

  // ------------------------- helpers -------------------------

  get disabledSendPost (): boolean {
    return this._formPost.invalid
  }

  // ------------------------- getters -------------------------

  get _ctrlsFormPost (): FormPost {
    return this._formPost.controls
  }

  // ------------------------- errors -------------------------

  errorString (control: FormControl<string>): string {
    return errorControlString(control)
  }
}
