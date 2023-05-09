import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookDTO, Book } from '../components/overview/models/books.models';
import { ApiService } from 'src/app/common/service/services.api.service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  bookId: string | null = null;
  book: Book = {
    id: '',
    title: '',
    genre: '',
    type: '',
    description: '',
    pages: '',
    author: {
      id: '',
      name: '',
      email: '',
      biography: '',
      nationality: '',
      birthYear: ''
    }
  };

  constructor(private route: ActivatedRoute, private router: Router, private apiSvc: ApiService) {}

  ngOnInit(): void {
    this.bookId = this.route.snapshot.paramMap.get('bookId');
    if (this.bookId) {
      this.apiSvc.getBook(this.bookId).subscribe((book: Book) => {
        this.book = book;
      });
    }
  }

  updateBook(): void {
    if (this.book.id && this.book.title && this.book.genre && this.book.type && this.book.description && this.book.pages && this.book.author.id) {
      const updateBook: BookDTO = {
        id: this.book.id,
        title: this.book.title,
        genre: this.book.genre,
        type: this.book.type,
        description: this.book.description,
        pages: this.book.pages,
        authorId: this.book.author.id
      };
      this.apiSvc.updateBook(updateBook).subscribe(result => {
        console.log(result);
        alert('Book succesfully updated!');
      });
    }
  }
}
