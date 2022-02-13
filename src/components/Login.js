import React from 'react'
import { setName } from "../components/redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./styles/login.css";

function Login() {

    const name = useSelector( state => state.name)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submit = e => {
        e.preventDefault()
        console.log(name)
        navigate("/pokedex")
    }

    return (
        <div className='login-wrapper'>
            <div className='greeting-container'>
                <h2>Hello trainer!</h2>
                <div className='pokemon-ash-image'></div>    
            </div>
            <p>Give me you name to start</p>

            <div className='input-form'>
                <input value={name} onChange={e => dispatch(setName(e.target.value))}/>
                <button onClick={submit}> <i className="bi bi-send-fill"></i> </button>
            </div>
        </div>
    )
}

export default Login
