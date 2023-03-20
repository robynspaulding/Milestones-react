import axios from "axios";

export function KidsNew() {
  const handleCreateKid = (params) => {
    axios.post("http://localhost:3000/kids.json", params).then((response) => {
      const newKid = response.data;
      console.log("created new kid profile", newKid);
      window.location.href = "/";
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleCreateKid(params);
    event.target.reset;
  };

  return (
    <div id="kids-new">
      <h1>Add new kid</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="user_id" type="hidden" />
        </div>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Birthday: <input name="birthday" type="text" />
        </div>
        <div>
          Profile Pic: <input name="image_url" type="text" />
        </div>
        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
}
