import React, { useState } from "react";
import useInput from "./CustomHooks/useInput";

function UserForm() {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  const [firstNameInput, firstNameBind, firstNameReset] = useInput("");
  const [lastNameInput, lastNameBind, lastNameReset] = useInput("");
  const submitHandler = (e) => {
    e.preventDefault();
    alert(`First Name : ${firstNameInput} Last Name : ${lastNameInput}`);
    firstNameReset();
    lastNameReset();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>First Name : </label>
        <input type="text" {...firstNameBind} />
        <label>Last Name : </label>
        <input type="text" {...lastNameBind} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
