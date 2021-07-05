import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-current-loc',
  templateUrl: './current-loc.page.html',
  styleUrls: ['./current-loc.page.scss'],
})
export class CurrentLocPage implements OnInit {
  map: any;
  infoWindow: any = new google.maps.InfoWindow();
  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;
  umnPos: any = {
    lat: -6.256081,
    lng: 106.618755
  };

  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.showMap(this.umnPos);
  }

  showCurrentLoc() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        console.log(pos);
        this.infoWindow.setPosition(pos);
        this.infoWindow.setContent('Your Current Location');
        this.infoWindow.open(this.map);
        this.map.setCenter(pos);
      });
    }
  }

  showMap(pos: any) {
    const location = new google.maps.LatLng(pos.lat, pos.lng);
    const options = {
      center: location,
      zoom: 13,
      disableDefaultUI: true
    };
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);

    const marker = new google.maps.Marker({
      position: this.umnPos,
      map: this.map,
    });
  }

}
