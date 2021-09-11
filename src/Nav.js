import React , { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';

function Nav() {
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <div>        
            <h3> Adith </h3>
            <p> List of movies: {movies.length}</p>
        </div>
    );
}

export default Nav;
