import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { InputGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.css';

function ModifArticle() {
    const {id} = useParams();
    const [produit,setProduit] = useState([]);
    const nav = useNavigate();

    const[reference,setReference] = useState("");
    const[intitule,setIntitule] = useState("");
    const[categorieId,setCategorieId] = useState("");
    const[quantite,setQuantite] = useState("");
    const[prix,setPrix] = useState("");
    const[namephoto,setNamephoto] = useState("");
    const[photo,setPhoto] = useState("");

    const [disabled,setDisabled] = useState(true);

    useEffect(() =>
    {
        axios.get(`http://localhost:3001/produits/${id}`)
        .then(res =>
            {
                setProduit(res.data);
            })
    },[id]);

    const ValiderModif=(e) =>
    {
        e.preventDefault();
        const nouvProduit = {
            id,
            reference,
            intitule,
            categorieId,
            quantite,
            prix,
            namephoto,
            photo
        };
        console.log(nouvProduit);

        axios.patch(`http://localhost:3001/produits/${id}`,nouvProduit)
        .then (res =>{
            console.log(res.data.reference);
            nav("/elements");
        });

    }

    const verifierChamps =() =>
    {
        if((document.getElementById("intitule").value != "") && (document.getElementById("reference").value != "") && (document.getElementById("categorieid").value != "") && (document.getElementById("prix").value != "") && (document.getElementById("quantite").value != "") && (document.getElementById("namephoto").value != "") && (document.getElementById("photo").value != ""))
            setDisabled(false);
        else
            setDisabled(true);
    }

    return (
        <form  onSubmit={ValiderModif}>
            <center><h1>Modifier Un Element</h1></center>
            <InputGroup className="mb-3">
                <InputGroup.Text id="generic">
                    Intitule
                </InputGroup.Text>
                <Form.Control
                    id="intitule"
                    type="text"
                    placeholder={produit.intitule}
                    aria-label="Intitule"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={(e)=>{setIntitule(e.target.value)}}
                    onBlur={verifierChamps}
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                    Réference
                </InputGroup.Text>
                <Form.Control
                    id="reference"
                    placeholder={produit.reference}
                    aria-label="Réference"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={(e)=>{setReference(e.target.value)}}
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                    CategorieId
                </InputGroup.Text>
                <Form.Control
                    id="categorieid"
                    placeholder={produit.categorieId}
                    aria-label="CategorieId"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={(e)=>{setCategorieId(e.target.value)}}
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                    Prix
                </InputGroup.Text>
                <Form.Control
                    id="prix"
                    placeholder={produit.prix}
                    aria-label="Prix"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={(e)=>{setPrix(e.target.value)}}
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                    Quantité
                </InputGroup.Text>
                <Form.Control
                    id="quantite"
                    placeholder={produit.quantite}
                    aria-label="Quantité"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={(e)=>{setQuantite(e.target.value)}}
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                    NamePhoto
                </InputGroup.Text>
                <Form.Control
                    id="namephoto"
                    placeholder={produit.namephoto}
                    aria-label="NamePhoto"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={(e)=>{setNamephoto(e.target.value)}}
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                    Photo
                </InputGroup.Text>
                <Form.Control
                    id="photo"
                    placeholder={produit.photo}
                    aria-label="Photo"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={(e)=>{setPhoto(e.target.value)}}
                />
            </InputGroup>
            
            <div className="d-grid gap-2">
                <Button as="input" type="submit" disabled = {disabled} variant="success" size="lg" value="Valider Modification(s)"/>
            </div>
        </form>
    );
}

export default ModifArticle;