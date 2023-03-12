import React, { useState, useEffect }    from "react";
import { AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";
import { RiAddCircleLine }   from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { deleteUser }        from '../features/user';
import { useDispatch }       from "react-redux";



const Users = () => {
   
   const [users, getUsers] = useState([]);

   useEffect(()=> {
      fetch('https://fakestoreapi.com/users').then(res=>res.json())
      .then(users=> {
         getUsers(users);
      })
   }, [])

   const dispatch = useDispatch();
   const navigate = useNavigate();
   const userDelete = (id) => {
      dispatch(deleteUser({id: id}));
      navigate('/')
   }

   return (
     <>
         <div className="image">
            <img src="CRUD.png"></img>
         </div>

         {users ? <>
         <div className="add-btn"><Link to='add' className='link-btn add'><RiAddCircleLine/> Adicionar Usuário</Link></div>
         <div className="users-table">
               <table>
                  <thead>
                     <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                     </tr>
                  </thead>

               {users.map((user) => {
                  return [
                     <>
                     <tbody>
                        <tr>
                           <td>{user.id}</td>
                           <td>{user.username}</td>
                           <td>{user.email}</td>
                           <td>{user.phone}</td>
                           <td> <Link to={`/edit/${user.id}`} className='link-btn'><AiOutlineEdit/></Link></td>
                           <td onClick={() => userDelete(user.id)}><AiOutlineDelete className="delete-icon"/></td>
                        </tr>
                     </tbody>
                     </>
                  ]
               })}

               </table>
         </div>
      </>: <div className="loading"> Loading... </div>}
      </>
   )
}


export default Users;