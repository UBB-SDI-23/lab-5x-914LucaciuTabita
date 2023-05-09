import { Component } from '@angular/core';
import { ApiService } from 'src/app/common/service/services.api.service.service';
import { BorrowingDTO } from '../../libraries/component/overview/models/libraries.models';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class BorrowingsAddComponent {
  bookId?: string;
  libraryId?: string;
  firstDate?: string;
  lastDate?: string;
  constructor(private apiSvc: ApiService) {}
  addBorrowing(){
    if(this.bookId && this.libraryId && this.firstDate && this.lastDate) {
      const borrowing: BorrowingDTO = {
        bookId: this.bookId,
        libraryId: this.libraryId,
        firstDate: this.firstDate,
        lastDate: this.lastDate
      }
      this.apiSvc.addBorrowing(borrowing).subscribe(result => console.log(result));
      alert("Borrowing succesfully added");
      window.location.href="/borrowings";
    }
  }
}
