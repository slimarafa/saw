import { Injectable } from '@angular/core';
import { Selfie } from 'src/app/models/selfie';
import { Wookie } from 'src/app/models/wookie';
import { Observable,interval,map,of } from 'rxjs';
import { LoggerService } from '../logger/logger.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
/**
 * service géraant selfies (DRUD)
 */
export class SelfieService {

  constructor(private _loggerService:LoggerService,private _httpClient:HttpClient) { }
  /**
   * 
   * @returns la liste complète de tous les selfies
   */
  getAll(): Selfie[] {
    const tabSelfie: Selfie[] = [];
    let selfie = new Selfie();
    selfie.image = 'https://www.refinery29.com/images/9084584.jpg';
    selfie.titre = 'Yata super photo';
    selfie.wookie = new Wookie();
    selfie.wookie.nom = 'Chéwi';
    tabSelfie.push(selfie);


    tabSelfie.push({
      image: 'https://i.pinimg.com/originals/27/0e/2c/270e2cc841166e4514dfc2f166b86498.jpg',
      titre: 'un super selfie',
      wookie: { nom: 'Chewie', selfies: [] }
    })

    return tabSelfie;
  }
  /**
   * Retourne un observale pour s'inscrire à la réception des tableaux de Selfie
   */
  getAll_asObservable(): Observable<Selfie[]>{
  // const tableauSelfie = this.getAll();
  // return interval(1000).pipe(
  //   map(entier=>[
  //     {
  //       image: 'https://i.pinimg.com/originals/27/0e/2c/270e2cc841166e4514dfc2f166b86498.jpg',
  //       titre: 'un super selfie : '+entier,
  //       wookie: { nom: 'Chewie', selfies: [] }
  //     }
  //   ])
  // );
  // //return of(tableauSelfie);

  return this._httpClient.get<Selfie[]>(environment.apis.selfies.url);
}
}
