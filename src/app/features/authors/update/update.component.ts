import { Component } from '@angular/core';
import { Author } from '../../books/components/overview/models/books.models';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/common/service/services.api.service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class AuthorsUpdateComponent {
  authorId: string | null = null;
  author: Author = {
    id: '',
    name: '',
    email: '',
    biography: '',
    nationality: '',
    birthYear: ''
  };

  constructor(private route: ActivatedRoute, private router: Router, private apiSvc: ApiService) {}

  ngOnInit(): void {
    this.authorId = this.route.snapshot.paramMap.get('authorId');
    if (this.authorId) {
      this.apiSvc.getAuthor(this.authorId).subscribe((author: Author) => {
        this.author = author;
      });
    }
  }

  updateAuthor(): void {
    if (this.author.id && this.author.name && this.author.email && this.author.biography && this.author.nationality && this.author.birthYear) {
      const updateAuthor: Author = {
        id: this.author.id,
        name: this.author.name,
        email: this.author.email,
        biography: this.author.biography,
        nationality: this.author.nationality,
        birthYear: this.author.birthYear
      };
      this.apiSvc.updateAuthor(updateAuthor).subscribe(result => {
        console.log(result);
        alert('Author succesfully updated!');
        window.location.href="/authors";
      });
    }
  }
}
