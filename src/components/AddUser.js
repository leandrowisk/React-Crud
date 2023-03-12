
import { useDispatch } from "react-redux";
import { addUser }     from '../features/user';
import { useState }    from "react";
import { useNavigate } from "react-router-dom";



const UserForm = () => {

const navigate = useNavigate();
const emptyUser = {
    username: '',
    email: '',
    phone: '',
    password:'',
    name: {
        firstname:'',
        lastname:''
    },
    address:{
        city: '',
        street: '',
        number: 0,
        zipcode: '',
        geolocation:{
            lat:'',
            long:''
        }
    },
}


const [values, createUser] = useState(emptyUser);

const dispatch = useDispatch();
const create = () => {
    dispatch(addUser({values}));
    navigate('/')
}

return (
    <div className="user-form">
        <h2 className="title">Novo Usuário</h2>
        <label>Nome</label>
        <input type="text" value={values.name.firstname} onChange={event => createUser({...values, name: {...values.name, firstname: event.target.value}})}></input>
        <label>Sobrenome</label>
        <input type="text" value={values.name.lastname} onChange={event => createUser({...values, name: {...values.name, lastname: event.target.value}})}></input>
        <label>Nome de Usuário</label>
        <input type="text" value={values.username} onChange={event => createUser({...values, username: event.target.value})}></input>
        <label>Senha</label>
        <input type="password" value={values.password} onChange={event => createUser({...values, password: event.target.value})}></input>
        <label>Email</label>
        <input type="email"  value={values.email} onChange={event => createUser({...values, email: event.target.value})}></input>
        <label>Telefone</label>
        <input type="text" value={values.phone} onChange={event => createUser({...values, phone: event.target.value})}></input>
        <label>Cidade</label>
        <input type="text" value={values.address.city} onChange={event => createUser({...values, address: {...values.address, city: event.target.value}})}></input>
        <label>Rua</label>
        <input type="text" value={values.address.street} onChange={event => createUser({...values, address: {...values.address, street: event.target.value}})}></input>
        <label>Numero</label>
        <input type="number" value={values.address.number} onChange={event => createUser({...values, address: {...values.address, number: event.target.value}})}></input>
        <label>CEP</label>
        <input type="text" value={values.address.zipcode} onChange={event => createUser({...values, address: {...values.address, zipcode: event.target.value}})}></input>
        <button className="btn" onClick={() => {create()}}>Criar</button>
    </div>
)
}

export default UserForm;