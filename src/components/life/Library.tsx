"use client";

import { motion } from "framer-motion";
import { BookOpen, Star } from "lucide-react";
import Image from "next/image";

const books = [
  {
    id: 1,
    title: "Zero to One",
    author: "Peter Thiel",
    cover: "https://covers.openlibrary.org/b/isbn/9780804139298-L.jpg",
    rating: 5,
  },
  {
    id: 2,
    title: "Psychology of Money",
    author: "Morgan Housel",
    cover: "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg",
    rating: 5,
  },
  {
    id: 3,
    title: "The Art of Letting Go",
    author: "Daphne Rose Kingma",
    cover: "https://covers.openlibrary.org/b/isbn/9781401945015-L.jpg",
    rating: 4,
  },
  {
    id: 4,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    cover: "https://covers.openlibrary.org/b/isbn/9780062457714-L.jpg",
    rating: 5,
  },
];

export default function Library() {
  return (
    <section className="mb-32">
      <div className="flex items-center gap-4 mb-8">
        <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center border border-accent/20">
          <BookOpen className="text-accent h-6 w-6" />
        </div>
        <div>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Library
          </h2>
          <p className="text-xs font-sans text-text-muted mt-1">
            open reader.app
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {books.map((book, index) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="aspect-2/3 relative rounded-lg overflow-hidden mb-4 shadow-lg transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-primary/10">
              <Image
                src={book.cover}
                alt={book.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="flex gap-0.5">
                  {[...Array(book.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <h3 className="text-white font-bold text-sm leading-tight mb-1 group-hover:text-primary transition-colors">
              {book.title}
            </h3>
            <p className="text-text-muted text-xs">{book.author}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
