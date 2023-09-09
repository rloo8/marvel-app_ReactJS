import { Link } from "react-router-dom";

function Characters({ id, name, img, extension }) {
  return (
    <div>
      <h2>
        <Link to={`/detail/${id}`}>{name}</Link>
      </h2>
      <img src={`${img}.${extension}`} />
    </div>
  );
}

export default Characters;
