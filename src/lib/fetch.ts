"use server";

import { getSession } from "@/app/actions";
import { Author } from "@/types/author";
import { Book } from "@/types/book";

export const fetchBooks = async (
  page: number = 0,
  size: number = 25,
): Promise<Book[]> => {
  const session = await getSession();
  const url = new URL(`${process.env.API_URL}/books`);
  const params = {
    page: page as unknown as string,
    size: size as unknown as string,
  };
  url.search = new URLSearchParams(params).toString();

  const respose = await fetch(url, {
    method: "get",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authorization: `Bearer ${session.access_token}`,
    },
  });

  if (!respose.ok) {
    return [];
  }

  return (await respose.json()) as Book[];
};

export const fetchBookById = async (bookId: number): Promise<Book | null> => {
  const session = await getSession();
  const url = new URL(`${process.env.API_URL}/books/${bookId}`);

  const respose = await fetch(url, {
    method: "get",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authorization: `Bearer ${session.access_token}`,
    },
  });

  if (!respose.ok) {
    return null;
  }

  return (await respose.json()) as Book;
};

export const fetchAuthors = async (
  page: number = 0,
  size: number = 25,
): Promise<Author[]> => {
  const session = await getSession();
  const url = new URL(`${process.env.API_URL}/authors`);
  const params = {
    page: page as unknown as string,
    size: size as unknown as string,
  };
  url.search = new URLSearchParams(params).toString();

  const respose = await fetch(url, {
    method: "get",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authorization: `Bearer ${session.access_token}`,
    },
  });

  if (!respose.ok) {
    return [];
  }

  return (await respose.json()) as Author[];
};

export const fetchAuthorById = async (
  authorId: number,
): Promise<Author | null> => {
  const session = await getSession();
  const url = new URL(`${process.env.API_URL}/authors/${authorId}`);

  const respose = await fetch(url, {
    method: "get",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authorization: `Bearer ${session.access_token}`,
    },
  });

  if (!respose.ok) {
    return null;
  }

  return (await respose.json()) as Author;
};
