import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { MaterialModule } from 'src/app/material/material.module'
import { CardPostComponent } from './card-post/card-post.component'
import { PostsRoutingModule } from './posts-routing.module'
import { PostsComponent } from './posts.component'

@NgModule({
  declarations: [
    PostsComponent,
    CardPostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MaterialModule
  ]
})
export class PostsModule { }
