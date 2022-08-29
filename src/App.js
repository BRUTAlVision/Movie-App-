import { useEffect, useState } from "react";
import React from 'react'
import "./App.css";
import SearchIcon from './search.svg'
import Moviecard from "./Moviecard";

const API_URL = 'http://www.omdbapi.com?apikey=d7e8816f';

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
    useEffect(() => {

        searchMovies('Batman');
    }, []);

    const searchMovies = async (title) => {

        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        setMovies(data.Search);
        // console.log(data.Search);
    }



    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">

                <input value={searchTerm} placeholder="Search for movie" onChange={(e) => setSearchTerm(e.target.value)} />
                <img src={SearchIcon} alt="search" onClick={()=>searchMovies(searchTerm)} />
            </div>
            {

                movies.length > 0 ? (
                    <div className="container">
                        {movies.map((movie) => {
                            return <Moviecard movie={movie} />
                        })
                        }
                    </div>

                )
                    : (
                        <div className="empty">
                            <h2>No movies Found</h2>
                        </div>
                    )
            }

        </div>
    )
}

export default App;

