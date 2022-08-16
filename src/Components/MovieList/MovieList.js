import "./movielist.css";
import MovieCard from "../MovieCard/MovieCard";
import {Link} from "react-router-dom";

function MovieList({list}){
    return(
        <div className="MovieList">{
        list.map( (ele,index)=>(
            <Link key={index} to={`/${ele.id}`} > 
            <MovieCard key={index} ele={ele} />
           </Link>
        ))
        }
        </div>
    );
}

export default MovieList;