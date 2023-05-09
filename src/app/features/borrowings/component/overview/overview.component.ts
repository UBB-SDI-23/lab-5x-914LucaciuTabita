import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/common/service/services.api.service.service';
import { Borrowing, BorrowingDTO } from 'src/app/features/libraries/component/overview/models/libraries.models';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class BorrowingsOverviewComponent {
  borrowings: Borrowing[] = [];
  borrowingToDelete: BorrowingDTO|undefined;
  id: string = '';
  dataSource: MatTableDataSource<Borrowing> = new MatTableDataSource<Borrowing>();

  // Define a MatSort object
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private apiSvc: ApiService, private router: Router, private changeDetectorRef: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.apiSvc.getBorrowingsExtended().subscribe((result: Borrowing[]) => {
      this.borrowings = result;
      this.dataSource.data = this.borrowings; // Initialize MatTableDataSource
      this.dataSource.sort = this.sort; // Bind the MatSort object to MatTableDataSource
    });
  }

  goToDetails(bookId: string, libraryId: string){
    this.router.navigate(['borrowings/', bookId, libraryId])
  }

  goToAddBorrowing(){
    this.router.navigateByUrl(`borrowings/add`)
  }

  goToUpdateBorrowing(){
    this.router.navigateByUrl(`borrowings/update`)
  }

  deleteBorrowing(bookId: string, libraryId: string): void {
    const borrowingToDelete = this.borrowings.find((borrowing) => (borrowing.book.id === bookId && borrowing.library.id === libraryId));
    const index = this.borrowings.findIndex(borrowing => (borrowing.book.id === bookId && borrowing.library.id === libraryId));
    if (confirm(`Are you sure you want to delete this borrowing?`) && (index !== -1)) {
      this.borrowings.splice(index, 1);
      alert("Borrowing deleted successfully");
      this.apiSvc.deleteBorrowing(bookId, libraryId).subscribe(
        (response: any) => {
          this.borrowings = this.borrowings.filter((borrowing) => borrowing.book.id !== bookId && borrowing.library.id !== libraryId);
          this.dataSource.data = this.borrowings;
          alert("Borrowing deleted successfully");
        }
      );
    }
  }  
  updateBorrowing(bookId: string, libraryId:string){
    this.router.navigate(['/borrowings/update', bookId, libraryId]);
  }

  sortData(sort: any){
    const data = this.borrowings.slice();
    if (!sort.active || sort.direction === '') {
      this.borrowings = data; // Update the sorted data in your books array
      this.changeDetectorRef.detectChanges(); 
      return;
    }

    this.borrowings = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'bookId':
          return compare(a.book.id, b.book.id, isAsc);
        case 'libraryId':
          return compare(a.library.id, b.library.id, isAsc);
        case 'firstDate':
          return compare(a.firstDate, b.firstDate, isAsc);
        case 'lastDate':
          return compare(a.lastDate, b.lastDate, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}