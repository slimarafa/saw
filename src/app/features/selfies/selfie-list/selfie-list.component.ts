import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Selfie } from 'src/app/models/selfie';
import { LoggerService } from 'src/app/shared/services/logger/logger.service';
import { SelfieService } from 'src/app/shared/services/selfies/selfie.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-selfie-list',
  templateUrl: './selfie-list.component.html',
  styleUrls: ['./selfie-list.component.css']
})
export class SelfieListComponent implements OnInit, OnDestroy {
  public selfieAAjouter:Selfie=null!;
  @Input()
  set filtre(valeur: string) {
    this.loggerService.log('SelfieListComponent :', valeur);
  }

  lesSelfies: Selfie[] = [{} as Selfie];
  _lesSouscription: Subscription[] = [];
  constructor(private loggerService: LoggerService, private _selfieService: SelfieService) {
  }
  ngOnDestroy(): void {
    this._lesSouscription.forEach(item=>item.unsubscribe());
  }
  ngOnInit() {
    const currentSubscription = this._selfieService.getAll_asObservable().subscribe(unTableau => this.lesSelfies = unTableau);
    this._lesSouscription.push(currentSubscription);
    // this.lesSelfies=this._selfieService.getAll();
  } 
  ajoutSelfie():void{
    this.selfieAAjouter= new Selfie();
    this.selfieAAjouter.titre='test01';
  }
  cacherZoneAddSelfie():void{
    this.selfieAAjouter= null!;

  }

  // lesSelfies:Selfie[]=[
  //   {image:'https://i.pinimg.com/originals/27/0e/2c/270e2cc841166e4514dfc2f166b86498.jpg',titre:'un super selfie',wookie:{nom:'Chewie',selfies:[]}},
  //   {image:'https://i.pinimg.com/originals/27/0e/2c/270e2cc841166e4514dfc2f166b86498.jpg',titre:'un selfie de ouf wgrooar!',wookie:{nom:'Chewie 2',selfies:[]}}
  // ]
}
