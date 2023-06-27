/**
 * Classe représentant un wookie d'un selfie
 */

import { Selfie } from "./selfie";

export class Wookie { 
    nom: string;
    selfies:Selfie[]=[];
    constructor(){
        this.nom='';
    }
}
