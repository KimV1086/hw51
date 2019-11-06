import React from 'react';
import './Movie.css';


const Movie = (props) => {
    return (
        <div className="movieName">
            <h4>{props.name}</h4>
            <img src={props.img} alt=""/>
            <p><b>Дата выхода: </b>{props.released}</p>
        </div>

    )
};

export default Movie;