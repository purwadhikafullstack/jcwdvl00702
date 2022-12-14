import React from "react"
import {useSelector} from 'react-redux'
import Dashboard from "./Admin/Dashboard"
import HomeFunc from "./HomeFunc"

export default function Main(){
    const {user} = useSelector(state=>({
        user:state.auth.user
      }))
    console.log(user)

    return (
        <div>
            {
                user ? 
                user.role == "admin" && <Dashboard/> :
                <HomeFunc/>
            }
            {
                user ?
                user.role == "user" && <HomeFunc/> :
                <HomeFunc/>
            }
        </div>
    )
}