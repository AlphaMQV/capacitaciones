import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { CardPostComponent } from 'src/app/components/card-post/card-post.component'
import { MyPostsRoutingModule } from './my-posts-routing.module'
import { MyPostsComponent } from './my-posts.component'

@NgModule({
  declarations: [
    MyPostsComponent
  ],
  imports: [
    CommonModule,
    MyPostsRoutingModule,
    CardPostComponent
  ]
})
export class MyPostsModule { }
