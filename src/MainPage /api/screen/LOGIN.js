import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ERROR from './ERROR';
import SUCCESS from './SUCCESS';


function LOGIN() {
    const [users, setUsers] = useState(null);
    const [login, setLogin] = useState(null);
    const [error,setError] = useState(null);


    useEffect(() => {
        const fetchUsers = async() => {
            try {
                setLogin(null);
                setUsers(null);
                setError(false);
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/users'
        );
        setUsers(response.data);
        } catch(e) {
            setError(e);
        } 
    };
    fetchUsers();
}, [setLogin]);

if(login) return <SUCCESS />;
if(error) return <ERROR/>;
if(!users) return null 
return (
    <div>
        로그인 헤더
    </div>
 )
}

export default LOGIN;