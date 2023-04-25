import { Component } from '@angular/core';
import { ApiService } from 'src/app/common/service/services.api.service.service';
import { Book } from '../components/overview/models/books.models';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  authorname?: string;
  filteredBooks: Book[] = [];

  constructor(private apiSvc: ApiService) {}
  filterBooks(){
    if (this.authorname) {
      this.apiSvc.filterBooks(this.authorname).subscribe(
        (books: Book[]) => {
          this.filteredBooks = books;
        },
        (error: any) => {
          console.error('Failed to filter books by author name', error);
        }
      );
    } else {
      // Clear the filteredBooks array if authorname is empty
      this.filteredBooks = [];
    }
  }

  onSubmit() {
    // Call filterBooks() when form is submitted
    this.filterBooks();
  }

  onClear() {
    // Clear the filteredBooks array and reset the form
    this.filteredBooks = [];
    this.authorname = '';
  }
}