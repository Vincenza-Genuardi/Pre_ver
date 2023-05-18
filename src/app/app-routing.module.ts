import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Maglietta } from './models/magliette.model';
import { Scarpa } from './models/scarpa.model';
import { MagliettaComponenteComponent } from './maglietta-componente/maglietta-componente.component';
import { ScarpaComponenteComponent } from './scarpa-componente/scarpa-componente.component';

/* const routes: Routes = []; */
const routes: Routes = [
  { path: 'magliette', component: MagliettaComponenteComponent },
  { path: 'scarpe', component: ScarpaComponenteComponent },
  { path: '', redirectTo: '/scarpe', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
