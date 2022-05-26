import apiConfig from "api/apiConfig";
import tmdbApi from "api/tmdbApi";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CastList(props) {
  const { category } = useParams();

  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getCredit = async () => {
      const res = await tmdbApi.credits(category, props.id);
      setCasts(res.cast.slice(0, 5));
    };
    getCredit();
  }, [category, props.id]);
  return (
    <div className="casts">
      {casts.map((item, i) => (
        <div key={i} className="casts__item">
          <div
            className="casts__item__img"
            style={{
              backgroundImage: `url(${apiConfig.w500Imgage(
                item.profile_path
              )})`,
            }}
          ></div>
          <div className="casts__item__name">{item.name}</div>
        </div>
      ))}
    </div>
  );
}

export default CastList;
