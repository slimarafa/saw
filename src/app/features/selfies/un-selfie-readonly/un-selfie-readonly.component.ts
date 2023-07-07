import { Component,Input,OnInit } from '@angular/core';
import { Selfie } from 'src/app/models/selfie';

@Component({
  selector: 'app-un-selfie-readonly',
  templateUrl: './un-selfie-readonly.component.html',
  styleUrls: ['./un-selfie-readonly.component.css']
})
export class UnSelfieReadonlyComponent {
  @Input()
  public unSelfie:Selfie = new Selfie();
  constructor(){
  }
  ngOnInit(){
    
  }
}
