//component imports
import './App.css';
import ListCards from './Components/ClientSide/ListCards';
import HomePage from "./Components/HomePage.js";
import AjouterArticle from './Components/ServerSide/AjouterArticle';
import SupprimerArticle from './Components/ServerSide/SupprimerArticle';
import ModiferArticle from './Components/ServerSide/ModifierArticle';
// import ListCards from './components/ClientSide/ListCards';
// import EltsPanier from './components/ClientSide/EltsPanier';
import Cart from './Components/ClientSide/Cart';
import PdfCard from './Components/ClientSide/PdfCart';
//react bootstrap imports :ooo
import 'bootstrap/dist/css/bootstrap.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';

//other imports
import { BrowserRouter as Router,Routes,Route, useNavigate } from 'react-router-dom';
import { CartProvider } from 'use-shopping-cart';//learn how to use UsesShoppingCart mf

function App() {
  
  return (
    <div>
      <Navbar sticky='top' expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/home">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="clientList">coté client</Nav.Link>
              <Nav.Link href="elements">Liste d'articles</Nav.Link>
              <NavDropdown title="Actions administratifs" id="navbarScrollingDropdown">
                <NavDropdown.Item href="ajouterArticle">ajouter un article</NavDropdown.Item>
                <NavDropdown.Item href="supprimerArticle">
                  Supprimer un article
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Button variant="outline-success">Se connecter</Button>
            <Button variant="outline-success">S'inscrire</Button>
          </Navbar.Collapse>  
        </Container>
      </Navbar>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/elements" element = {<ListCards />}></Route>
            <Route path = "/ajouterArticle" element = {<AjouterArticle />}></Route>
            <Route path = "/cart" element = {<Cart />}></Route>
            <Route path = "pdfCart" element = {<PdfCard />}></Route>
            <Route path = "/supprimerArticle/:id" element = {<SupprimerArticle />}></Route>
            <Route path = "/modifierArticle/:id" element = {<ModiferArticle />}></Route>
            <Route path = "/" element = {<HomePage />}></Route>
            {/* <Route path = "/eltsPanier" element = {<EltsPanier />}></Route> */}
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;