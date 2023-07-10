import { Component, ElementRef,Output, ViewChild,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-general',
  templateUrl: './menu-general.component.html',
  styleUrls: ['./menu-general.component.css']
})
export class MenuGeneralComponent {
  @ViewChild('zoneRecherche', { static: false })
  maZoneDeRecherche: ElementRef = {} as ElementRef;
  @Output()
  lancerRecherche:EventEmitter<string>=new EventEmitter<string>();
  rechercher() {
   // console.log();
    const valeurRecherche=this.maZoneDeRecherche.nativeElement.value;
    this.lancerRecherche.emit(valeurRecherche);
  }
}
