import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './common/home/home.component';
import { OverviewComponent } from './features/books/components/overview/overview.component';

import { AddComponent } from './features/books/add/add.component';
import { DetailsComponent } from './features/books/components/details/details.component';
import { FilterComponent } from './features/books/filter/filter.component';

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
    path: "books/filter",
    component: FilterComponent
  },
  {
    path: "books/add",
    component: AddComponent
  },
  {
    path: "books/:id",
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
