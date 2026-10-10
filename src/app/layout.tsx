import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import BooksProvider from "@/context/BookContext";
import { ToastContainer } from "react-toastify";
import { ScrollBehavior } from "next/dist/client/components/router-reducer/router-reducer-types";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playFair = Playfair_Display({
  weight: ['400', '500', '900'],
  subsets: ["latin"]
});

const workSans = Work_Sans({
  weight: ['400', '500', '900'],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Book Vibe - Next App",
  description: "Created by next app",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en" data-theme="light"
      className={`${playFair.className} ${workSans.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col scroll-smooth" cz-shortcut-listen="false">
        <BooksProvider>

          <Navbar></Navbar>
          {children}

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            // transition={Bounce}
          />
          
        </BooksProvider>
      </body>
    </html>
  );
}
