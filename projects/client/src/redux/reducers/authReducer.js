const initialState = {
    isLoggedIn: false,
    admin:null,
    admin_id:null,
}

const authReducer = (state=initialState,{type,payload})=>{
    switch(type){
        default:
            return state
    }
}

export default authReducer