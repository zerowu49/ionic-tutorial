import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})

export class PlacesService {
  private places: Place[] = [
    {
      id: 'p1',
      title: 'UMN Apartment',
      description: 'Apartment for UMN Students',
      imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d7681f65459021.5af4ad1bc9b48.jpg',
      price: 500000
    },
    {
      id: 'p2',
      title: 'Serpong Apartment',
      description: 'Apartment for Everyone',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/American_Apartment_Building_-_Portland_Oregon.jpg/1200px-American_Apartment_Building_-_Portland_Oregon.jpg',
      price: 650000
    },
    {
      id: 'p3',
      title: 'JKT Apartment',
      description: 'Apartment for The Prime',
      imageUrl: 'https://images.rentals.ca/property-pictures/large/mississauga-on/286774/apartment-outdoor-building-1678234.jpg',
      price: 800000
    }
  ];
  constructor() { }

  getAllPlaces(){
    return [...this.places];
  }

  getPlace(placeId: string) {
    return {...this.places.find(place => {
        return place.id === placeId;
      })};
  }
}
