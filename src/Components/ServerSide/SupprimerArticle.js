import { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function SupprimerArticle() {
    const nav = useNavigate();
    const {id} = useParams();
    useEffect (() =>
    {
        axios.delete(`http://localhost:3001/produits/${id}`)
            .then (Response => 
            {
                console.log(Response.data);
            })
            .catch(console.error());
        nav("/elements")   
    },[id])
    return (
        <div>
            ok supression {id}
        </div>
    );
}

export default SupprimerArticle;