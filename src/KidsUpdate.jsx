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
      <div className="container">
        <h3>Edit {props.kid.name}'s info</h3>
        <form onSubmit={handleSubmit} className="row justify-content-center">
          <div className="card shadow m-3" style={{ width: "20rem" }}>
            <input name="name" type="text" defaultValue={props.kid.name} />
            <input name="birthday" type="text" defaultValue={props.kid.birthday} />
            <input name="image_url" type="text" defaultValue={props.kid.image_url} />
            <br />
            <button className="btn btn-outline-primary" type="submut">
              {" "}
              Update Info{" "}
            </button>
            <br />
            <button className="btn btn-outline-danger" onClick={handleClick}>
              Delete Profile{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
