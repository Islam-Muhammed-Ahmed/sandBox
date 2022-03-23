import { useEffect, useState } from "react";
import axios from "axios";

import Card from "./card/Card";
import Filter from "./filter/Filter";

import "./styles.css";
import Modal from "./modal/Modal";

export default function App() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchName, setSearchName] = useState("");
  const url = "https://api.github.com/users";
  const gettingData = async () => {
    try {
      await axios
        .get(url)
        .then((res) => res.data)
        .then(setData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    gettingData();
  }, []);

  const deleteHandeler = (e, clickedIndex) => {
    console.log(e);
    try {
      const deleteOperation = data.filter(
        (el, index) => index !== clickedIndex
      );
      setData(deleteOperation);
      data &&
        setData((prevState) => {
          return prevState.filter((idx) => idx !== clickedIndex);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const filterNames = (name) => {
    console.log(name);
    setSearchName(name);
  };

  const namesHandeler = () => {
    if (searchName.length !== 0) {
      return data.filter((el) => el.login.includes(searchName));
    }
    return data;
  };

  return (
    <div className="App">
      <Modal show={showModal} hideModal={() => setShowModal(false)} />
      <div className="d-flex align-items-center justify-content-center mt-4 gap-5">
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="btn btn-outline-success p-2"
        >
          New User
        </button>
        <Filter filteration={filterNames} />
      </div>
      <Card data={namesHandeler()} deleteHandeler={deleteHandeler} />
    </div>
  );
}
