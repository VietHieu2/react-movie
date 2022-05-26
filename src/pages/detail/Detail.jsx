import apiConfig from "api/apiConfig";
import tmdbApi from "api/tmdbApi";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CastList from "./CastList";
import "./detail.scss";
import VideoList from "./VideoList";
function Detail(props) {
  const { category, id } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} });
      setItem(response);
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [category, id]);

  return (
    <>
      {item && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${apiConfig.originalImgage(
                item.backdrop_path || item.poster_path
              )})`,
            }}
          ></div>
          <div className="mb3 movie-content container">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{
                  backgroundImage: `url(${apiConfig.originalImgage(
                    item.backdrop_path || item.poster_path
                  )})`,
                }}
              ></div>
            </div>
            <div className="movie-content__info">
              <h1 className="title">{item.title || item.name}</h1>
              <div className="genres">
                {item.genres &&
                  item.genres.slice(0, 5).map((genres, i) => (
                    <span key={i} className="genres__item">
                      {genres.name}
                    </span>
                  ))}
              </div>
              <p className="overview">{item.overview}</p>
              <div className="cast">
                <div className="section__header">
                  <h2>Casts</h2>
                </div>
                <CastList id={item.id} />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="section mb3">
              <VideoList id={item.id} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Detail;
