import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Character from "./Character";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    fetch(
      `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
    )
      .then((response) => response.json())
      .then((json) => {
        setDetail(json.data.results);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <h1>loading...</h1>
        </div>
      ) : (
        <div>
          {detail.map((char) => (
            <Character
              key={char.id}
              name={char.name}
              description={char.description}
              img={char.thumbnail.path}
              extension={char.thumbnail.extension}
              comics={char.comics}
              series={char.series}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Detail;
