'use client';

import { BooksContext } from "@/context/BookContext";
import { Book } from "@/types/bookType";
import React, { useContext } from 'react';
import { toast } from "react-toastify";

const WishlistButton = ({ book }: { book: Book }) => {

    const {wishlist, setWishlist} = useContext(BooksContext);

    const handleAddToWishlist = () => {

        setWishlist([...wishlist, book]);

        toast.info(`You have added ${book.bookName} to your wishlist`);

    }
    return (
        <button 
        className="rounded-lg bg-[#59C6D2] px-7 py-3 font-medium text-black transition hover:bg-[#48b4c0] cursor-pointer" 
        onClick={() => handleAddToWishlist()}> 
        Add to Wishlist 
        </button>
    );
};

export default WishlistButton;