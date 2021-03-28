export const initialState = {
    name: '',
    email:'',
    avatar: '',
    favorites: [],
    appointments: []
};
//grade de ações
export const UserReducer = (state, action) => {
    switch(action.type){
        //uma da ações é definir um avatar
        case 'setUser':
            return{
                ...state, 
                name: action.payload.name, 
                email:action.payload.email, 
                avatar: action.payload.avatar
            };
        break;

        default:
            return state; 
    }
}