import UserHeader from "@/components/UserHeader";
import { fetchBookById, fetchBooks } from "@/lib/fetch";

export default async function Home() {
  const books = await fetchBooks();
  const bookById = await fetchBookById(1);

  return (
    <section>
      <UserHeader />

      {books && (
        <div className="mt-8 flex gap-4">
          {books.map((book) => (
            <div
              key={book.id}
              className="w-96 rounded-md bg-gray-200 px-6 py-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-gray-900">{book.title}</h3>
                <p className="text-sm font-medium text-gray-900">
                  ${book.price}
                </p>
              </div>
              <p className="mt-2 text-sm text-gray-700">
                {new Intl.DateTimeFormat("es-MX", { dateStyle: "long" }).format(
                  new Date(book.published_at),
                )}
              </p>
            </div>
          ))}
        </div>
      )}

      {bookById && <p className="mt-6">{bookById.title}</p>}
    </section>
  );
}
