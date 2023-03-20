import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "../Signup";
import { KidsIndex } from "./KidsIndex";
import { Login } from "./Login";

export function Content() {
  const [kids, setKids] = useState([]);

  const handleIndexKids = () => {
    axios.get("http://localhost:3000/kids.json").then((response) => {
      console.log(response.data);
      setKids(response.data);
    });
  };

  useEffect(handleIndexKids, []);
  return (
    <div>
      <Signup />
      <Login />
      <KidsIndex kids={kids} />
    </div>
  );
}
