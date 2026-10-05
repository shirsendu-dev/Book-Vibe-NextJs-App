import Image from "next/image";
import Link from "next/link";
import { Book } from "@/types/bookType";

const BookListCard = ({ book }: { book: Book }) => {
    const {
        bookId,
        bookName,
        author,
        image,
        category,
        tags,
        rating,
        publisher,
        totalPages,
        yearOfPublishing,
    } = book;

    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 space-y-10 transition duration-300 hover:shadow-lg">
            <div className="flex flex-col gap-6 sm:flex-row">

                {/* Book Image */}
                <div className="flex w-full shrink-0 items-center justify-center rounded-xl bg-[#F3F3F3] p-6 sm:w-[230px]">
                    <Image
                        src={image}
                        alt={bookName}
                        width={150}
                        height={210}
                        className="h-[200px] w-auto object-contain"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between">

                    {/* Top */}
                    <div>
                        <h2 className="text-2xl font-bold text-[#131313]">
                            {bookName}
                        </h2>

                        <p className="mt-2 font-medium text-[#131313]/60">
                            By : {author}
                        </p>

                        {/* Tags + Year */}
                        <div className="mt-5 flex flex-wrap items-center gap-3">
                            <span className="font-semibold text-[#131313]">
                                Tag
                            </span>

                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-[#23BE0A]/10 px-4 py-2 text-sm font-medium text-[#23BE0A]"
                                >
                                    #{tag}
                                </span>
                            ))}

                            <div className="flex items-center gap-2 text-sm text-[#131313]/60 sm:ml-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className="size-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 21s6-4.35 6-10a6 6 0 1 0-12 0c0 5.65 6 10 6 10Z"
                                    />
                                    <circle cx="12" cy="11" r="2" />
                                </svg>

                                <span>
                                    Year of Publishing:{" "}
                                    <span className="font-semibold">
                                        {yearOfPublishing}
                                    </span>
                                </span>
                            </div>
                        </div>

                        {/* Publisher + Pages */}
                        <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3 text-[#131313]/60">

                            {/* Publisher */}
                            <div className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className="size-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                                    />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>

                                <span>
                                    Publisher:{" "}
                                    <span className="font-medium">
                                        {publisher}
                                    </span>
                                </span>
                            </div>

                            {/* Pages */}
                            <div className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className="size-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"
                                    />
                                </svg>

                                <span>
                                    Page{" "}
                                    <span className="font-medium">
                                        {totalPages}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="my-5 border-t border-gray-200" />

                    {/* Bottom Buttons */}
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-blue-500/10 px-5 py-2.5 font-medium text-blue-500">
                            Category: {category}
                        </span>

                        <span className="rounded-full bg-yellow-500/15 px-5 py-2.5 font-medium text-yellow-600">
                            Rating: {rating}
                        </span>

                        <Link
                            href={`/books/${bookId}`}
                            className="rounded-full bg-[#23BE0A] px-6 py-2.5 font-medium text-white transition hover:bg-[#1ea80a]"
                        >
                            View Details
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookListCard;