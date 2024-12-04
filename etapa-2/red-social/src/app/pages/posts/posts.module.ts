import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { CardPostComponent } from 'src/app/components/card-post/card-post.component'
import { MaterialModule } from 'src/app/material/material.module'
import { PostsRoutingModule } from './posts-routing.module'
import { PostsComponent } from './posts.component'

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MaterialModule,
    CardPostComponent
  ]
})
export class PostsModule { }
