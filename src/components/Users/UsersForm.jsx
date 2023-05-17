import React, { useState } from "react";
import "./UserForm.css";
import Button from "../UI/Button";

const UsersForm = (props) => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('')
  const submitHandler = (e)=>{
    e.preventDefault();
    if(userName.trim().length === 0 || userAge.trim().length === 0) {
      return;
    }

    if(+userAge < 1){
      return;
    }
    props.onAddUser(userName, userAge);
    setUserName('');
    setUserAge('');
  }
  return (
    <form onSubmit={submitHandler} className="form-wrapper">
      <div className="input-wrapper">
        <input type="text" name="name" placeholder="Enter name" value={userName} onChange={(e)=> setUserName(e.target.value)} />
      </div>
      <div className="input-wrapper">
        <input type="text" name="name" placeholder="Enter Age" value={userAge} onChange={(e)=> setUserAge(e.target.value)} />
      </div>
      <div className="input-wrapper submit">
        <Button type="submit" className="button">Add User</Button>
      </div>
    </form>
  );
};

export default UsersForm;
