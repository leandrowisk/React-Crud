import './App.css';
import Users from "./components/Users.js";
import AddUser from "./components/AddUser";
import EditUser from './components/EditUser.js';
import { Route, Routes } from 'react-router-dom';



function App() {

  return (
    <Routes>
      <Route path='/' element={<Users/>}/>
      <Route path='/add' element={<AddUser/>}/>
      <Route path='/edit/:id' element={<EditUser/>}/>
    </Routes>
  );
}

export default App;
