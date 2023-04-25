import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/common/service/services.api.service.service';
import {Author, Book, BookDTO} from '../overview/models/books.models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  bookId?: string;
  book?: BookDTO;
  author!: Author;

  constructor(private apiSvc: ApiService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.bookId = params['id']
      this.apiSvc.getBook(this.bookId!).subscribe((book: BookDTO) => {
        this.book = book;
      })
    });
  }
}
