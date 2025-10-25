import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function UserProfile(){
    const [user, setUser]= useState([])
    const params = useParams()
    const userId= params.id

    useEffect(() => {
        fetch (`http://localhost:4000/users${user.id}`)
        .then(r => r.json())
        .then(data => setUser(data))
        .catch(error => console.log(error))
    },[user.id])

    if(!user.name){
        return <h1>Loading...</h1>
    }
    return (
        <>
        <header>
            <NavBar />
        </header>
        <main>
            <h1>User Profile</h1>
        </main>
        </>
    )
}
export default UserProfile;