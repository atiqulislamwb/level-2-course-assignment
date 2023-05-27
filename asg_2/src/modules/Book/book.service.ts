import IBook from "./book.interface";
import BookModel from "./book.schema"; // Import the Book model

//All find query set inside a async function

// task 2: Find all books with the genre "Fantasy"
BookModel.find({ genre: "Fantasy" }, (err: Error, books: IBook[]) => {
  if (err) {
    console.error("Error retrieving books:", err);
  } else {
    console.log("Books:", books);
  }
});

//task 3: Find books with genre "Sci-Fi" and published by "Roli Books"
BookModel.find(
  { genre: "Sci-Fi", "publisher.name": "Roli Books" },
  (err: Error, books: IBook[]) => {
    if (err) {
      console.error("Error retrieving books:", err);
    } else {
      console.log("Books:", books);
    }
  }
);

// task 4: invoke the static method
BookModel.findHighRatedBooks((err: Error, books: any) => {
  if (err) {
    console.error("Error retrieving high-rated books:", err);
  } else {
    console.log("High-rated Books:", books);
  }
});

//task 5 : Update prices of books published after 2020
BookModel.updateMany(
  { publicationYear: { $gt: 2020 }, price: { $type: "string" } },
  { $set: { price: { $toInt: "$price" } } },
  (err: any, result: any) => {
    if (err) {
      console.error("Error updating prices:", err);
    } else {
      console.log("Prices updated:", result);
    }
  }
);
