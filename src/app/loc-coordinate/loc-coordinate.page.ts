import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-loc-coordinate',
  templateUrl: './loc-coordinate.page.html',
  styleUrls: ['./loc-coordinate.page.scss'],
})
export class LocCoordinatePage implements OnInit {
  map: any;
  infoWindow: any;
  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;
  umnPos: any = {
    lat: -6.256081,
    lng: 106.618755
  };

  otherPos: any = {
    lat: -6.865435565500417,
    lng: 106.51457384234212
  };

  constructor() { }

  ionViewDidEnter() {
    this.initMap(this.umnPos);
  }

  ngOnInit() {
  }

  initMap(pos: any) {
    console.log("initing map")
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
      console.log(mapsMouseEvent.latLng.toJSON().lat, mapsMouseEvent.latLng.toJSON().lng);
      this.infoWindow.open(this.map);
    });
  }

}
