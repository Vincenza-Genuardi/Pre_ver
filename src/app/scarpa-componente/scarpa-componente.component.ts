import { Component, Input } from '@angular/core';
import { Scarpa } from '../models/scarpa.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scarpa-componente',
  templateUrl: './scarpa-componente.component.html',
  styleUrls: ['./scarpa-componente.component.css']
})
export class ScarpaComponenteComponent {
  scarpe !: Scarpa[] 
  constructor(private router:Router) {
    this.scarpe = this.router.getCurrentNavigation().extras.state as Scarpa[];
  }
}
