//component imports
import './App.css';
import ListCards from './Components/ClientSide/ListCards';
import AjouterArticle from './Components/ServerSide/AjouterArticle';
import SupprimerArticle from './Components/ServerSide/SupprimerArticle';
import ModiferArticle from './Components/ServerSide/ModifierArticle';
import LoginClient from './Components/AuthentificationClient/loginClient.js';
import SignUp from './Components/AuthentificationClient/SignUp.js';
import HomePage from './Components/HomePage.js';

//react bootstrap imports :ooo
import 'bootstrap/dist/css/bootstrap.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


//cart / routerDOM / pdf imports
import { BrowserRouter as Router,Routes,Route, Link, useNavigate } from 'react-router-dom';
import { CartProvider } from 'use-shopping-cart';//learn how to use UsesShoppingCart mf
import Cart from './Components/ClientSide/Cart';
import PdfCard from './Components/ClientSide/PdfCart';
import { useState } from 'react';

//Auth imports
import {auth} from "./fireConfig";
import { onAuthStateChanged} from "firebase/auth";


function App() {
  const [userType,setUserType] = useState("user");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  onAuthStateChanged(auth, (user) => 
  {
    if(user)
    {
      setIsLoggedIn(true);
      if(user.email == "admin@gmail.com")
        setUserType("admin");
      else
        setUserType("user");
    }
    else
      setIsLoggedIn(false);
  })

  const logOut = () =>
  {
    auth.signOut().then(() =>
    {
      console.log("logged out");
    })
    .catch((error) => 
    {
      console.log(error);
    })
  }
  return (
    <div>
      <CartProvider>
        <Router>
            <Navbar sticky='top' expand="lg" className="bg-body-tertiary">
            <Container fluid>
              <Navbar.Brand href="/"><img src="images/home.png" alt = "home"/></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link href="elements">Liste d'articles</Nav.Link>
                  {userType == "admin" && <Nav.Link href="ajouterArticle">ajout d'un article</Nav.Link>}
                  
                </Nav>
                
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="btn btn-outline-primary">Search</Button>
                </Form>
                {!isLoggedIn ? <Link className='btn btn-outline-primary' to ="/loginClient">Se connecter</Link> : <Link to = "/" className="btn btn-outline-danger" onClick={logOut}>Déconnecter </Link>}
              </Navbar.Collapse>  
            </Container>
          </Navbar>
          <Routes>
            <Route path="/elements" element = {<ListCards type ={userType} />}></Route>
            <Route path = "/ajouterArticle" element = {<AjouterArticle />}></Route>
            <Route path = "/cart" element = {<Cart />}></Route>
            <Route path = "pdfCart" element = {<PdfCard />}></Route>
            <Route path = "/supprimerArticle/:id" element = {<SupprimerArticle />}></Route>
            <Route path = "/modifierArticle/:id" element = {<ModiferArticle />}></Route>
            <Route path = "/" element = {<HomePage />}></Route>
            <Route path= "/signup" exact element = {<SignUp />}></Route>
            <Route path="/loginClient" exact element={<LoginClient />} />
            <Route path="/test" element = {<HomePage />} ></Route>
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;