import {Button, Card, CardSubtitle, CardText, Container} from "reactstrap";
import {useGlobalContext} from "../context";

function Book({ prop: book }) {
    const { deleteBook } = useGlobalContext();
    return(
        <Card className="p-3 text-center">
            <CardSubtitle className="fw-bold">{book.name}</CardSubtitle>
            <CardText>{book.author}</CardText>
            <Container className="text-center">
                <Button color="warning">Update</Button>
                <Button color="danger" className="m-3" onClick={() => deleteBook(book.id)}>Delete</Button>
            </Container>
        </Card>
    )
}

export default Book