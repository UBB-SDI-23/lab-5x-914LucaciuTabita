import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/common/service/services.api.service.service';
import { BookDTO } from 'src/app/features/books/components/overview/models/books.models';
import { Borrowing, Library } from 'src/app/features/libraries/component/overview/models/libraries.models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class BorrowingsDetailsComponent {
  bookId?: string;
  libraryId?: string;
  borrowing!: Borrowing;

  constructor(private apiSvc: ApiService, private activatedRoute: ActivatedRoute,private  router : Router){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.bookId = params['bookId']
      this.libraryId = params['libraryId']
      this.apiSvc.getBorrowing(this.bookId!, this.libraryId!).subscribe((borrowing: Borrowing) => {
        this.borrowing = borrowing;
      })
    });
  }     
  
  goBack(){
    this.router.navigate(["/borrowings"]);
  }
}
