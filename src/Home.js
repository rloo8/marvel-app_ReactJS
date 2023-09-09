import { useEffect, useState } from "react";
import Character from "./Characters";

function Home() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(
      `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`
    )
      .then((response) => response.json())
      .then((json) => {
        setCharacters(json.data.results);
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
          {characters.map((char) => (
            <Character
              key={char.id}
              id={char.id}
              name={char.name}
              img={char.thumbnail.path}
              extension={char.thumbnail.extension}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
