import React, { useState } from 'react'
import '../Styles/SignIn.css'

export default function SignIn() {

    const [showForm,setFormVisibility] = useState(true);

    return (

        // <div style={{marginTop:"100px"}}>
        <div className = "sidebarCss" style={{left: "auto",right: "0px",transform: "translate(0%, 0px)",border : "1px solid grey"}}>

            <div style={{position:"relative"}}>

                <div style={{paddingLeft: "40px", paddingRight: "0px",width: "402px"}}>

                    <div className="loginPartCss" style={{height:"130px"}}>
                        <div className="loginLabelCss">Login</div>
                        <div style = {{width: "190px",marginTop: "5px"}}></div>
                        <div style={{marginTop: "10px",position: "relative"}}>
                            or 
                            <a className="fontCss10" href="">Create An Account</a>
                        </div>
                        <img alt="i1" className="a b c" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" style={{width:"100px",height:"105px"}} />
                    </div>
                    <form>
                        <div>
                            <div className="inputCss">
                                <input type="tel" className="inputCss1" name="mobile" id="mobile" placeholder="Phone Number"/>
                                
                            </div>
                        </div>
                        <div className="buttonCss buttonCss1">
                            <button type="button" className="buttonCss2">Login</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}