import { Component } from '@angular/core';
import { ApiService } from 'src/app/common/service/services.api.service.service';
import { AddBookDto } from '../components/overview/models/books.models';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  title?: string;
  genre?: string;
  type?: string;
  description?: string;
  pages?: string;
  authorId?: number;

  constructor(private apiSvc: ApiService) {}
  addBook(){
    if(this.title && this.genre && this.type && this.description && this.pages && this.authorId) {
      const book: AddBookDto = {
        title: this.title,
        genre: this.genre,
        type: this.type,
        description: this.description,
        pages: this.pages,
        authorId: this.authorId
      }
      this.apiSvc.addBook(book).subscribe(result => console.log(result));
      alert("Succesfully added");
    }
  }
}
