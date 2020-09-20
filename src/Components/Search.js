import React from 'react'
import '../Styles/Search.css'

import {FaSearch} from 'react-icons/fa'

export default function Search() {

    return (
        <div style={{marginTop:"100px"}}>
            <div className="InputCss0">
                <div className="InputCss">
                    <span className = "searchIconCss"><FaSearch /></span><input type="text" className="InputCss2" placeholder="Search for restaurants or dishes"/>
                </div>
            </div>
        </div>

    )
}