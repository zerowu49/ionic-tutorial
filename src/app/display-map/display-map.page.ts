import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var google: any

@Component({
  selector: 'app-display-map',
  templateUrl: './display-map.page.html',
  styleUrls: ['./display-map.page.scss'],
})
export class DisplayMapPage implements OnInit {
  map: any
  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef
  umnPos: any = {
    lat: -6.256081,
    lng: 106.618755
  };

  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.showMap(this.umnPos)
  }

  showMap(pos: any) {
    const location = new google.maps.LatLng(pos.lat, pos.lng);
    const options = {
      center: location,
      zoom: 13,
      disableDefaultUI: true
    };
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);

    // The marker, positioned at UMN
    const marker = new google.maps.Marker({
      position: this.umnPos,
      map: this.map,
    });
  }

}
