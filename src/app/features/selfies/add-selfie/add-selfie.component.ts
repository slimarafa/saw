import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Selfie } from 'src/app/models/selfie';
import { SelfieService } from 'src/app/shared/services/selfies/selfie.service';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';
@Component({
  selector: 'app-add-selfie',
  templateUrl: './add-selfie.component.html',
  styleUrls: ['./add-selfie.component.css'],
})
export class AddSelfieComponent implements OnInit {
  constructor(private _selfieService: SelfieService) {}
  ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs().then(
      (mediaDevices: MediaDeviceInfo[]) => {
      }
    );
  }
  @Input()
  selfieArenseigner: Selfie = null!;
  @Output()
  public annulerAddSelfie: EventEmitter<any> = new EventEmitter<any>();

  public clickAnnulerSaisie() {
    this.annulerAddSelfie.emit({}); //if null ça ne génère aucun evenement
  }
  public clickSurAjouter() {
    this._selfieService
      .ajouter(this.selfieArenseigner)
      .subscribe((item) => (this.selfieArenseigner = item));
  }

  public deviceId: string = null!;
  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
  public errors: WebcamInitError[] = [];

  // latest snapshot
  public webcamImage: WebcamImage = null!;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();

  public triggerSnapshot(): void {
    this.trigger.next();
  }


  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

 

  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

}
