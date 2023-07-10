import { Component } from '@angular/core';

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
  rechercheSelfie(valeurRecherche:string){
    console.log('appcomponent: ',valeurRecherche)
    this.valeurARechercher=valeurRecherche;
  }
}
