import {useGlobalContext} from "../context";
import Book from "./Book";
import {Suspense} from "react";
import Loading from "./Loading";

function AllBooks() {
    const { books } = useGlobalContext();

    return (
        <Suspense fallback={<Loading />}>
            <h2>All books</h2>
            <p>List of all books are as follows</p>
            {
                books.length > 0 ?
                books.map((book) => {
                    return <Book key={book.id} prop={book} />
                }) : <p>Book not found</p>
            }
        </Suspense>
    )
}
export default AllBooks