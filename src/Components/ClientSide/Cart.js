import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { useNavigate } from 'react-router-dom';

//icons
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Plus from '@mui/icons-material/AddAlarm';
import Minus from '@mui/icons-material/RemoveCircle';
import Delete from '@mui/icons-material/Delete';
import StripeCheckout from 'react-stripe-checkout';


function Cart() {
    const {cartDetails, removeItem, clearCart, totalPrice, cartCount, incrementItem, decrementItem } = useShoppingCart();
    const navigate = useNavigate();
    const [payement, setPayement] = React.useState(false);
    const onToken = (token) =>
    {
        console.log(token);
        clearCart();
        navigate("/elements");
    }

    const commander = async() =>
    {
        setPayement(true);
        //navigate("/");
    };

    const more = () =>
    {
        navigate("/elements");
    };
    const clear = () =>
    {
        clearCart();
    };
    const imprimer = () =>
    {
        navigate("/pdfCart");
    }

    if(cartCount == 0)
        return <h1>Cart is empty</h1>
    return (
        <div>
            {payement ? <StripeCheckout 
                token = {onToken}
                stripeKey='pk_test_51OEpYoAF5p0rfHtk6upco94II7O5uGzqIlicf3GE4C8WT4c8NdPqqJRIbEMt6uoEelfeKiKQ0SZQAw8OQY8zyJUH00ejYyl0Ny'
                amount = {totalPrice*100}
                currency='USD'
            />:null}
            <Grid container spacing = {2}  columns = {15} marginTop={10} marginLeft={10}>
                <Grid item xs={8}>
                    {
                        cartDetails && Object.values(cartDetails).map((elt) =>
                        {
                            return(
                                <Grid item xs = {8} key={elt.id}>
                                    <img 
                                        alt={elt.titulaire}
                                        style={{ margin: "0 auto", maxHeight: "100px" }}
                                        src = {elt.image}
                                        className='img-fluid d-block'
                                    />
                                    <h5>{elt.Title}</h5>
                                    <p>Prix : {elt.price}</p>
                                    <p>Qte : {elt.quantity}</p>
                                    <button onClick={() =>{
                                        {console.log(elt)}
                                        if(elt.quantity < elt.qtestock)
                                            incrementItem(elt.id);
                                        else
                                            alert("quantité stock insuffisante")
                                        }
                                    }>
                                    <Plus color='success' /> 
                                    </button>
                                    {elt.quantity > 1 && (
                                        <button onClick={() => 
                                            decrementItem(elt.id)}>
                                            <Minus color='warning' />
                                        </button>)}
                                    {elt.quantity == 1 && (
                                        <button onClick={() =>
                                            removeItem(elt.id)}>
                                            <Delete color = 'error' />
                                            </button>
                                        )}
                                    <hr />
                                </Grid>
                            );
                            
                        })}
                </Grid>
                <Grid item xs={5}>
                    <Button color='error' variant='outlined' onClick={more}>
                        ajouter des articles
                    </Button>
                    <p>totale articles</p>
                    <h4>{cartCount}</h4>
                    <p>totale payement</p>
                    <h4>{totalPrice}TND</h4>
                    <hr />
                    <div>
                        <Button color = 'secondary' variant = 'outlined' onClick={imprimer}>
                            imprimer pdf
                        </Button>
                        <Button color = 'warning' variant='outlined' onClick={commander}>
                            commander
                        </Button>
                        <Button color = 'info' variant='outlined' onClick={clear}>
                            Annuler
                        </Button> 
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Cart;