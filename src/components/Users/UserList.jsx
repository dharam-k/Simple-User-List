import React from 'react'
import "./UserList.css";
import Button from '../UI/Button';

const UserList = (props) => {
    console.log(props.users);
  return (
    <ul className='user-list-wrapper'>
        {props.users.map((user,i) =>{
            return <li key={i}><span>{i+1 +"."} {user.name} ({user.age})</span><Button className="button">Delete</Button></li>
        })}
    </ul>
  )
}

export default UserList