import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CharacterDetail from "../component/CharacterDetail";
import styles from "./Detail.module.css";

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
    <div className={styles.container}>
      <Header />

      {loading ? (
        <section className={styles.loading}>
          <h1>loading...</h1>
        </section>
      ) : (
        <section className={styles.character}>
          {detail.map((char) => (
            <CharacterDetail
              key={char.id}
              name={char.name}
              description={char.description}
              imgPath={`${char.thumbnail.path}.${char.thumbnail.extension}`}
              comics={char.comics}
              series={char.series}
            />
          ))}
        </section>
      )}

      <button>
        <Link to={"/"}>BACK</Link>
      </button>
    </div>
  );
}

export default Detail;
