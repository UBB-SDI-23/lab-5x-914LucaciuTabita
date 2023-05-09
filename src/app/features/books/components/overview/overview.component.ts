import { Component, OnInit, ViewChild } from '@angular/core';
import { BookDTO } from './models/books.models';
import { ApiService } from 'src/app/common/service/services.api.service.service';
import { Router } from '@angular/router';
import { Sort } from '@angular/material/sort';
import { MatSort } from '@angular/material/sort'; // Import MatSort
import { MatTableDataSource } from '@angular/material/table'; // Import MatTableDataSource
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule for routerLink
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  books: BookDTO[] = [];
  bookToDelete: BookDTO|undefined;
  id: string = '';
  dataSource: MatTableDataSource<BookDTO> = new MatTableDataSource<BookDTO>();

  // Define a MatSort object
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private apiSvc: ApiService, private router: Router, private changeDetectorRef: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.apiSvc.getBooks().subscribe((result: BookDTO[]) => {
      this.books = result;
      this.dataSource.data = this.books; // Initialize MatTableDataSource
      this.dataSource.sort = this.sort; // Bind the MatSort object to MatTableDataSource
    });
  }

  goToDetails(bookId: string){
    this.router.navigateByUrl(`books/${bookId}`)
  }

  goToAdd(){
    this.router.navigateByUrl(`books/add`)
  }

  goToFilter(){
    this.router.navigateByUrl(`books/filter`)
  }

  goToUpdate(){
    this.router.navigateByUrl(`books/update`)
  }

  // updateBook(book: BookDTO): void {
  //   this.apiSvc.updateBook(book).subscribe(
  //     (updatedBook: BookDTO) => {
  //       const index = this.books.findIndex((b) => b.id === updatedBook.id);
  //       if (index !== -1) {
  //         this.books[index] = updatedBook;
  //       }
  //       this.router.navigate([`/books/${updatedBook.id}`]);
  //     },
  //     (error: any) => {
  //       console.log(error);
  //     }
  //   );
  // }

  // deleteBook(bookId: string): void {
  //   if (confirm("Are you sure you want to delete this book?")) {
  //     this.apiSvc.deleteBook(bookId).subscribe(
  //       (response: any) => {
  //         console.log();
  //         this.books = this.books.filter((book) => book.id !== bookId);
  //         console.log();
  //         this.dataSource.data = this.books;
  //         console.log();
  //         console.log(this.dataSource.data); 
  //         alert("Book deleted successfully");
  //       },
  //       (error: any) => {
  //         console.error("Failed to delete book:", error);
  //         alert("Failed to delete book");
  //       }
  //     );
  //   }
  // }  

  // deleteBook(id: string) {
  //   const index = this.books.findIndex(book => book.id === id);
  //   if (index !== -1) {
  //     this.books.splice(index, 1);
  //     alert("Book deleted successfully");
  //   }
  //   else{
  //     alert("Failed to delete book");
  //   }
  // }
  

  deleteBook(bookId: string): void {
    const bookToDelete = this.books.find((book) => book.id === bookId);
    const index = this.books.findIndex(book => book.id === bookId);
    if (confirm(`Are you sure you want to delete the book '${bookToDelete?.title}'?`) && (index !== -1)) {
      this.books.splice(index, 1);
      alert("Book deleted successfully");
      this.apiSvc.deleteBook(bookId).subscribe(
        (response: any) => {
          this.books = this.books.filter((book) => book.id !== bookId);
          this.dataSource.data = this.books;
          // this.ngOnInit();
          alert("Book deleted successfully");
        }
        // },
        // (error: any) => {
        //   console.error("Failed to delete book:", error);
        //   alert("Failed to delete book");
        // }
      );
    }
  }  
  updateBook(bookId: string) : void{
    this.router.navigate(['/books/update', bookId]);
  }

  // deleteBook(bookId: string): void {
  //   console.log(bookId);
  //   this.apiSvc.deleteBook(bookId).subscribe((result)=>{
  //     // console.log(result);
  //     this.apiSvc.getBooks().subscribe((result: Book[]) => {
  //       this.books = result;
  //       this.dataSource.data = this.books; // Initialize MatTableDataSource
  //       this.dataSource.sort = this.sort; // Bind the MatSort object to MatTableDataSource
  //     });
  //   })
  // }

  sortData(sort: any){
    const data = this.books.slice();
    if (!sort.active || sort.direction === '') {
      this.books = data; // Update the sorted data in your books array
      this.changeDetectorRef.detectChanges(); 
      return;
    }

    this.books = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return compare(a.id, b.id, isAsc);
        case 'title':
          return compare(a.title, b.title, isAsc);
        case 'genre':
          return compare(a.genre, b.genre, isAsc);
        case 'type':
          return compare(a.type, b.type, isAsc);
        case 'description':
          return compare(a.description, b.description, isAsc);
        case 'pages':
          return compare(a.pages, b.pages, isAsc);
        case 'authorId':
          return compare(a.authorId, b.authorId, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}