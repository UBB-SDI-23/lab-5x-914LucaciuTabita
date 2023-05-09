import { Component } from '@angular/core';
import { Borrowing, BorrowingDTO } from '../../libraries/component/overview/models/libraries.models';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/common/service/services.api.service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class BorrowingsUpdateComponent {
  bookId: string | null = null;
  libraryId: string | null = null;
  borrowing: Borrowing = {
    book: {
      id: '',
      title: '',
      genre: '',
      type: '',
      description: '',
      pages: '',
      authorId: ''},
    library: {
      id: '',
      name: '',
      city: '',
      address: '',
      phoneNumber: '',
      capacity: ''
    },
    firstDate: '',
    lastDate: ''
  };

  constructor(private route: ActivatedRoute, private router: Router, private apiSvc: ApiService) {}

  ngOnInit(): void {
    this.bookId = this.route.snapshot.paramMap.get('bookId');
    this.libraryId = this.route.snapshot.paramMap.get('libraryId');
    if (this.bookId && this.libraryId) {
      this.apiSvc.getBorrowing(this.bookId, this.libraryId).subscribe((borrowing: Borrowing) => {
        this.borrowing = borrowing;
      });
    }
  }

  updateBorrowing(): void {
    if (this.borrowing.book.id && this.borrowing.library.id && this.borrowing.firstDate && this.borrowing.lastDate) {
      const updateBorrowing: BorrowingDTO = {
        bookId: this.borrowing.book.id,
        libraryId: this.borrowing.library.id,
        firstDate: this.borrowing.firstDate,
        lastDate: this.borrowing.lastDate
      };
      this.apiSvc.updateBorrowing(updateBorrowing).subscribe(result => {
        console.log(result);
        alert('Borrowing succesfully updated!');
        window.location.href="/borrowings";
      });
    }
  }
}
