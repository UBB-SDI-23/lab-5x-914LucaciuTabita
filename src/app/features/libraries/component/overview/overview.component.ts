import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ApiService } from 'src/app/common/service/services.api.service.service';
import { Router } from '@angular/router';
import { Library } from './models/libraries.models';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class LibrariesOverviewComponent {
  libraries: Library[] = [];
  libraryToDelete: Library|undefined;
  id: string = '';
  dataSource: MatTableDataSource<Library> = new MatTableDataSource<Library>();

  // Define a MatSort object
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private apiSvc: ApiService, private router: Router, private changeDetectorRef: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.apiSvc.getLibraries().subscribe((result: Library[]) => {
      this.libraries = result;
      this.dataSource.data = this.libraries; // Initialize MatTableDataSource
      this.dataSource.sort = this.sort; // Bind the MatSort object to MatTableDataSource
    });
  }

  goToDetails(libraryId: string){
    this.router.navigateByUrl(`libraries/${libraryId}`)
  }

  goToAddLibrary(){
    this.router.navigateByUrl(`libraries/add`)
  }

  goToUpdateLibrary(){
    this.router.navigateByUrl(`libraries/update`)
  }

  deleteLibrary(libraryId: string): void {
    const libraryToDelete = this.libraries.find((library) => library.id === libraryId);
    const index = this.libraries.findIndex(library => library.id === libraryId);
    if (confirm(`Are you sure you want to delete the library called '${libraryToDelete?.name}'?`) && (index !== -1)) {
      this.libraries.splice(index, 1);
      alert("Library deleted successfully");
      this.apiSvc.deleteLibrary(libraryId).subscribe(
        (response: any) => {
          this.libraries = this.libraries.filter((library) => library.id !== libraryId);
          this.dataSource.data = this.libraries;
          alert("Library deleted successfully");
        }
      );
    }
  } 
  updateLibrary(libraryId : string){
    this.router.navigate(['/libraries/update', libraryId]);
  } 

  sortData(sort: any){
    const data = this.libraries.slice();
    if (!sort.active || sort.direction === '') {
      this.libraries = data; // Update the sorted data in your books array
      this.changeDetectorRef.detectChanges(); 
      return;
    }

    this.libraries = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return compare(a.id, b.id, isAsc);
        case 'biography':
          return compare(a.name, b.name, isAsc);
        case 'birthYear':
          return compare(a.city, b.city, isAsc);
        case 'email':
          return compare(a.address, b.address, isAsc);
        case 'name':
          return compare(a.phoneNumber, b.phoneNumber, isAsc);
        case 'nationality':
          return compare(a.capacity, b.capacity, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}