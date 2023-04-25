export interface Author {
    id: string;
    name: string;
    email: string;
    biography: string;
    nationality: string;
    birthYear: string;
}

export interface BookDTO {
    id: string;
    title: string;
    genre: string;
    type: string;
    description: string;
    pages: string;
    author: Author;
}

export interface Book {
    id: string;
    title: string;
    genre: string;
    type: string;
    description: string;
    pages: string;
    authorId: string;
}

export interface AddBookDto {
    title: string;
    genre: string;
    type: string;
    description: string;
    pages: string;
    authorId: number;
}