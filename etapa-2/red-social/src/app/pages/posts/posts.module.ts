import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { MaterialModule } from 'src/app/material/material.module'
import { CardPostComponent } from './card-post/card-post.component'
import { PostsRoutingModule } from './posts-routing.module'
import { PostsComponent } from './posts.component';
import { CardPostButtonComponent } from './card-post/card-post-button/card-post-button.component'

@NgModule({
  declarations: [
    PostsComponent,
    CardPostComponent,
    CardPostButtonComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MaterialModule
  ]
})
export class PostsModule { }
