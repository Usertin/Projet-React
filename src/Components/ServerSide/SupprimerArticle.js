import { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function SupprimerArticle() {
    const nav = useNavigate();
    const {id} = useParams();
    const {art} = useParams();

    useEffect (() =>
    {
        axios.delete(`http://localhost:3001/produits/${id}`)
            .then (Response => 
            {
                console.log(art);
                //console.log(Response.data);
            })
            .catch(console.error());
        nav("/elements");
    },[id]);
    return (
        <>
        </>
    );
}

export default SupprimerArticle;