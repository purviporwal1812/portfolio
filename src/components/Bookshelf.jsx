import React from "react";
import "../styles/ListPage.css";

// Add/remove books here — order in this array is the order shown on the page.
// "url" is your notes link (Medium post, doc, etc.) — leave it "" to hide the [Notes] link.
const books = [
  {
    title: "Anxious People",
    author: "Fredrik Backman",
    url: "https://medium.com/@purviporwal1812/anxious-people-a18fed940df6?sharedUserId=purviporwal1812",
  },
  {
    title: "Bell Jar",
    author: "Sylvia Plath",
    url: "https://medium.com/@purviporwal1812/bell-jar-6588bdf4af76?sharedUserId=purviporwal1812",
  },
];

const Bookshelf = () => {
  return (
    <div className="list-page">
      <h1 className="list-page-heading">
        Bookshelf <span className="count">({books.length})</span>
      </h1>

      {books.length === 0 ? (
        <p className="list-page-empty">No books added yet.</p>
      ) : (
        <ul className="list-page-items">
          {books.map((book, idx) => (
            <li key={idx}>
              {book.url && (
                <>
                  <a href={book.url} target="_blank" rel="noreferrer">
                    [Notes]
                  </a>{" "}
                </>
              )}
              {book.title && (
                <span className="book-title">{book.title}</span>
              )}{" "}
              by <span className="book-author">{book.author}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Bookshelf;