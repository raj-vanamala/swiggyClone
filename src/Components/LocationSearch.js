import React from 'react'
import '../Styles/LocationSearch.css'

export default function LocationSearch() {

    return (
        <div style={{marginTop:"100px"}}>
            <div className = "sidebarCss" style = {{border : "1px solid grey"}}>

                <div style={{position:"relative"}}>

                    <div style = {{height: "100vh",position: "relative"}}>

                    <div style={{paddingLeft: "75px", paddingRight: "40px",width: "477px"}}>

                        <div style={{padding: "32px 0 20px",marginBottom: "30px"}}>
                           
                        </div>
                        <div style={{position: "relative",paddingBottom: "20px"}}>
                            <div className="inputCss111">
                                <input type="text" className="inputCss222 inputCss333" placeholder="Search for area, street name.." />
                            </div>
                        </div>

                    </div>

                    </div>

                </div>

            </div>
        </div>
    )
}