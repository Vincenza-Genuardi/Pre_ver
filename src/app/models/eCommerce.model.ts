import { Maglietta } from "./magliette.model";
import { Scarpa } from "./scarpa.model";

export class ECommerce{
    public magliette: Maglietta[]
    public scarpe: Scarpa[];
    constructor(magliette:Maglietta[], scarpe:Scarpa[]){
        this.magliette = magliette;
        this.scarpe = scarpe;
    }
}