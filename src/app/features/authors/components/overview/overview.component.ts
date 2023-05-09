import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/common/service/services.api.service.service';
import { Author } from 'src/app/features/books/components/overview/models/books.models';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class AuthorsOverviewComponent {
  authors: Author[] = [];
  authorToDelete: Author|undefined;
  id: string = '';
  dataSource: MatTableDataSource<Author> = new MatTableDataSource<Author>();

  // Define a MatSort object
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private apiSvc: ApiService, private router: Router, private changeDetectorRef: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.apiSvc.getAuthors().subscribe((result: Author[]) => {
      this.authors = result;
      this.dataSource.data = this.authors; // Initialize MatTableDataSource
      this.dataSource.sort = this.sort; // Bind the MatSort object to MatTableDataSource
    });
  }

  goToDetails(authorId: string){
    this.router.navigateByUrl(`authors/${authorId}`)
  }

  goToAddAuthor(){
    this.router.navigateByUrl(`authors/add`)
  }

  goToUpdateAuthor(){
    this.router.navigateByUrl(`authors/update`)
  }

  deleteAuthor(authorId: string): void {
    const authorToDelete = this.authors.find((author) => author.id === authorId);
    const index = this.authors.findIndex(author => author.id === authorId);
    if (confirm(`Are you sure you want to delete the author called '${authorToDelete?.name}'?`) && (index !== -1)) {
      this.authors.splice(index, 1);
      alert("Author deleted successfully");
      this.apiSvc.deleteAuthor(authorId).subscribe(
        (response: any) => {
          this.authors = this.authors.filter((author) => author.id !== authorId);
          this.dataSource.data = this.authors;
          alert("Author deleted successfully");
        }
      );
    }
  }  

  updateAuthor(authorId: string) {
    this.router.navigate(['/authors/update', authorId]);
  }

  sortData(sort: any){
    const data = this.authors.slice();
    if (!sort.active || sort.direction === '') {
      this.authors = data; // Update the sorted data in your books array
      this.changeDetectorRef.detectChanges(); 
      return;
    }

    this.authors = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return compare(a.id, b.id, isAsc);
        case 'biography':
          return compare(a.biography, b.biography, isAsc);
        case 'birthYear':
          return compare(a.birthYear, b.birthYear, isAsc);
        case 'email':
          return compare(a.email, b.email, isAsc);
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'nationality':
          return compare(a.nationality, b.nationality, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}