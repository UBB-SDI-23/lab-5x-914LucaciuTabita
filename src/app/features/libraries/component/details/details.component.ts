import { Component } from '@angular/core';
import { ApiService } from 'src/app/common/service/services.api.service.service';
import { ActivatedRoute } from '@angular/router';
import { BorrowingDTO, LibraryWithBorrowings } from '../overview/models/libraries.models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class LibrariesDetailsComponent {
  libraryId?: string;
  library!: LibraryWithBorrowings;
  borrowings: BorrowingDTO[] = [];

  constructor(private apiSvc: ApiService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.libraryId = params['id']
      this.apiSvc.getLibrary(this.libraryId!).subscribe((library: LibraryWithBorrowings) => {
        this.library = library;
      })
    });
  }
}
