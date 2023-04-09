import User from "./components/users/User";
import React,{useState,useEffect} from "react";
import AddUser from "./components/users/AddUser";

function App() {
  let [users,setUsers] = useState([]);
  let [showForm,setShowForm] = useState(false);
  useEffect(()=> {
    fetch("https://randomuser.me/api/?results=10")
    .then(res => res.json())
    .then(users => {
      let rawUser = users.results;
      let filterUser = rawUser.map(usr => {
        return {
          uuid : usr.login.uuid,
          name : `${usr.name.title} ${usr.name.first} ${usr.name.last}`,
          phone : usr.phone,
          cell : usr.cell,
          image : usr.picture.thumbnail
        }
      });
      setUsers(filterUser);
    })
    .catch(err => console.log(err));
  },[])

  const removeUserHandler = (uuid)=>{
      let remainUser = users.filter(ele => ele.uuid !== uuid);
      setUsers(remainUser);
  }

  const showUserSubmitForm = ()=>{
    setShowForm(!showForm);
  }

  const addUserHandler = (user)=>{
    let newUserList = [user,...users];
    setUsers(newUserList);
    setShowForm(!showForm);
  }

  return (
    <div className="container my-3">
      <h1 className="text-center my-5 text-info">Our Employee</h1>
      <button className="btn btn-success my-3" onClick={showUserSubmitForm}>Add Employee</button>
      {showForm && <AddUser addUser={addUserHandler} />}
      {
        users.map( usr => <User data={usr} key={usr.uuid} remove={removeUserHandler} />)
      }
    </div>
  );
}

export default App;