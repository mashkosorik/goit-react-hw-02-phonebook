import React from "react";
import s from "./phoneEditor.module.css";

const PhoneFilter = ({filter, onHandleChangeFilter}) => {
  return (
    <>
      <label  htmlFor="name">
        <p  className={s.contacts}>Search</p>
      </label>
      <input className={s.search}
        id="name"
        name="userName"
        type="text"
        value={filter}
        onChange={onHandleChangeFilter}
        
      />
    </>
  );
};

export default PhoneFilter;
