import React, { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";
import "./style.css";

const Contacts = () => {
  const [contacts, setContacts] = useState([
    {
      fullname: "Mehmet",
      phone_number: "123123123",
    },
    {
      fullname: "mustafa",
      phone_number: "345645646",
    },
    {
      fullname: "Azra",
      phone_number: "987465",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
};

export default Contacts;
