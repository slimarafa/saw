import { Component } from '@angular/core';
import { LoggerService } from './shared/services/logger/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Selfie à Wookies';
  subtitle = 'SaW La super application';
  logoaffiche=true;
  valeurARechercher:string="";
  constructor(private loggerService:LoggerService){

  }
  rechercheSelfie(valeurRecherche:string){
    this.loggerService.log('appcomponent: ',valeurRecherche)
    this.valeurARechercher=valeurRecherche;
  }
}
