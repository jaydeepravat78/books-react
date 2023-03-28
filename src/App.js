import './App.css';
import { Col, Container, Row} from "reactstrap";
import Header from "./components/Header";
import Home from "./components/Home";
import AllBooks from "./components/AllBooks";
import AddBook from "./components/AddBook";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";

function App() {
  return (
      <Router>
          <ToastContainer />
          <Container>
            <Row className="mt-5">
              <Col md="4">
                  <Header />
              </Col>
                <Col md="8">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/add" element={<AddBook />} />
                        <Route path="/all" element={<AllBooks />} />
                    </Routes>
                </Col>
            </Row>
          </Container>
      </Router>
  );
}

export default App;
