const initialState={
    detailData:[]
}

const userDetailReducer = (state=initialState,action) => {
    switch(action.type){
        case "USER_DETAIL":
            return{...state,detailData:action.payload}
        default:
            return state
    }
}

export default userDetailReducer