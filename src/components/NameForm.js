import React, { useState } from 'react'

function NameForm() {

    const [value, setValue] = useState("")

    const submit = e => {
        e.preventDefault()
        console.log(value)
    }

    return (
        <div className='login'>
            <h2>Hello trainer!</h2>
            <h4>Give me you name to start</h4>

            <div className='input-form'>
                <input value={value} onChange={e => setValue(e.target.value)}/>
                <button onClick={submit}> submit </button>
            </div>
        </div>
    )
}

export default NameForm
