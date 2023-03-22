import axios from "axios";
import { useState, useEffect } from "react";

export function FamilyTreesIndex() {
  const [familyTrees, setFamilyTrees] = useState([]);

  const handleIndexFamilyTrees = () => {
    axios.get("http://localhost:3000/family_trees.json").then((response) => {
      console.log(response.data);
      setFamilyTrees(response.data);
    });
  };

  useEffect(handleIndexFamilyTrees, []);

  return (
    <div id="family_trees-index">
      <h1>My Family Tree</h1>
      {familyTrees.map((familyTree) => (
        <div key={familyTree.id} className="row justify-content-center">
          <div className="card col-2 shadow m-3" style={{ width: "40rem" }}>
            <h2 className="card-title">
              {" "}
              {familyTree.name}, {familyTree.relationship}
            </h2>
            <br />
            <div className="row justify-content-center">
              <img src={familyTree.image_url} style={{ width: "18rem" }} />
            </div>
            <br />
            <br />
          </div>
        </div>
      ))}
    </div>
  );
}
