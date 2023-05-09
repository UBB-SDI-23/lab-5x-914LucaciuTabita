import {Component} from '@angular/core';
import {ApiService} from 'src/app/common/service/services.api.service.service';
import {AddAuthorDTO, Author} from '../../books/components/overview/models/books.models';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AuthorsAddComponent {
  name?: string;
  email?: string;
  biography?: string;
  nationality?: string;
  birthYear?: string;

  constructor(private apiSvc: ApiService, private router: Router) {
  }

  addAuthor() {
    if (this.name && this.email && this.biography && this.nationality && this.birthYear) {
      const author: AddAuthorDTO = {
        name: this.name,
        email: this.email,
        biography: this.biography,
        nationality: this.nationality,
        birthYear: this.birthYear
      }
      this.apiSvc.addAuthor(author).subscribe(result => console.log(result));
      this.router.navigate(["/authors"]).then(() => alert("Author successfully added"));
    }
  }
}
