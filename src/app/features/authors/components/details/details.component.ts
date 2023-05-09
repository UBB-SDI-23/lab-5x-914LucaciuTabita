import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/common/service/services.api.service.service';
import { Author, AuthorWithBooks, BookDTO } from 'src/app/features/books/components/overview/models/books.models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class AuthorsDetailsComponent implements OnInit {
  authorId?: string;
  author!: AuthorWithBooks;
  books: BookDTO[] = [];

  constructor(private apiSvc: ApiService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.authorId = params['id']
      this.apiSvc.getAuthor(this.authorId!).subscribe((author: AuthorWithBooks) => {
        this.author = author;
      })
    });
  }
}
