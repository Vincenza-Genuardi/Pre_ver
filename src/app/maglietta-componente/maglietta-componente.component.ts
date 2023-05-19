import { Component, Input } from '@angular/core';
import { Maglietta } from '../models/magliette.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maglietta-componente',
  templateUrl: './maglietta-componente.component.html',
  styleUrls: ['./maglietta-componente.component.css']
})
export class MagliettaComponenteComponent {
  magliette !: Maglietta[] 
  constructor(private router:Router) {
    this.magliette = this.router.getCurrentNavigation().extras.state as Maglietta[];
  }
}
