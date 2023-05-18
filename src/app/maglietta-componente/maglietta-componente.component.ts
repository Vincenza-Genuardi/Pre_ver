import { Component, Input } from '@angular/core';
import { Maglietta } from '../models/magliette.model';

@Component({
  selector: 'app-maglietta-componente',
  templateUrl: './maglietta-componente.component.html',
  styleUrls: ['./maglietta-componente.component.css']
})
export class MagliettaComponenteComponent {
  @Input() magliette !: Maglietta[] 
}
