import { FormControl, FormGroup } from '@angular/forms'

interface FormPostReaction {
  likes: FormControl<number>
  dislikes: FormControl<number>
}

export interface FormPost {
  title: FormControl<string>
  body: FormControl<string>
  reactions: FormGroup<FormPostReaction>
  views: FormControl<number>
  userid: FormControl<string>
}
