import React, {useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) =>{
    
    const [movies, setMovies] = useState([
        {
            name: 'Harry potter',
            price: '$10',
            id: 335544
        },
        {
            name: 'Wills potter',
            price: '$70',
            id: 8544
        },
        {
            name: 'Max verstapen',
            price: '$800',
            id: 878544
        }
    ]);

    return( 
        <MovieContext.Provider value={[movies,setMovies]}>
          {props.children}
        </MovieContext.Provider>

    );
}

