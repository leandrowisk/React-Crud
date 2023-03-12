import { createSlice } from '@reduxjs/toolkit';


const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        addUser: (state, action) => {
            state = action.payload;
            const user = state['values'];
            fetch('https://fakestoreapi.com/users',{
                method:"POST",
                body:JSON.stringify(user)
            }).then(res=>res.json())
            .then(json=> { 
                if (user.username) {
                    alert(`Usuário ${user.username} de ID ${json.id} criado com sucesso`)
                }
            });
        },
        editUser: (state, action) => {
            const user = action.payload;
            fetch(`https://fakestoreapi.com/users/${user.id}`,{
            method:"PUT",
            body:JSON.stringify(user)
        }).then(res=>res.json())
            .then(json=> alert(`Usuário ${user.id} Atualizado com sucesso`))
        },
        deleteUser: (state, action) => {
            const userId = action.payload;
            fetch(`https://fakestoreapi.com/users/${userId.id}`,{
                    method:"DELETE"
                }).then(res=>res.json())
                .then(json=> alert(`Usuário ${json.id} Deletado com sucesso`));
        }
    }
});



export const {addUser, editUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;