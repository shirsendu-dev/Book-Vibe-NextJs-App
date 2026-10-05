'use client';

import { Book } from '@/types/bookType';
import React, { createContext, ReactNode, useState } from 'react';

export interface IBookContext {
    readBooks: Book[];
    setReadBooks: React.Dispatch<React.SetStateAction<Book[]>>;
    wishlist: Book[];
    setWishlist: React.Dispatch<React.SetStateAction<Book[]>>;
}

export const BooksContext = createContext<IBookContext>({
    readBooks:[],
    setReadBooks: () => {},
    wishlist: [],
    setWishlist: () => {}

});

const BooksProvider = ({ children }: { children: ReactNode }) => {

    const [readBooks, setReadBooks] = useState<Book[]>([]);
    const [wishlist, setWishlist] = useState<Book[]>([]);

    const sharedData = {
        readBooks,
        setReadBooks,
        wishlist,
        setWishlist
    }

    return (
        <BooksContext.Provider value={sharedData}>
            {children}
        </BooksContext.Provider>
    );
};

export default BooksProvider;