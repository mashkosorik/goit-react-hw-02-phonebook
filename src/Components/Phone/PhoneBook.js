import React from "react";
import s from "./phoneEditor.module.css";

const PhoneBook = ({ contactList, deleteContact }) => {
  console.log(contactList);
  return (
    <>
      <h2 className={s.contacts}>Contacts</h2>
      <ul className={s.contacts}>
        {contactList.map((el) => {
          console.log(el);
          return (
            <li key={el.id}>
              <p>
                name - {el.name} number - {el.number}
              </p>
              <button id={el.id} onClick={deleteContact} >Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default PhoneBook;
