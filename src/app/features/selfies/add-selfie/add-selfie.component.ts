import { Component, EventEmitter,Input,Output } from '@angular/core';
import { Selfie } from 'src/app/models/selfie';
import { SelfieService } from 'src/app/shared/services/selfies/selfie.service';

@Component({
  selector: 'app-add-selfie',
  templateUrl: './add-selfie.component.html',
  styleUrls: ['./add-selfie.component.css']
})
export class AddSelfieComponent {
  constructor(private _selfieService:SelfieService){}
  @Input()
  selfieArenseigner:Selfie=null!;
  @Output()
  public annulerAddSelfie:EventEmitter<any>= new EventEmitter<any>();

  public clickAnnulerSaisie(){
    this.annulerAddSelfie.emit({});//if null ça ne génère aucun evenement
  }
  public clickSurAjouter(){
this._selfieService.ajouter(this.selfieArenseigner).subscribe(item=>this.selfieArenseigner=item);
  }
}

