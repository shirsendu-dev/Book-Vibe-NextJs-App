'use client';

import { BooksContext } from "@/context/BookContext";
import { Book } from "@/types/bookType";
import React, { useContext } from 'react';
import { toast } from "react-toastify";

const ReadButton = ({ book }: { book: Book }) => {

    const {readBooks, setReadBooks} = useContext(BooksContext);

    const handleReadBook = () => {
        // console.log('Read Book btn triggered', book);

        setReadBooks([...readBooks, book]);

        toast.success(`You have read ${book.bookName}`);

    }
    return (
        <button 
        className="rounded-lg border border-[#131313]/30 px-7 py-3 font-medium text-[#131313] transition hover:border-[#23BE0A] hover:text-[#23BE0A] cursor-pointer" 
        onClick={() => handleReadBook()}
        > 
        Read Book
        </button>
    );
};

export default ReadButton;