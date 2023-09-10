import { Link } from "react-router-dom";
import styles from "./Characters.module.css";

function Characters({ id, name, img, extension }) {
  return (
    <div>
      <div className={styles.imgBox}>
        <img src={`${img}.${extension}`} />
      </div>
      <h2>
        <Link to={`/detail/${id}`}>{name}</Link>
      </h2>
    </div>
  );
}

export default Characters;
