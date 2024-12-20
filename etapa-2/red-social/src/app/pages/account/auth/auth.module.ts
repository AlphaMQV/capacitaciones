import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { FormMaterialModule } from 'src/app/material/form-material.module'
import { MaterialModule } from 'src/app/material/material.module'
import { AuthComponent } from './auth.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FormMaterialModule
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule { }
