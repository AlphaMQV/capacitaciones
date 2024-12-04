import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
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
    MaterialModule
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule { }
