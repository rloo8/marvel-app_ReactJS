import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Character from "./component/Character";
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
      <header className={styles.header}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png" />
      </header>

      {loading ? (
        <section className={styles.loading}>
          <h1>loading...</h1>
        </section>
      ) : (
        <section className={styles.character}>
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
        </section>
      )}

      <button>
        <Link to={"/"}>BACK</Link>
      </button>
    </div>
  );
}

export default Detail;
