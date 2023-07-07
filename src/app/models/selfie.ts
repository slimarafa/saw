import { Wookie } from "./wookie";

/**
 * classe réprésentant un selfie
 */
export class Selfie {
    image:string;
    titre:string;
    wookie:Wookie;
    constructor(){
        this.image='';
        this.titre='';
        this.wookie= new Wookie();
    }
}
