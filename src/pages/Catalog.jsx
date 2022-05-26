import MovieGrid from "components/movie-grid/MovieGrid";
import PageHeader from "components/page-header/PageHeader";
import React from "react";
import { useParams } from "react-router-dom";
import { category as cate } from "../api/tmdbApi";
function Catalog() {
  const { category } = useParams();
  console.log(category);
  return (
    <>
      <PageHeader>
        {category === cate.movie ? "Movies" : "TV Series"}
      </PageHeader>

      <div className="conteiner">
        <div className="section mb3">
          <MovieGrid category={category} />
        </div>
      </div>
    </>
  );
}

export default Catalog;
