import 'bootstrap/dist/css/bootstrap.css';
import { Button as Btn,Card } from 'react-bootstrap';
import { useShoppingCart } from 'use-shopping-cart';
import Button from '@mui/material/Button';
import AppBar  from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { Title } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ElementsArticleCard(props) {
    const {cartCount,addItem} = useShoppingCart();
    const nav = useNavigate();
    
    const addToCart = (elt)=>
{
    const target = {
        id : elt.id,
        Title : elt.intitule,
        image : elt.photo,
        price : elt.prix,
        qtestock : elt.quantite,
        quantity : 1
    };
    addItem(target);
    console.log("element ajouté : ",target);
}

    return (
        <div>
            <AppBar position = "static" color = "default">
                <Toolbar>
                    <Button color = "inherit">
                        <Link to='/cart'>
                            {cartCount}<ShoppingCartIcon fontSize='large' />
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>
            <Row xs={1} md={4} className="g-3">
            {
                props.art.map((elt) => 
                        <div key = {elt.id}>
                            <Col xs = {3}>
                                <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={elt.photo}  alt="Card image cap" height={"200px"}/>
                                <Card.Body>
                                    <Card.Title>{elt.intitule.substr(0,20)}...</Card.Title>
                                    <Card.Text>
                                        {elt.prix}Dt
                                    </Card.Text>
                                    <Row>
                                        <Btn variant="primary" disabled = {elt.quantite <= 1} onClick={() => addToCart(elt)}>Add to cart</Btn>
                                        <Btn variant="info" onClick={() => nav(`/modifierArticle/${elt.id}`)}>Modify Element</Btn>
                                        <Btn variant="danger" onClick={() => nav(`/supprimerArticle/${elt.id}`)}>Delete Element</Btn>
                                    </Row>
                                </Card.Body>
                                </Card>
                            </Col>
                        </div>
                )
            }
            </Row>
            
        </div>
    );
}

export default ElementsArticleCard;