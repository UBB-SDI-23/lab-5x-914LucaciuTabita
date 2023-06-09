import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/common/service/services.api.service.service';
import {Author, BookDTO, Book} from '../overview/models/books.models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  bookId?: string;
  book?: Book;
  author!: Author;

  constructor(private apiSvc: ApiService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.bookId = params['id']
      this.apiSvc.getBook(this.bookId!).subscribe((book: Book) => {
        this.book = book;
      })
    });
  }
}
