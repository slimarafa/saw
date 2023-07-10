import { Component,Input } from '@angular/core';
import { Selfie } from 'src/app/models/selfie';

@Component({
  selector: 'app-selfie-list',
  templateUrl: './selfie-list.component.html',
  styleUrls: ['./selfie-list.component.css']
})
export class SelfieListComponent {
  @Input()
  set filtre(valeur:string){
    console.log('SelfieListComponent :',valeur);
  }
  lesSelfies:Selfie[]=[
    {image:'https://i.pinimg.com/originals/27/0e/2c/270e2cc841166e4514dfc2f166b86498.jpg',titre:'un super selfie',wookie:{nom:'Chewie',selfies:[]}},
    {image:'https://i.pinimg.com/originals/27/0e/2c/270e2cc841166e4514dfc2f166b86498.jpg',titre:'un selfie de ouf wgrooar!',wookie:{nom:'Chewie 2',selfies:[]}}
  ]
}
