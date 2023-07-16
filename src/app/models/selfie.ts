import { Wookie } from "./wookie";

/**
 * classe réprésentant un selfie
 */
export class Selfie {
    id:number;
    image:string;
    titre:string;
    wookie:Wookie;
    constructor(){
        this.id=0;
        this.image='';
        this.titre='';
        this.wookie= new Wookie();
    }
}
