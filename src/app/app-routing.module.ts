import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './common/home/home.component';
import { OverviewComponent } from './features/books/components/overview/overview.component';

import { AddComponent } from './features/books/add/add.component';
import { DetailsComponent } from './features/books/components/details/details.component';
import { FilterComponent } from './features/books/filter/filter.component';
import { UpdateComponent } from './features/books/update/update.component';
import { AuthorsOverviewComponent } from './features/authors/components/overview/overview.component';
import { AuthorsDetailsComponent } from './features/authors/components/details/details.component';
import { AuthorsAddComponent } from './features/authors/add/add.component';
import { AuthorsUpdateComponent } from './features/authors/update/update.component';
import { LibrariesOverviewComponent } from './features/libraries/component/overview/overview.component';
import { LibrariesUpdateComponent } from './features/libraries/update/update.component';
import { LibrariesAddComponent } from './features/libraries/add/add.component';
import { LibrariesDetailsComponent } from './features/libraries/component/details/details.component';
import { BorrowingsOverviewComponent } from './features/borrowings/component/overview/overview.component';
import { BorrowingsUpdateComponent } from './features/borrowings/update/update.component';
import { BorrowingsAddComponent } from './features/borrowings/add/add.component';
import { BorrowingsDetailsComponent } from './features/borrowings/component/details/details.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "books",
    component: OverviewComponent
  },
  {
    path: "books",
    component: UpdateComponent
  },
  {
    path: "books/add",
    component: AddComponent
  },
  {
    path: "books/update",
    component: UpdateComponent
  },
  {
    path: "books/update/:bookId",
    component: UpdateComponent
  },
  {
    path: "books/filter",
    component: FilterComponent
  },
  {
    path: "books/:id",
    component: DetailsComponent
  },
  {
    path: "authors",
    component: AuthorsOverviewComponent
  },
  {
    path: "authors/update",
    component: AuthorsUpdateComponent
  },{
    path: "authors/update/:authorId",
    component: AuthorsUpdateComponent
  },
  {
    path: "authors/add",
    component: AuthorsAddComponent
  },
  {
    path: "authors/:id",
    component: AuthorsDetailsComponent
  },
  {
    path: "libraries",
    component: LibrariesOverviewComponent
  },
  {
    path: "libraries/update",
    component: LibrariesUpdateComponent
  },
  {
    path: "libraries/update/:libraryId",
    component: LibrariesUpdateComponent
  },
  {
    path: "libraries/add",
    component: LibrariesAddComponent
  },
  {
    path: "libraries/:id",
    component: LibrariesDetailsComponent
  },
  {
    path: "borrowings",
    component: BorrowingsOverviewComponent
  },
  {
    path: "borrowings/update",
    component: BorrowingsUpdateComponent
  },
  {
    path: "borrowings/update/:bookId/:libraryId",
    component: BorrowingsUpdateComponent
  },
  {
    path: "borrowings/add",
    component: BorrowingsAddComponent
  },
  {
    path: "borrowings/:bookId/:libraryId",
    component: BorrowingsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
