import "./description.css";
import Button from 'react-bootstrap/Button';
import {useParams} from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";
import { Link } from"react-router-dom";


export default function Description({list}) {

    // console.log(list.length);
    let params = useParams();
    // console.log(params);
    console.log(list[parseInt(params.id)]);
    let film=list.find(
        (el)=>el.id==parseInt(params.id)
    )
    console.log(film);
    return ( 
    <header className="container">
        <nav className="navbar">
            <div className="links">
            <div className="d-grid gap-2">
            <Link to="/"><Button variant="outline-success" size="lg">Home</Button></Link>
            
                

            </div>
            </div>
            


        </nav>
        <div className="desc">
            {  ( isNaN(params.id) || list.length <= parseInt(params.id)) ?  <p>No Movie With this id </p> :
            
            <>
            <MovieCard ele={list[parseInt(params.id)]} />
            <iframe width="560" height="315" src={ list[parseInt(params.id)].posterURL}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            
            </>
            }
        </div>
        </header>
    )
}