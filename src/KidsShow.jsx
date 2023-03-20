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
    <div id="kids-show" className="row justify-content-center">
      <div className="card col-2 shadow m-3" style={{ width: "20rem" }}>
        <img className="card-img" src={kid.image_url} alt="Card image cap" />
        <div className="card-body">
          <p className="card-text">
            {kid.name} <br /> {kid.birthday}
          </p>
        </div>
      </div>
    </div>
  );
}
