function Character({ name, description, img, extension, comics, series }) {
  return (
    <div>
      <img src={`${img}.${extension}`} />
      <h1>{name}</h1>
      <span>{description}</span>
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
  );
}

export default Character;
