import React,{useContext,useEffect} from 'react';
import {AuthContext} from '../index'
import { useNavigate } from 'react-router-dom';

function Profile() {
    const IsLogged   = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!IsLogged){
            return navigate('/');
        }
    },[IsLogged])
    return (
        <div>
            <h4>Welcome : You are LoggedIn</h4>
        </div>
    );
}

export default Profile;