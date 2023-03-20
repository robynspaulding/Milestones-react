import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function KidsShow() {
  const params = useParams();
  const [kid, setKid] = useState({});

  const handleShowKid = () => {
    axios.get(`http://localhost:3000/kids/${params.id}.json`).then((response) => {
      setKid(response.data);
    });
  };

  useEffect(handleShowKid, []);

  return (
    <div id="kids-show">
      <div key={kid.id}></div>
      <h1>{kid.name}</h1>
      <img src={kid.image_url} style={{ width: "20rem" }} />
      <h3>Birthday: {kid.birthday}</h3>
    </div>
  );
}
