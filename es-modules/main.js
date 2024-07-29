import { create as newBlogPost } from "./blogpost.js";
import { create as newBook } from "./book.js";

var forAgainstLet = newBlogPost(
    "For and against let",
    "Kyle Simpson",
    "October 27, 2014",
    "https://davidwalsh.name/for-and-against-let"
);

forAgainstLet.print();

var YDKJS = newBook(
    "You Don't Know JS",
    "Kyle Simpson",
    "June 2014",
    "O'Reilly",
    "123456-789"
);

YDKJS.print();
