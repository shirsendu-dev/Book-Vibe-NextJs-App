import { headers } from "next/headers";
import { Book } from "@/types/bookType";
import BookCard from "@/components/homepage/BookCard";

// Do not prerender this page during build
export const dynamic = "force-dynamic";

const getBooks = async (): Promise<Book[]> => {
  const headersList = await headers();

  const host = headersList.get("host");
  const protocol =
    headersList.get("x-forwarded-proto") || "http";

  if (!host) {
    throw new Error("Unable to determine current host");
  }

  const baseUrl = `${protocol}://${host}`;

  const response = await fetch(
    `${baseUrl}/booksData.json`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }

  return response.json();
};

const BooksPage = async () => {
  const books = await getBooks();

  return (
    <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-[#131313] sm:text-4xl">
          All Books
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <BookCard
            key={book.bookId}
            book={book}
          />
        ))}
      </div>
    </section>
  );
};

export default BooksPage;