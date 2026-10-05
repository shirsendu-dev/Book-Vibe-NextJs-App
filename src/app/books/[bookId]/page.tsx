import Image from "next/image";
import { notFound } from "next/navigation";
import { Book } from "@/types/bookType";
import Link from "next/link";
import ReadButton from "@/components/bookDetails/ReadButton";
import WishlistButton from "@/components/bookDetails/WishlistButton";

export interface BookDetailPageProps {
    params: Promise<{
        bookId: string;
    }>;
}

const getBooks = async (): Promise<Book[]> => {
   const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);

    if (!response.ok) {
        throw new Error("Failed to fetch books");
    }

    return response.json();
};

const BookDetailPage = async ({ params }: BookDetailPageProps) => {

    const { bookId } = await params;
    const books = await getBooks();

    const book = books.find(
        (book: Book) => String(book.bookId) === bookId
    );

    if (!book) {
        notFound();
    }

    return (
        <main className="container mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">

                {/* Book Image */}
                <div className="flex min-h-[450px] items-center justify-center rounded-3xl bg-[#F3F3F3] p-8 sm:min-h-[550px] sm:p-12 lg:min-h-[100%]">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={420}
                        height={600}
                        priority
                        className="max-h-[520px] w-auto object-contain drop-shadow-xl"
                    />
                </div>

                {/* Book Information */}
                <div>
                    {/* Book Name */}
                    <h1 className="text-3xl font-bold leading-tight text-[#131313] sm:text-4xl lg:text-5xl font-[Playfair_Display]">
                        {book.bookName}
                    </h1>

                    {/* Author */}
                    <p className="mt-5 text-lg font-medium text-[#131313]/70">
                        By : {book.author}
                    </p>

                    <div className="my-6 border-t border-gray-200" />

                    {/* Category */}
                    <p className="text-lg font-medium text-[#131313]/80">
                        {book.category}
                    </p>

                    <div className="my-6 border-t border-gray-200" />

                    {/* Review */}
                    <div className="text-[#131313]/70">
                        <p className="leading-7">
                            <span className="font-bold text-[#131313]">
                                Review :
                            </span>{" "}
                            {book.review}
                        </p>
                    </div>

                    {/* Tags */}
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                        <span className="font-bold text-[#131313]">
                            Tag
                        </span>

                        {book.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-[#23BE0A]/10 px-4 py-2 text-sm font-semibold text-[#23BE0A]"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    <div className="my-7 border-t border-gray-200" />

                    {/* Book Metadata */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">

                        {/* Pages */}
                        <div className="flex items-center justify-between gap-4 border-b border-gray-100 pb-3">
                            <span className="text-sm sm:text-base text-[#131313]/60">
                                Pages
                            </span>

                            <span className="font-semibold text-[#131313]">
                                {book.totalPages}
                            </span>
                        </div>

                        {/* Publisher */}
                        <div className="flex items-center justify-between gap-4 border-b border-gray-100 pb-3">
                            <span className="text-sm sm:text-base text-[#131313]/60">
                                Publisher
                            </span>

                            <span className="font-semibold text-[#131313] text-right">
                                {book.publisher}
                            </span>
                        </div>

                        {/* Publishing Year */}
                        <div className="flex items-center justify-between gap-4 border-b border-gray-100 pb-3">
                            <span className="text-sm sm:text-base text-[#131313]/60">
                                Published
                            </span>

                            <span className="font-semibold text-[#131313]">
                                {book.yearOfPublishing}
                            </span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center justify-between gap-4 border-b border-gray-100 pb-3">
                            <span className="text-sm sm:text-base text-[#131313]/60">
                                Rating
                            </span>

                            <div className="flex items-center gap-1.5">
                                <span className="font-semibold text-[#131313]">
                                    {book.rating}
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

                    </div>
                    {/* Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4">

                        <ReadButton book={book}></ReadButton>

                        <WishlistButton book={book}></WishlistButton>

                        <Link
                            href="/books"
                            className="inline-flex items-center gap-2 rounded-lg border border-[#23BE0A] px-5 py-3 font-medium text-[#23BE0A] transition hover:bg-[#23BE0A] hover:text-black "
                        >
                            ← Back to All Books
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BookDetailPage;