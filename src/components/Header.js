import { Nav, NavItem } from "reactstrap";
import {Link} from "react-router-dom";

function Header() {
    return (
        <Nav vertical>
            <NavItem>
                <Link className="nav-link" to="/">
                    Home
                </Link>
            </NavItem>
            <NavItem>
                <Link className="nav-link" to="/all">
                    All books
                </Link>
            </NavItem>
            <NavItem>
                <Link className="nav-link" to="/add">
                    Add Book
                </Link>
            </NavItem>
        </Nav>
    )
}

export default Header