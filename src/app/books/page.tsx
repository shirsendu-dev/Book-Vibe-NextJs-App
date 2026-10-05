import BookCard from "@/components/homepage/BookCard";
import { Book } from "@/types/bookType";


const getBooks = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }
  const data = await response.json();

  return data;
};

const Books = async () => {
  const books = await getBooks();

  return (
    <section className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">

      {/* Heading */}
      <div className="mb-10 text-center py-10 px-5 bg-mauve-200 rounded-2xl shadow-sm">
        <h2 className="text-3xl font-bold text-[#131313] sm:text-4xl">
          All Books
        </h2>

        {/* <p className="mx-auto mt-3 max-w-xl text-[#131313]/60">
          Explore our collection and discover your next favorite book.
        </p> */}
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {books.map((book: Book) => (
          <BookCard
            key={book.bookId}
            book={book}
          />
        ))}
      </div>

    </section>
  );
};

export default Books;