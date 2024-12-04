import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ConfigRoutingModule } from './config-routing.module'
import { ConfigComponent } from './config.component'

@NgModule({
  declarations: [
    ConfigComponent
  ],
  imports: [
    CommonModule,
    ConfigRoutingModule
  ]
})
export class ConfigModule { }
