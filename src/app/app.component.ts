import { Component } from '@angular/core';
import { LocationService } from './services/location.service';
import { ExtraSerService } from './services/extra-ser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'xmlhttp3';
  constructor(public  UsersService:ExtraSerService,public location:LocationService){}
}
