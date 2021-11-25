import React, { useEffect, useState } from "react";
import UserList from "../components/UserList";
import MyModal from "../components/MyModal/MyModal"
import axios from 'axios';
import Loader from "react-loader-spinner";

const Users = () => {

  const [loading, setLoading] = useState(true);
  const fetchUsers= async ()=>{
    const users =await axios.get('https://jsonplaceholder.typicode.com/users');
    setUsers(users.data);
    setLoading(false)
  }
  useEffect(()=>{
    fetchUsers();
  },[])//[]-работает только при загрузке страницы

  const [users, setUsers] = useState(null);
  const [user, setUser] = useState(
    {
      name: '',
      phone: '',
      userName: '',
      email: '',
    });

  const onChange = (e) => {
    if (e.target.id == "name") {
      setUser({ ...user, name: e.target.value });
    } else if (e.target.id == "phone") {
      setUser({ ...user, phone: e.target.value });
    }
    else if (e.target.id == "email") {
      setUser({ ...user, email: e.target.value });
    }
    else if (e.target.id == "username") {
      setUser({ ...user, username: e.target.value });
    }
  }

  const addUser = () => {
    const id = Math.random() * 1
    setUser({ ...user, id: id })
    setUsers([...users, user]);
    setUser({
      name: '',
      phone: '',
      userName: '',
      email: '',
    });
  }

  const removeUser = (id) => {
    const confirm = window.confirm("Реально удалить?")
    if (confirm == true) setUsers(users.filter((user) => user.id !== id)) //для проверки на удаление
  };
  const clear = () => {
    setUser({ name: '', phone: '' , email: '',})
  }
  console.log(user);
  const [showModal, setshowModal] = useState(false)




  return (
    <div className="App">

      <div className="container">
        <MyModal visible={showModal} setVisible={setshowModal}>
          {
                 <>
                 <div className="input-field col s6">
                   <i className="material-icons prefix">account_circle</i>
                   <input
                     id="name"
                     type="text"
                     className="validate"
                     value={user.name}
                     placeholder="Enter Name"
                     onChange={onChange}
                   />

                 </div>
                 <div className="input-field col s6">
                   <i className="material-icons prefix">phone</i>
                   <input
                     id="phone"
                     type="tel"
                     value={user.phone}
                     className="validate"
                     placeholder="Enter Phone"
                     onChange={onChange}
                   />
                   </div>
                  <div className="input-field col s6">
                  <i className="material-icons prefix">email</i>
                   <input
                     id="email"
                     type="email"
                     value={user.email}
                     className="validate"
                     placeholder="Enter Email"
                     onChange={onChange}
                   />
                   </div>
                   <div>
                   <a className="waves-effect waves-light btn m-1"
                     onClick={() => addUser()}>Add</a>
                   <a className="waves-effect waves-light right btn m-1"
                     onClick={() => clear()}>Cancel</a>
                    </div>

               </>
          }
        </MyModal>
        <div className="row m-1">
          <div className="col s4">
            <a className="waves-effect waves-light btn"
              onClick={() => setshowModal(true)}
            >
              Add user
            </a>
          </div>
          <div className="col s8">

          </div>
        </div>
        {loading?(
          <Loader
          className="loader-center"
            type="MytatingDots"
            color="#ee6e73"
            height={100}
            width={100}
          />
        ):(<UserList search deleteUser={removeUser}>{users}</UserList>)
}
      </div>
    </div>
  );
}

export default Users;
