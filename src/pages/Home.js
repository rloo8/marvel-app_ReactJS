import { useEffect, useState } from "react";
import Character from "../component/Character";
import styles from "./Home.module.css";

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
    <div className={styles.container}>
      <Header />

      {loading ? (
        <section className={styles.loading}>
          <h1>loading...</h1>
        </section>
      ) : (
        <section className={styles.characters}>
          {characters.map((char) => (
            <Character
              key={char.id}
              id={char.id}
              name={char.name}
              imgPath={`${char.thumbnail.path}.${char.thumbnail.extension}`}
            />
          ))}
        </section>
      )}
    </div>
  );
}

export default Home;
