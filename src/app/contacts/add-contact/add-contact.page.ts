import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { LoadingController, ToastController } from '@ionic/angular';
import { Contact } from '../contact.model';
import { ContactsService } from '../contacts.service';

declare var google: any
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.page.html',
  styleUrls: ['./add-contact.page.scss'],
})
export class AddContactPage implements OnInit {
  map: any;
  marker: any;
  infoWindow: any = new google.maps.InfoWindow();
  lokasi: Geolocation = null;
  umnPos: any = {
    lat: -6.256081,
    lng: 106.618755
  };

  photo: any = "";
  photoBase64: any;

  @ViewChild('map', {
    read: ElementRef,
    static: false
  }) mapRef: ElementRef;

  constructor(
    private contactsService: ContactsService,
    private router: Router,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.showMap(this.umnPos);
  }

  showMap(pos: any) {
    const location = new google.maps.LatLng(pos.lat, pos.lng);
    const options = {
      center: location,
      zoom: 10,
      disableDefaultUI: true
    };

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);

    // Create initial info window
    this.infoWindow = new google.maps.InfoWindow({
      content: 'Click the map to get lat/lng',
      position: this.umnPos
    });
    this.infoWindow.open(this.map);

    // Configure click event listener.
    this.map.addListener('click', (mapsMouseEvent) => {
      // Close the current infoWindow.
      this.infoWindow.close();

      // Create a new InfoWindow.
      this.infoWindow = new google.maps.InfoWindow({
        position: mapsMouseEvent.latLng
      });
      this.infoWindow.setContent(
        JSON.stringify(mapsMouseEvent.latLng.toJSON())
      );
      console.log(mapsMouseEvent.latLng.toJSON());
      this.lokasi = mapsMouseEvent.latLng.toJSON();
      this.infoWindow.open(this.map);
    });
  }

  onSubmit(form: NgForm) {
    const tempat = {
      lat: -6.865435565500417,
      lng: 106.51457384234212
    }
    console.log(this.photo);

    const newContact = new Contact(
      null,
      form.value.name,
      [form.value.email1, form.value.email2],
      [form.value.telephone1, form.value.telephone2],
      this.lokasi,
      this.photo,
    )

    console.log(newContact)

    this.contactsService.addContact(newContact).then(res => {
      console.log(res)
    })

    form.reset()
  }

  addContact() {
    this.presentLoading().then(() => {
      console.log("redirecing...")
      this.router.navigateByUrl('/contacts/index')
      this.presentToast()
    })
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: "Contact has been added.",
      duration: 3000,
      color: "success",
    })

    toast.present()
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Adding new contact...',
      duration: 2000,
    })

    await loading.present()

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async getPicture() {
    const image = await Camera.getPhoto({
      quality: 100,
      width: 400,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Prompt
    });

    this.photoBase64 = image.base64String;
    this.photo = 'data:image/png;base64,' + image.base64String;
    console.log(this.photo);
  }
}
