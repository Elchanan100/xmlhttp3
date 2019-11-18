import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../../services/location.service';
import { ExtraSerService } from '../../../services/extra-ser.service';
import { modelUsers } from '../../../models/modelUser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 
  
  constructor(public  UsersService:ExtraSerService,public location:LocationService) { }

  ngOnInit() {
    this.UsersService.getUsersPosts()
  }
  clickOnUser(user:modelUsers){
     this.UsersService.currentUsers = user;
     this.location.location="shwoUserOptions"
   }
   
}
