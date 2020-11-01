import { gql, useQuery } from "@apollo/client";
import React from "react";

const BOOKS = gql`
  query GetBooks {
    books {
      title
    }
  }
`;

const Books: React.FC = () => {
  const { loading, error, data } = useQuery(BOOKS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;
  return data.books.map((book, i) => <p key={i}>{book.title}</p>);
};

export default Books;
