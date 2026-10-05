'use client';

import { BooksContext } from "@/context/BookContext";
import { useContext, useState } from "react";
import { Book } from "@/types/bookType";
import BookCard from "@/components/homepage/BookCard";
import BookListCard from "@/components/listedBooks/BookListCard";


const ListedBookPage = () => {

    const { readBooks, wishlist } = useContext(BooksContext);

    const [sortBy, setSortBy] = useState<'' | 'rating' | 'pages' | 'year'>('');

    const sortBooks = (books: Book[]) => {
        const sortedBooks = [...books];

        if (sortBy === 'rating') {
            sortedBooks.sort((a, b) => b.rating - a.rating );
        }else if(sortBy === 'pages'){
            sortedBooks.sort((a, b) => b.totalPages - a.totalPages );
        }else if(sortBy === 'year'){
            sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing );
        }

        return sortedBooks;
    }

    const sortedReadBooks = sortBooks(readBooks);
    const sortedWishlistBooks = sortBooks(wishlist);


    return (
        <section className="py-10">
            <div className="container mx-auto">
                <div className="mb-10 text-center py-10 px-5 bg-mauve-200 rounded-2xl shadow-sm">
                    <h2 className="text-3xl font-bold text-[#131313] sm:text-4xl">
                        Listed Books
                    </h2>
                </div>

                {/* Sorting dropdown*/}
                <div className="text-center">

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as "" | "rating" | "pages" | "year")}
                        className="select select-success mb-10 justify-center font-medium text-[16px]"
                    >
                        <option value="" disabled>
                            Sort By
                        </option>

                        <option value="rating">Rating</option>
                        <option value="pages">Number of Pages</option>
                        <option value="year">Published Year</option>
                    </select>
                </div>

                {/* name of each tab group should be unique */}
                <div className="tabs tabs-lift">
                    <input type="radio" name="my_tabs_3" className="tab font-medium" aria-label={`Read Books ( ${readBooks.length} )`} defaultChecked />
                    <div className="tab-content bg-base-100 border-base-300 p-6">

                        {sortedReadBooks.length > 0 ?
                            sortedReadBooks.map((book: Book) => {
                                return <BookListCard key={book.bookId} book={book}></BookListCard>;
                            }) : (
                                <h4>No read book found...</h4>
                            )
                        }
                    </div>

                    <input type="radio" name="my_tabs_3" className="tab font-medium" aria-label={`Wishlist Books ( ${wishlist.length} )`} defaultChecked />
                    <div className="tab-content bg-base-100 border-base-300 p-6">

                        {sortedWishlistBooks.length > 0 ?
                            sortedWishlistBooks.map((book: Book) => {
                                return <BookListCard key={book.bookId} book={book}></BookListCard>;
                            }) : (
                                <h4>No wishlist book found...</h4>
                            )
                        }
                    </div>

                </div>
            </div>

        </section>
    );
};

export default ListedBookPage;