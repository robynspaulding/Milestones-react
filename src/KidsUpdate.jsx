export function KidsUpdate(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateKid(props.kid.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyKid(props.kid);
  };

  return (
    <div id="kids-update">
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" defaultValue={props.kid.name} />
        <input name="birthday" type="text" defaultValue={props.kid.birthday} />
        <input name="image_url" type="text" defaultValue={props.kid.image_url} />
        <button type="submut"> Update {props.kid.name}'s Info </button>
        <button onClick={handleClick}>Delete Profile </button>
      </form>
    </div>
  );
}
