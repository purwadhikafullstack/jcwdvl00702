const setDetail=(data)=>({
    type:"USER_DETAIL",
    payload:data
})

export const getUserDetail = (data) =>(dispatch)=>{
    dispatch(setDetail(data))
}