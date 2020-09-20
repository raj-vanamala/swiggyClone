import React, { useState } from 'react'

export default function SignIn() {

    const [showForm,setFormVisibility] = useState(true);

    return (

       <h1 style={{color:"black",marginTop:"100px"}} className="CredentialsShowCss">SignIn</h1>
    )
}