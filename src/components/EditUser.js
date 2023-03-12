import { useDispatch }            from "react-redux";
import { useState, useEffect }    from "react";
import { editUser }               from '../features/user';
import { useNavigate, useParams } from "react-router-dom";


const EditUser = () => {

    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
   
    const [values, updateUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/users/${params.id}`)
        .then(res=>res.json())
        .then(json=> {
            updateUser(json);
            setLoading(false);
        })
    }, [])

    const update = () => {
        dispatch(editUser(values));
        navigate('/');
    }

    return (
        <div className="user-form">
            <h2 className="title">Editar Usuário</h2>
            {!loading ? <>
                <label>Nome</label>
                <input type="text" value={values.name.firstname} onChange={event => updateUser({...values, name: {...values.name, firstname: event.target.value}})}></input>
                <label>Sobrenome</label>
                <input type="text" value={values.name.lastname} onChange={event => updateUser({...values, name: {...values.name, lastname: event.target.value}})}></input>
                <label>Nome de Usuário</label>
                <input type="text" value={values.username} onChange={event => updateUser({...values, username: event.target.value})}></input>
                <label>Senha</label>
                <input type="password" value={values.password} onChange={event => updateUser({...values, password: event.target.value})}></input>
                <label>Email</label>
                <input type="email"  value={values.email} onChange={event => updateUser({...values, email: event.target.value})}></input>
                <label>Telefone</label>
                <input type="text" value={values.phone} onChange={event => updateUser({...values, phone: event.target.value})}></input>
                <label>Cidade</label>
                <input type="text" value={values.address.city} onChange={event => updateUser({...values, address: {...values.address, city: event.target.value}})}></input>
                <label>Rua</label>
                <input type="text" value={values.address.street} onChange={event => updateUser({...values, address: {...values.address, street: event.target.value}})}></input>
                <label>Numero</label>
                <input type="number" value={values.address.number} onChange={event => updateUser({...values, address: {...values.address, number: event.target.value}})}></input>
                <label>CEP</label>
                <input type="text" value={values.address.zipcode} onChange={event => updateUser({...values, address: {...values.address, zipcode: event.target.value}})}></input>
                <button className="btn" onClick={() => {update()}}>Editar</button></> 
             :<div className="loading"> Loading... </div>
            }
        </div>
   )}


export default EditUser;