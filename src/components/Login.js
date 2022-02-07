import React from 'react'
import { setName } from "../components/redux/actions";
import { useDispatch, useSelector } from "react-redux";

function Login() {

    const name = useSelector( state => state.name)
    const dispatch = useDispatch()

    const submit = e => {
        e.preventDefault()
        console.log(name)
    }

    return (
        <div className='login'>
            <h2>Hello trainer!</h2>
            <h4>Give me you name to start</h4>

            <div className='input-form'>
                <input value={name} onChange={e => dispatch(setName(e.target.value))}/>
                <button onClick={submit}> submit </button>
            </div>
        </div>
    )
}

export default Login
