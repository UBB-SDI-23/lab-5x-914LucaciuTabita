import { BookDTO } from "src/app/features/books/components/overview/models/books.models";

export interface Library {
    id: string;
    name: string;
    city: string;
    address: string;
    phoneNumber: string;
    capacity: string;
}

export interface AddLibraryDTO {
    name: string;
    city: string;
    address: string;
    phoneNumber: string;
    capacity: string;
}

export interface LibraryWithBorrowings {
    id: string;
    name: string;
    city: string;
    address: string;
    phoneNumber: string;
    capacity: string;
    borrowings: BorrowingDTO[];
}

export interface BorrowingDTO {
    bookId: string;
    libraryId: string;
    firstDate: string;
    lastDate: string;
}

export interface Borrowing {
    book: BookDTO;
    library: Library;
    firstDate: string;
    lastDate: string;
}