import Image from "next/image";
import BannerImage from "@/assets/banner-image.png";
import Link from "next/link";

const Banner = () => {
    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6">
            <div className="relative overflow-hidden rounded-[32px] bg-base-200">

                {/* Decorative background */}
                <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-success/10 blur-3xl" />
                <div className="absolute -bottom-28 -left-20 w-80 h-80 rounded-full bg-info/10 blur-3xl" />

                <div className="relative z-10 flex flex-col lg:flex-row items-center min-h-[520px] lg:min-h-[560px] px-6 sm:px-10 lg:px-16 py-12 lg:py-16 gap-10 lg:gap-16">

                    {/* Content */}
                    <div className="w-[60%]">

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-7xl font-bold leading-[1.05] tracking-tight">
                            Books to Freshen Up
                            <span className="block mt-2 text-success">
                                Your Bookshelf
                            </span>
                        </h1>

                        <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
                            <Link href={`/#library`}>
                                <button className="btn bg-[#1FA80A] text-black text-[16px] font-medium rounded-[10px] px-6 py-7">
                                    View the List
                                </button>
                            </Link>


                        </div>
                    </div>

                    {/* Image */}
                    <div className="w-full lg:w-[40%] flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[520px] h-[320px] sm:h-[400px] lg:h-[480px]">
                            <Image
                                src={BannerImage}
                                alt="Books collection"
                                fill
                                priority
                                sizes="(max-width: 1024px) 90vw, 45vw"
                                className="object-contain"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;