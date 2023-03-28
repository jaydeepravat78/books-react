import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";

const AppContext = React.createContext();


const AppProvider = ({children}) => {
    const [books, setBooks] = useState([])
    const [newBook, setNewBook] = useState({})
    const BOOKS = "http://localhost:8081/";

    const getBooks = async (url) => {
        axios.get(url).then( (response) => {
                console.log(response.data)
                setBooks(response.data);
            }
        ).catch( (error) => {
            toast.error("Something went Wrong")
            console.log(error)
        })
    }

    const addBook = (e) => {
        addBookData(newBook)
        addBookToList(newBook)
        toast.success("Book Added Successfully")
        e.preventDefault();
    }
    const addBookData = (data) => {
        axios.post(BOOKS, data).then(
            (response) => {
                console.log(response.data)
               //setNewBook(response.data)
            }
        ).catch( (error) => {
            toast.error(error)
            console.log(error)
        })
    }
    const removeBookById = (id) => {
        setBooks(books.filter((book) => book.id !== id))
    }
    const addBookToList = (book) => {
        const updatedBook = [...books, book]
        setBooks(updatedBook)
    }
    const deleteBook = (id) => {
        axios.delete(`${BOOKS}${id}`)
            .then((response) => {
                removeBookById(id)
                toast.success("Book deleted Successfully")
            }).catch((err) => {
            toast.error("Delete Failed")
        })
    }

    useEffect( () => {
        getBooks(BOOKS)
    }, [])
    return <AppContext.Provider value={{ books, setNewBook, addBook, newBook, deleteBook}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }