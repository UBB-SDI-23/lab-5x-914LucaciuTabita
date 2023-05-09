import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './common/home/home.component';
import { OverviewComponent } from './features/books/components/overview/overview.component';
import { DetailsComponent } from './features/books/components/details/details.component';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './features/books/add/add.component';
import { FilterComponent } from './features/books/filter/filter.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { UpdateComponent } from './features/books/update/update.component';
import { AuthorsOverviewComponent } from './features/authors/components/overview/overview.component';
import { AuthorsDetailsComponent } from './features/authors/components/details/details.component';
import { AuthorsAddComponent } from './features/authors/add/add.component';
import { AuthorsUpdateComponent } from './features/authors/update/update.component';
import { LibrariesOverviewComponent } from './features/libraries/component/overview/overview.component';
import { LibrariesAddComponent } from './features/libraries/add/add.component';
import { LibrariesDetailsComponent } from './features/libraries/component/details/details.component';
import { LibrariesUpdateComponent } from './features/libraries/update/update.component';
import { BorrowingsOverviewComponent } from './features/borrowings/component/overview/overview.component';
import { BorrowingsDetailsComponent } from './features/borrowings/component/details/details.component';
import { BorrowingsAddComponent } from './features/borrowings/add/add.component';
import { BorrowingsUpdateComponent } from './features/borrowings/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OverviewComponent,
    DetailsComponent,
    AddComponent,
    FilterComponent,
    UpdateComponent,
    AuthorsOverviewComponent,
    AuthorsDetailsComponent,
    AuthorsAddComponent,
    AuthorsUpdateComponent,
    LibrariesOverviewComponent,
    LibrariesDetailsComponent,
    LibrariesAddComponent,
    LibrariesUpdateComponent,
    BorrowingsOverviewComponent,
    BorrowingsDetailsComponent,
    BorrowingsAddComponent,
    BorrowingsUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSortModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
