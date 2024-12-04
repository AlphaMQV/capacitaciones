import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { MaterialModule } from 'src/app/material/material.module'
import { AccountRoutingModule } from './account-routing.module'
import { AccountComponent } from './account.component'
import { AuthModule } from './auth/auth.module'

@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    AuthModule,
    MaterialModule
  ]
})
export class AccountModule { }
