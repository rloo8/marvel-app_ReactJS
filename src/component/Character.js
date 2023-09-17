import { Link } from "react-router-dom";
import styles from "./Character.module.css";

function Characters({ id, name, imgPath}) {
  return (
    <Link to={`/detail/${id}`}>
      <div className={styles.imgBox}>
        <img src={imgPath} alt={name} />
      </div>
      <h2>{name}</h2>
    </Link>
  );
}

export default Character;
