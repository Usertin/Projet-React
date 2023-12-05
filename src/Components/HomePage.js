import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Badge } from 'react-bootstrap';



function HomePage() {
  
  return (
    <Container>
      <Link to ="/elements">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/Solde.jpg"
              alt="First slide"
              style={{ height: '300px', objectFit: 'cover' }}/>
            <Carousel.Caption>
              <h3 className='text-dark'>Soldes</h3>
              <p className='text-dark'>soldes allant jusqu'à 30%!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="images/Solde1.jpg"  className="d-block w-100"
              alt="First slide"
              style={{ height: '300px', objectFit: 'cover' }} />
            <Carousel.Caption>
              <h3 className='text-dark'>Soldes</h3>
              <p className='text-dark'>De lundi jusqu'à la weekend</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="images/Sold2.jpg"
              className="d-block w-100"
              alt="First slide"
              style={{ height: '300px', objectFit: 'cover' }} />
            <Carousel.Caption>
              <h3 className='text-dark'>Soldes</h3>
              <p className='text-dark'>
                Quois attendez vous?
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Link>
      <br></br>
      <br></br>
      <br></br>
      <Container>
        <Card.Title>Tous Nos Categories</Card.Title>

        <CardGroup>
          
            <Card className="bg-dark text-dark">
              <Card.Img src="images/laptop.jpg" alt="Card image" style = {{"width" : "100%","height" : "300px"}}/>
              <Card.ImgOverlay>
                <Card.Title>Laptop</Card.Title>
                <Card.Text>Last updated 13 mins ago</Card.Text>
                <Link to = "/elements" ><span style={{"textDecoration":"none"}}>Acceder </span><Card.Img src = "/images/next.png" style={{"width":"20px","height":"20px"}}></Card.Img></Link>
              </Card.ImgOverlay>
            </Card>
          

          
            <Card className="bg-dark text-dark">
              <Card.Img src="images/desktop.jpg" alt="Card image" style = {{"width" : "100%","height" : "300px"}}/>
              <Card.ImgOverlay>
                <Card.Title>Desktop</Card.Title>
                <Card.Text>Last updated 30 mins ago</Card.Text>
                <Link to = "/elements" ><span style={{"textDecoration":"none"}}>Acceder </span><Card.Img src = "/images/next.png" style={{"width":"20px","height":"20px"}}></Card.Img></Link>
              </Card.ImgOverlay>
            </Card>
          

          
            <Card className="bg-dark text-dark">
              <Card.Img src="images/homeappliances.jpg" alt="Card image" style = {{"width" : "100%","height" : "300px"}}/>
              <Card.ImgOverlay>
                <Card.Title>Electromenager</Card.Title>
                <Card.Text>Last updated 47 mins ago</Card.Text>
                <Link to = "/elements" ><span style={{"textDecoration":"none"}}>Acceder </span><Card.Img src = "/images/next.png" style={{"width":"20px","height":"20px"}}></Card.Img></Link>
              </Card.ImgOverlay>
            </Card>
          
        </CardGroup>
          
        <CardGroup>
        
          <Card className="bg-dark text-dark">
              <Card.Img src="images/smartphone.jpg" alt="Card image" style = {{"width" : "100%","height" : "300px"}}/>
              <Card.ImgOverlay>
                <Card.Title>Smartphone</Card.Title>
                <Card.Text>Last updated 5 days ago</Card.Text>
                <Link to = "/elements" ><span style={{"textDecoration":"none"}}>Acceder </span><Card.Img src = "/images/next.png" style={{"width":"20px","height":"20px"}}></Card.Img></Link>
              </Card.ImgOverlay>
            </Card>
          

          
            <Card className="bg-dark text-dark">
              <Card.Img src="images/Misc.jpg" alt="Card image" style = {{"width" : "100%","height" : "300px"}}/>
              <Card.ImgOverlay>
                <Card.Title>Diver <Badge bg="secondary">New</Badge></Card.Title>
                <Card.Text>Last updated 14 mins ago</Card.Text>
                <Link to = "/elements" ><span style={{"textDecoration":"none"}}>Acceder </span><Card.Img src = "/images/next.png" style={{"width":"20px","height":"20px"}}></Card.Img></Link>
              </Card.ImgOverlay>
            </Card>
          
        </CardGroup>

      </Container>
      <hr></hr>
      <footer style={{"display":"inline-block"}}>
        <table>
          <tr>
            <td><img src="images/Logo.jpg" alt="Logo" style={{"width":"500px","height":"300px"}} /></td>
            <td>
              <h4>About Us</h4>
              <hr></hr>
              <p>Bienvenue chez Boutiqui ! Découvrez des produits de qualité, tendances et authentiques. Notre sélection unique, votre satisfaction garantie. Explorez, commandez, et faites partie de notre communauté. Merci de choisir Boutiqui - votre destination shopping en ligne.</p>
              <h4>Contacter nous</h4>
              <hr></hr>
              <Link to = "https://facebook.com" ><img src="images/facebook.png" alt = "facebook"></img></Link>
              <Link to = "https://youtube.com"><img src="images/youtube.png" alt = "youtube"></img></Link>
              <Link to = "https://twitter.com"><img src="images/x.png" alt = "X"></img></Link>
              <Link to = "https://instagram.com"><img src="images/instagram.png" alt = "instagram"></img></Link>
            </td>
          </tr>
        </table>
      
      </footer>
    </Container>
  );
}

export default HomePage;

