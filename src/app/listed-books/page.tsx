'use client';

import { BooksContext } from "@/context/BookContext";
import { useContext } from "react";
import { Book } from "@/types/bookType";
import BookCard from "@/components/homepage/BookCard";
import BookListCard from "@/components/listedBooks/BookListCard";


const ListedBookPage = () => {

    const { readBooks, wishlist } = useContext(BooksContext);

    return (
        <section className="py-10">
            <div className="container mx-auto">
                <div className="mb-10 text-center py-10 px-5 bg-mauve-200 rounded-2xl shadow-sm">
                    <h2 className="text-3xl font-bold text-[#131313] sm:text-4xl">
                        Listed Books
                    </h2>
                </div>
                {/* name of each tab group should be unique */}
                <div className="tabs tabs-lift">
                    <input type="radio" name="my_tabs_3" className="tab" aria-label={`Read Books ( ${readBooks.length} )`} defaultChecked />
                    <div className="tab-content bg-base-100 border-base-300 p-6">

                        { readBooks.length > 0 ?
                            readBooks.map((book: Book) => {
                                return <BookListCard key={book.bookId} book={book}></BookListCard>;
                            }) : (
                                <h4>No read book found...</h4>
                            )
                        }
                    </div>

                    <input type="radio" name="my_tabs_3" className="tab" aria-label={`Wishlist Books ( ${wishlist.length} )`} defaultChecked />
                    <div className="tab-content bg-base-100 border-base-300 p-6">

                        { wishlist.length > 0 ?
                           wishlist.map((book: Book) => {
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