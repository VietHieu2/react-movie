import apiConfig from "api/apiConfig";
import { category } from "api/tmdbApi";
import Button from "components/button/Button";
import React from "react";
import { Link } from "react-router-dom";
import "./movie-card.scss";
function MovieCard(props) {
  const item = props.item;
  const link = "/" + category[props.category] + "/" + item.id;
  const bg = apiConfig.w500Imgage(item.poster_path || item.backdrop_path);
  return (
    <Link to={link}>
      <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
        <Button>
          <i className="bx bx-play"></i>
        </Button>
      </div>
      <h3>{item.title || item.name}</h3>
    </Link>
  );
}

export default MovieCard;
