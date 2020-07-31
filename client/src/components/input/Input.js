import React from "react";
import css from "./input.module.css";

export default function Input({ filter, onChangeFilter }) {
  const handleInputChange = (event) => {
    const newText = event.target.value;

    onChangeFilter(newText);
  };

  return (
    <div className={css.main}>
      <input
        className="center"
        placeholder="Filtro"
        type="text"
        value={filter}
        onChange={handleInputChange}
      />
    </div>
  );
}
