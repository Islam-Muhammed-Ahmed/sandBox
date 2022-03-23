import React, { useState } from "react";

import styles from "./filter.module.css";

const Filter = ({ filteration }) => {
  const [filter, setFilter] = useState("");
  const filterHandeler = (e) => {
    const name = e.target.value;
    setFilter(name);
    name.length > 8 && alert("u can't type more than 8");
    filteration(name);
  };

  return (
    <div className={styles.parent}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search here"
        value={filter}
        onChange={filterHandeler}
      />
    </div>
  );
};

export default Filter;
