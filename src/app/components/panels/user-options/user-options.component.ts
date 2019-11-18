import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../../services/location.service';

@Component({
  selector: 'app-user-options',
  templateUrl: './user-options.component.html',
  styleUrls: ['./user-options.component.css']
})
export class UserOptionsComponent implements OnInit {

  constructor(public location:LocationService) { }

  ngOnInit() {
  }
  myClickOfUserOptions(shwo:string){
    this.location.location='';
    this.location.locationShwo=shwo;
  }
}
