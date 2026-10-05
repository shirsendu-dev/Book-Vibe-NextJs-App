"use client";

import { useEffect, useState } from "react";
import { Book } from "@/types/bookType";
import BookCard from "./BookCard";

const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await fetch("/booksData.json");

        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }

        const data: Book[] = await response.json();

        setBooks(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getBooks();
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center">
        Loading books...
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">

      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-[#131313] sm:text-4xl">
          Books
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-[#131313]/60">
          Explore our collection and discover your next favorite book.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {books.slice(0, 6).map((book) => (
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