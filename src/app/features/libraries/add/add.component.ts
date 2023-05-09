import { Component } from '@angular/core';
import { ApiService } from 'src/app/common/service/services.api.service.service';
import { AddLibraryDTO } from '../component/overview/models/libraries.models';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class LibrariesAddComponent {
  name?: string;
  city?: string;
  address?: string;
  phoneNumber?: string;
  capacity?: string;
  constructor(private apiSvc: ApiService, private router : Router) {}
  addLibrary(){
    if(this.name && this.city && this.address && this.phoneNumber && this.capacity) {
      const library: AddLibraryDTO = {
        name: this.name,
        city: this.city,
        address: this.address,
        phoneNumber: this.phoneNumber,
        capacity: this.capacity
      }
      this.apiSvc.addLibrary(library).subscribe(result => console.log(result));
      this.router.navigate(["/libraries"]).then(() => alert("Library successfully added"));
    }
  }
}
