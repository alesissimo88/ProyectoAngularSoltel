import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistroComponent } from './pages/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AlumnoComponent } from './pages/alumno/alumno.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/compartido/navbar/navbar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AlumnoreactComponent } from './pages/alumnoreact/alumnoreact.component';
import { PrimariaComponent } from './pages/primaria/primaria.component';
import { SecundariaComponent } from './pages/secundaria/secundaria.component';
import { BachilleratoComponent } from './pages/bachillerato/bachillerato.component';
import { AdeComponent } from './pages/ade/ade.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    HomeComponent,
    LoginComponent,
    AlumnoComponent,
    AlumnosComponent,
    FooterComponent,
    NavbarComponent,
    ContactComponent,
    AlumnoreactComponent,
    PrimariaComponent,
    SecundariaComponent,
    BachilleratoComponent,
    AdeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
