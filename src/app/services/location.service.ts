import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  location:string
  locationShwo:string=''
  constructor() { }
}
