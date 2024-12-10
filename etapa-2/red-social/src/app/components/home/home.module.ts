import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { MatCardModule } from '@angular/material/card'
import { FormMaterialModule } from 'src/app/material/form-material.module'
import { MaterialModule } from 'src/app/material/material.module'
import { CardPostComponent } from './card-post/card-post.component'
import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'

@NgModule({
  declarations: [
    HomeComponent,
    CardPostComponent
  ],
  imports: [
    HomeRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    FormMaterialModule,
    MatCardModule
  ]
})
export class HomeModule { }
