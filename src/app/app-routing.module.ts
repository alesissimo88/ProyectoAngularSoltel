import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { AlumnoComponent } from './pages/alumno/alumno.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AlumnoreactComponent } from './pages/alumnoreact/alumnoreact.component';
import { PrimariaComponent } from './pages/primaria/primaria.component';
import { SecundariaComponent } from './pages/secundaria/secundaria.component';
import { BachilleratoComponent } from './pages/bachillerato/bachillerato.component';
import { AdeComponent } from './pages/ade/ade.component';

const routes: Routes = [
  { path: 'home'    , component: HomeComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'reactivo', component: AlumnoreactComponent },
  { path: 'primaria', component: PrimariaComponent},
  { path: 'secundaria', component: SecundariaComponent},
  { path: 'bachillerato', component: BachilleratoComponent},
  { path: 'gade', component: AdeComponent},
  // Voy a editar el alumno por id
  { path: 'alumno/:id', component: AlumnoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
