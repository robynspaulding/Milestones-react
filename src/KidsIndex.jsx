export function KidsIndex(props) {
  return (
    <div id="kids-index">
      <h1>All Kids</h1>
      {props.kids.map((kid) => (
        <>
          <h2 key={kid.id}> {kid.name}</h2>
          <p>Birthday: {kid.birthday}</p>
          <img src={kid.image_url} style={{ width: "18rem" }} />
        </>
      ))}
    </div>
  );
}
