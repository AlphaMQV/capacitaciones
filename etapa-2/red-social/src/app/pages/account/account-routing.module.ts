import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';

const routes: Routes = [
  {
    path: '', // account
    component: AccountComponent
  },
  {
    path:'config', // account/config
    loadChildren: () => import('./config/config.module').then(m => m.ConfigModule)
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
