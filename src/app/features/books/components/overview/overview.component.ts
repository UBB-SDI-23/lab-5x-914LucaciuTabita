import { Component, OnInit, ViewChild } from '@angular/core';
import { Book } from './models/books.models';
import { ApiService } from 'src/app/common/service/services.api.service.service';
import { Router } from '@angular/router';
import { Sort } from '@angular/material/sort';
import { MatSort } from '@angular/material/sort'; // Import MatSort
import { MatTableDataSource } from '@angular/material/table'; // Import MatTableDataSource
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule for routerLink

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  books: Book[] = [];
  dataSource: MatTableDataSource<Book> = new MatTableDataSource<Book>();

  // Define a MatSort object
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private apiSvc: ApiService, private router: Router) {}
  ngOnInit(): void {
    this.apiSvc.getBooks().subscribe((result: Book[]) => {
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

  sortData(sort: any){
    const data = this.books.slice();
    if (!sort.active || sort.direction === '') {
      this.books = data; // Update the sorted data in your books array
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