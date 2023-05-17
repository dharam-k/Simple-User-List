import { useState } from 'react';
import Card from './components/UI/Card';
import UserList from './components/Users/UserList';
import UsersForm from './components/Users/UsersForm';

function App() {
  const [userData, setUserData] = useState([]);
  const addUserHandler = (uName, uAge) => { 
    setUserData((prevState)=>{
        return [...prevState, {name: uName, age: uAge}]
    })
   }
  return (
    <Card>
      <UsersForm onAddUser={addUserHandler} />
      <UserList users={userData}/>
    </Card>
  );
}

export default App;
