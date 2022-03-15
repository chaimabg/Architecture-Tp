import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterPageComponent} from './register-page/register-page.component';
import {RegistrationComponent} from './registration/registration.component';

const routes: Routes = [
  {path: 'register', component: RegistrationComponent },
  {path: 'reference/:user', component: RegisterPageComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
