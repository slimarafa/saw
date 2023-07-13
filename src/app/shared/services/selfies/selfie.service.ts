import { Injectable } from '@angular/core';
import { Selfie } from 'src/app/models/selfie';
import { Wookie } from 'src/app/models/wookie';

@Injectable({
  providedIn: 'root'
})
/**
 * service géraant selfies (DRUD)
 */
export class SelfieService {

  constructor() { }
  /**
   * 
   * @returns la liste complète de tous les selfies
   */
  getAll(): Selfie[] {
    const tabSelfie: Selfie[] = [];
    let selfie=new Selfie();
    selfie.image='https://www.refinery29.com/images/9084584.jpg';
    selfie.titre='Yata super photo';
    selfie.wookie= new Wookie();
    selfie.wookie.nom='Chéwi';
    tabSelfie.push(selfie);

    
    tabSelfie.push({
      image: 'https://i.pinimg.com/originals/27/0e/2c/270e2cc841166e4514dfc2f166b86498.jpg',
      titre: 'un super selfie',
      wookie: { nom: 'Chewie', selfies: [] }
    })

    return tabSelfie;
  }
}
