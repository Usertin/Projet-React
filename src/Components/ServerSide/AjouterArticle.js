import {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AjouterArticle() {
    const nav = useNavigate();
    const[reference,setReference] = useState("");
    const[intitule,setIntitule] = useState("");
    const[categorieId,setCategorieId] = useState("");
    const[quantite,setQuantite] = useState("");
    const[prix,setPrix] = useState("");
    const[namephoto,setNamephoto] = useState("");
    const[photo,setPhoto] = useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        const produit = {
            reference,
            intitule,
            categorieId,
            quantite,
            prix,
            namephoto,
            photo
        };
        axios.post("http://localhost:3001/produits",produit)
        .then (res =>{
            console.log(res.data.reference);
            nav("/elements");
        })
    }
    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="reference">reference</label>
                    <input type="text" className="form-control" id="reference" onChange={(e)=>{setReference(e.target.value)}}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="intitule">intitule</label>
                    <input type="text" className="form-control" id="intitule" onChange={(e)=>{setIntitule(e.target.value)}}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="categorieId">categorieId</label>
                    <input type="text" className="form-control" id="categorieId" onChange={(e)=>{setCategorieId(e.target.value)}}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="quantite">quantite</label>
                    <input type="text" className="form-control" id="quantite" onChange={(e)=>{setQuantite(e.target.value)}}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="prix">prix</label>
                    <input type="text" className="form-control" id="prix" onChange={(e)=>{setPrix(e.target.value)}}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="namephoto">namephoto</label>
                    <input type="text" className="form-control" id="namephoto" onChange={(e)=>{setNamephoto(e.target.value)}}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="photo">photo</label>
                    <input type="text" className="form-control" id="photo" onChange={(e)=>{setPhoto(e.target.value)}}></input>
                </div>

                <button id="btn" type="submit" className="btn btn-outline-primary">Ajouter Article</button>
            </form>
        </div>
    );
}

export default AjouterArticle;