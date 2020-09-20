import React from 'react'
import '../Styles/Help.css'

export default function Help() {

    return (
        <div style={{marginTop:"100px"}}>
            <div className = "sidebarCss">

                <div style={{position:"relative"}}>

                    <div style = {{height: "100vh",position: "relative"}}>

                    <div style={{paddingLeft: "75px", paddingRight: "40px",width: "477px"}}>

                        <div style={{padding: "32px 0 20px",marginBottom: "30px"}}>
                           
                        </div>
                        <div style={{position: "relative",paddingBottom: "20px"}}>
                            <div className="inputCss1">
                                <input type="text" className="inputCss2 inputCss3" placeholder="Search for area, street name.." />
                            </div>
                        </div>

                    </div>

                    </div>

                </div>

            </div>
        </div>
    )
}