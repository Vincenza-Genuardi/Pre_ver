import { Component, Input } from '@angular/core';
import { Scarpa } from '../models/scarpa.model';

@Component({
  selector: 'app-scarpa-componente',
  templateUrl: './scarpa-componente.component.html',
  styleUrls: ['./scarpa-componente.component.css']
})
export class ScarpaComponenteComponent {
@Input() scarpe !: Scarpa[] 
}
