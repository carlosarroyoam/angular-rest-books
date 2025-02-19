import Image from "next/image";

import UserHeader from "@/components/user-header";
import { fetchBookById, fetchBooks } from "@/lib/fetch";

export default async function Home() {
  const books = await fetchBooks();
  const bookById = await fetchBookById(1);

  return (
    <section>
      <UserHeader />

      {books && (
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-4 2xl:grid-cols-4">
          {books.map((book) => (
            <div key={book.id} className="rounded-md bg-zinc-100">
              <div className="relative h-[520px] overflow-hidden rounded-t-md">
                <Image
                  src={book.cover_url}
                  alt={`${book.title}'s cover`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="px-6 py-4">
                <h3 className="line-clamp-1 text-base text-zinc-900">
                  {book.title}
                </h3>

                <div className="flex items-center justify-between">
                  <span className="text-sm">{book.authors[0].name}</span>
                  <p className="text-sm font-medium text-zinc-900">
                    ${book.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {bookById && <p className="mt-6">{bookById.title}</p>}
    </section>
  );
}
