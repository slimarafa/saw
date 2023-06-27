import { Wookie } from "./wookie";

/**
 * classe réprésentant un selfie
 */
export class Selfie {
    image:string;
    wookie:Wookie;
    constructor(){
        this.image='';
        this.wookie= new Wookie();
    }
}
