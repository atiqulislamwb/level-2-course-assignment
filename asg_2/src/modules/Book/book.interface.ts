import { Model } from "mongoose";

// Interface for Book document
interface IBook {
  title: string;
  author: string[];
  genre: string;
  publicationYear: number;
  publisher: {
    name: string;
    location: string;
  };
  reviews: {
    user: string;
    comment: string;
  }[];
  rating: number;
  price: number;
  featured: string; //New "featured" field
}
interface IBookModel extends Model<IBook> {
  findHighRatedBooks(
    callback: (err: Error | null, books?: IBook[]) => void
  ): void;
}
export default IBook;
