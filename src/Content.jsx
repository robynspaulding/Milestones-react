import axios from "axios";
import { useState, useEffect } from "react";
import { KidsIndex } from "./KidsIndex";
import { Modal } from "./Modal";
import { KidsUpdate } from "./KidsUpdate";

export function Content() {
  const [kids, setKids] = useState([]);

  const handleIndexKids = () => {
    axios.get("http://localhost:3000/kids.json").then((response) => {
      console.log(response.data);
      setKids(response.data);
    });
  };

  const [isKidsUpdateVisible, setIsKidsUpdateVisible] = useState(false);
  const [currentKid, setCurrentKid] = useState({});

  const handleUpdateKid = (kid) => {
    console.log("handleUpdateKid", kid);
    setIsKidsUpdateVisible(true);
    setCurrentKid(kid);
  };

  const handleHideKid = () => {
    console.log("handleHideKid");
    setIsKidsUpdateVisible(false);
  };

  const handleUpdateKidInModal = (id, params, successCallback) => {
    console.log("handleUpdateKid", params);
    axios.patch(`http://localhost:3000/kids/${id}.json`, params).then((response) => {
      setKids(
        kids.map((kid) => {
          if (kid.id === response.data.id) {
            return response.data;
          } else {
            return kid;
          }
        })
      );
      successCallback();
      handleHideKid();
    });
  };

  const handleDestroyKid = (kid) => {
    console.log("handleDestroykid", kid);
    axios.delete(`http://localhost:3000/kids/${kid.id}.json`).then((response) => {
      setKids(kids.filter((k) => k.id !== kid.id));
      handleHideKid();
    });
  };

  useEffect(handleIndexKids, []);
  return (
    <div>
      <KidsIndex kids={kids} onSelectKid={handleUpdateKid} />
      <Modal show={isKidsUpdateVisible} onClose={handleHideKid}>
        <KidsUpdate kid={currentKid} onUpdateKid={handleUpdateKidInModal} onDestroyKid={handleDestroyKid} />
      </Modal>
    </div>
  );
}
