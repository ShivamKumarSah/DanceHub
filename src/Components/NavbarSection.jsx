import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavbarSection.css';

const NavbarSection = () => {
    return (
        <Navbar expand="lg" className=" bg-white sticky-top">
            <Container>
                <Navbar.Brand href="#home" className='logo'><img src="https://themeholy.com/wordpress/test/wp-content/uploads/2023/09/logo.svg" alt="" /></Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="#home" className='nav-item'>Home</Nav.Link>
                        <Nav.Link href="#" className='nav-item'>About</Nav.Link>
                        <NavDropdown title="Classes" id="basic-nav-dropdown" className='nav-item'>
                            <NavDropdown.Item href="#action/3.1" >Dance Classes</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Single Classes
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Class Schedule
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home" className='nav-item'>Blog</Nav.Link>
                        <Nav.Link href="#" className='nav-item'>Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <div>
                    <a href="#!" className="bg-red-600 rounded py-3 px-8 hover:bg-opacity-90 duration-300 text-white text-xl inline-flex ">Learn More</a>
                </div>
            </Container>
        </Navbar>
    );
}

export default NavbarSection;