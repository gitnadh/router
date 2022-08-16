import { useState, useEffect } from "react";
import AddMovie from "../AddMovie/AddMovie.js";
import "../App/App.css";
import MovieList from "../MovieList/MovieList.js";
import Filtring from "../Filtring/Filtring.js";
import Description from '../Description/Description.js';
import {Routes,Route } from "react-router-dom";

const info = [
  
  
  {id:0,
    title: "MR. ROBOT",
    img: "https://starzplay-img-prod-ssl.akamaized.net/474w/universal/MRROBOTY2015S01E001/MRROBOTY2015S01E001-474x677-PST.jpg",
    description:
      "The series tells the story of a young man who suffers from social anxiety disorder. Working as a computer programmer in the morning and a hacker in the evening, he is assigned to work by a mysterious man who calls himself 'Mr. Robot' to infiltrate large corporations they believe are corrupting society.",
    posterURL: "https://www.youtube.com/embed/xIBiJ_SzJTA",
    rating: 8.5,
  },
  
  {id:1,
    title: "Prison Break",
    img: "https://www.cdiscount.com/pdt2/3/2/2/1/700x700/auc0030206697322/rw/various-artists-prison-break-seasons-3-4-ori.jpg",
    description:
      "An innocent man is imprisoned and sentenced to death, and his only hope now is in his younger brother, who commits a crime in order to send himself to prison and devises a plan for their escape together, in addition to some other civilians in prison, they encounter a series of interesting and exciting problems and dilemmas, and they try to solve them in order to implement the plan, no matter what it costs them.",
    posterURL: "https://www.youtube.com/embed/der8A7Z9u7c",
    rating: 8.3,
  },
  {id:2,
    title: "Roman Empire",
    img: "https://m.media-amazon.com/images/M/MV5BY2UxYmY0NDktYTk2Mi00ZjI4LWJhYTAtYTEzMzYyNGU3ZTEzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjMyMTk1OQ@@._V1_FMjpg_UX1000_.jpg",
    description:
      "Chronicles some of the most famous leaders of the Roman Civilization.",
    posterURL: "https://www.youtube.com/embed/aOOKeYQs4w0",
    rating: 6.9,
  },
  
  {id:3,
    title: "The Walking Dead",
    img: "https://pictures.betaseries.com/fonds/poster/d338e649f57a342598ec430862798ad3.jpg",
    description:
      "Police officer (Rick) wakes up from a coma in which he was in for several months as a result of being shot while on the job, to find that the world has been ravaged by the zombies and he is the only survivor. An army of the zombies, events escalate.",
    posterURL: "https://www.youtube.com/embed/sfAc2U20uyg",
    rating: 4.2,
  },
  
];

function App() {
  const [list, setList] = useState(info);
  const [filtredList, setFiltredList] = useState(list);
  const [rate, setRate] = useState(0);
  const [keyword, setKeyword] = useState("");

  function adding(movie) {
    if (movie.title && movie.img && movie.description && movie.posterURL) {
      setList([...list, movie]);
    }
  }

  function filter(key, rate) {
    setKeyword(key);
    setRate(rate);
    console.log(rate + "  " + key);
    setFiltredList(
      list.filter((element) => {
        return (
          element.title.toLowerCase().includes(key.toLowerCase()) &&
          element.rating >= rate
        );
      })
    );
  }

  useEffect(() => {
    filter(keyword, rate);
  }, [list]);

  return (
    <div className="App">
      <Routes>
        
        <Route path="/"  element={
        <> 
        <Filtring filter={filter}/>
        <MovieList list={filtredList} />
        <AddMovie adding={adding} id={list.length} />
        </> 
      } />
        <Route path="/:id" element={ <Description list={list} /> } />
      </Routes>
    </div>
      );
}

export default App;
