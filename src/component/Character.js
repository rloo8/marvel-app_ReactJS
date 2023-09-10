import styles from "./Character.module.css";

function Character({ name, description, img, extension, comics, series }) {
  return (
    <div className={styles.character}>
      <h1>{name}</h1>
      <img src={`${img}.${extension}`} />
      <span>{description}</span>

      <div className={styles.category}>
        <div>
          <h3>COMICS</h3>
          <ul>
            {comics.items.map((item) => (
              <li key={item.name}>{item.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>SERIES</h3>
          <ul>
            {series.items.map((item) => (
              <li key={item.name}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Character;
