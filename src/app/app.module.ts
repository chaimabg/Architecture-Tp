import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { VaccinationComponent } from './vaccination/vaccination.component';
import { RegistrationComponent } from './registration/registration.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RegisterPageComponent } from './register-page/register-page.component';
import { FooterComponent } from './footer/footer.component';
import { VaccineScheduleComponent } from './vaccine-schedule/vaccine-schedule.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    NavbarComponent,
    VaccinationComponent,
    RegistrationComponent,
    RegisterPageComponent,
    FooterComponent,
    VaccineScheduleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
