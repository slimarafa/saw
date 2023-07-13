import { Component,Input } from '@angular/core';
import { Selfie } from 'src/app/models/selfie';
import { LoggerService } from 'src/app/shared/services/logger/logger.service';
import { SelfieService } from 'src/app/shared/services/selfies/selfie.service';

@Component({
  selector: 'app-selfie-list',
  templateUrl: './selfie-list.component.html',
  styleUrls: ['./selfie-list.component.css']
})
export class SelfieListComponent {
  @Input()
  set filtre(valeur:string){
    this.loggerService.log('SelfieListComponent :',valeur);
  }

  lesSelfies:Selfie[]=[{}as Selfie];

  constructor(private loggerService:LoggerService, private _selfieService:SelfieService){
  }
  ngOnInit(){
    this.lesSelfies=this._selfieService.getAll();
  }
 
  // lesSelfies:Selfie[]=[
  //   {image:'https://i.pinimg.com/originals/27/0e/2c/270e2cc841166e4514dfc2f166b86498.jpg',titre:'un super selfie',wookie:{nom:'Chewie',selfies:[]}},
  //   {image:'https://i.pinimg.com/originals/27/0e/2c/270e2cc841166e4514dfc2f166b86498.jpg',titre:'un selfie de ouf wgrooar!',wookie:{nom:'Chewie 2',selfies:[]}}
  // ]
}
