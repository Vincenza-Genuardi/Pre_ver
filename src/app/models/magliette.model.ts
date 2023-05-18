export class Maglietta{
    public id: number;
    public nome: string;
    public tipologia: string;
    public prezzo: number;
    constructor(id:number, nome:string, tipologia: string, prezzo:number){
        this.id = id;
        this.nome = nome;
        this.tipologia = tipologia;
        this.prezzo = prezzo;
    }
}