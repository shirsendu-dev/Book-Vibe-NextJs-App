import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

type Book = {
  bookId: number;
  bookName: string;
  author: string;
  image: string;
  rating: number;
  category: string;
  tags: string[];
};

const BookCard = ({ book }: { book: Book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    rating,
    category,
    tags,
  } = book;

  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Book Image */}
      <div className="relative flex h-[280px] items-center justify-center overflow-hidden rounded-xl bg-[#F3F3F3] p-8">
        <Image
          src={image}
          alt={bookName}
          width={180}
          height={240}
          className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="pt-5 font-[Playfair_Display]">

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#23BE0A]/10 px-4 py-2 text-sm font-medium text-[#23BE0A]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Book Name */}
        <h3 className="mb-2 text-xl font-bold text-[#131313]">
          {bookName}
        </h3>

        {/* Author */}
        <p className="text-sm font-medium text-[#131313]/70">
          By: {author}
        </p>

        {/* Divider */}
        <div className="my-5 border-t border-dashed border-gray-300" />

        {/* Bottom Info */}
        <div className="mb-5 flex items-center justify-between text-[#131313]/70">
          <span className="font-medium">
            {category}
          </span>

          <div className="flex items-center gap-2">
            <span className="font-medium">
              {rating}
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5 text-yellow-500"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 
                5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 
                3.527 1.258 5.273c.271 1.136-.964 2.033-1.96 
                1.425L12 18.354 7.372 21.18c-.996.608-2.231-.29-1.96-1.425l1.258-5.273
                -4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 
                2.082-5.006Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* View Details Button */}
        <Link
          href={`/books/${bookId}`}
          className="flex h-12 w-full items-center justify-center rounded-xl bg-[#48B4C0] font-medium text-black transition-all duration-200 hover:bg-[#1ea80a]"
        >
          View Details
        </Link>

      </div>
    </div>
  );
};

export default BookCard;