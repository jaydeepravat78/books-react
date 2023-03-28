import {Button, Container, Form, FormGroup, Input, Label} from "reactstrap";
import {useGlobalContext} from "../context";

function AddBook() {
    const {addBook, newBook, setNewBook} = useGlobalContext();
    return (
        <>
            <h1>Add a book</h1>
        <Form onSubmit={addBook}>
            <FormGroup>
                <Label for="bookName"></Label>
                <Input type="text" placeholder="Enter the book name" name="name"
                       onChange={(e) => { setNewBook({...newBook, name: e.target.value}) }}
                />
            </FormGroup>
            <FormGroup>
                <Label for="authorName"></Label>
                <Input type="text" placeholder="Enter the author name" name="Author"
                       onChange={(e) => { setNewBook({...newBook, author: e.target.value}) }}
                />
            </FormGroup>
            <Container>
                <Button size="lg" color="success" type="submit">Add Book</Button>
            </Container>
        </Form>
        </>
    )
}

export default AddBook