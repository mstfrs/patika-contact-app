import React, { useState } from "react";

const List = ({ contacts }) => {
  return (
    <div>
      <ul>
        {contacts.map((contact, i) => (
          <li key={i}>{contact.fullname}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
