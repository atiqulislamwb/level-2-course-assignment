import { Schema, model } from "mongoose";
import IBook from "./book.interface";

// Schema for Book collection
const BookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  author: { type: [String], required: true },
  genre: { type: String, required: true },
  publicationYear: { type: Number, required: true },
  publisher: {
    name: { type: String, required: true },
    location: { type: String, required: true },
  },
  reviews: [
    {
      user: { type: String, required: true },
      comment: { type: String, required: true },
    },
  ],
  rating: { type: Number, required: true },
  price: { type: Number, required: true },
  featured: { type: String }, // New "featured" field
});

// task 4 : Static method to retrieve books with high ratings
BookSchema.static(
  "findHighRatedBooks",
  function (callback: (err: Error | null, books?: IBook[]) => void): void {
    this.find({ rating: { $gte: 4 } }, callback);
  }
);

// Create a Model.
const BookModel = model<IBook>("Book", BookSchema);
export default BookModel;
