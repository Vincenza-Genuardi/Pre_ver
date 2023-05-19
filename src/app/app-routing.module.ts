import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Maglietta } from './models/magliette.model';
import { Scarpa } from './models/scarpa.model';
import { MagliettaComponenteComponent } from './maglietta-componente/maglietta-componente.component';
import { ScarpaComponenteComponent } from './scarpa-componente/scarpa-componente.component';
import { HomeComponent } from './home/home.component';

/* const routes: Routes = []; */
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent}, 
  { path: 'magliette', component: MagliettaComponenteComponent },
  { path: 'scarpe', component: ScarpaComponenteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
