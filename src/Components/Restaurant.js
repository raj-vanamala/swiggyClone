import React from 'react' 
import '../Styles/Restaurant.css'

export default function Restaurant() {

    return(
        <div style={{marginTop:"100px"}}>
            <div>
                <div className="restaurantHeaderCss1">
                    <div className="restaurantHeaderCss2">
                        <div className="restaurantHeaderContainer">
                            <div className="restaurantHeaderPart1">
                                <div className="restaurantHeaderPart1Content">
                                    <img style={{height: "165px"}} alt="1"  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ducf3kqrp33zuyfhdnjq" />
                                </div>
                            </div>
                            <div className="restaurantHeaderPart2">
                                <div className="restaurantHeaderPart2Content">
                                    <div style={{fontWeight: "300px",fontSize: "32px"}}>A2B Veg</div>
                                    <div style={{marginTop : "10px",fontSize: "15px",opacity : "0.7"}}>North Indian, Chinese, South Indian</div>
                                    <div style={{marginTop : "10px",fontSize: "15px",opacity : "0.7"}}>Sastri Nagar, Adyar</div>
                                    <div className="flexContainer1">
                                        <div className="flexContainer2">
                                            <div style={{fontWeight: "600px",fontSize: "16px"}}>4.0</div>
                                            <div style={{fontWeight: "400px",fontSize: "12px",opacity : "0.7"}}>100+ Ratings</div>
                                        </div>
                                        <div className="flexContainer2">
                                            <div style={{fontWeight: "600px",fontSize: "16px"}}>33 mins</div>
                                            <div style={{fontWeight: "400px",fontSize: "12px",opacity : "0.7"}}>Delivery Time</div>
                                        </div>
                                        <div className="flexContainer2">
                                            <div style={{fontWeight: "600px",fontSize: "16px"}}>₹ 300</div>
                                            <div style={{fontWeight: "400px",fontSize: "12px",opacity : "0.7"}}>Cost For Two</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="restaurantHeaderPart3">
                                <div className="restaurantHeaderPart3Content" style = {{border: "1px solid white"}}>
                                    <div>OFFER</div>
                                    <blockquote>No Offers Available</blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="restaurantMenuCss">
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
    
}