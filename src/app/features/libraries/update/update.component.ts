import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/common/service/services.api.service.service';
import { Library } from '../component/overview/models/libraries.models';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class LibrariesUpdateComponent {
  libraryId: string | null = null;
  library: Library = {
    id: '',
    name: '',
    city: '',
    address: '',
    phoneNumber: '',
    capacity: ''
  };

  constructor(private route: ActivatedRoute, private router: Router, private apiSvc: ApiService) {}

  ngOnInit(): void {
    this.libraryId = this.route.snapshot.paramMap.get('libraryId');
    if (this.libraryId) {
      this.apiSvc.getLibrary(this.libraryId).subscribe((library: Library) => {
        this.library = library;
      });
    }
  }

  updateLibrary(): void {
    if (this.library.id && this.library.name && this.library.city && this.library.address && this.library.phoneNumber && this.library.capacity) {
      const updateLibrary: Library = {
        id: this.library.id,
        name: this.library.name,
        city: this.library.city,
        address: this.library.address,
        phoneNumber: this.library.phoneNumber,
        capacity: this.library.capacity
      };
      this.apiSvc.updateLibrary(updateLibrary).subscribe(result => {
        console.log(result);
        this.router.navigate(["/libraries"]).then(() => alert("Library successfully updated"));
      });
    }
  }
}
