import axios from "axios";
import { useEffect, useState } from "react";
import ElementsArticleCard from "./ElementsArticleCard";
import 'bootstrap/dist/css/bootstrap.css';

function ListCards(props) {
    
    const [article,setArticle] = useState([]);

    useEffect(() =>
    {
        async = () =>
        axios.get("http://localhost:3001/produits")
        .then(response => (
            setArticle(response.data)
        ))
        .catch((error) => 
        {
            console.log(error)
        })
    }, [])
    
    
    return (
        <div>
            <ElementsArticleCard art = {article} type={props.type}/>
        </div>
    );
}

export default ListCards;