import React from 'react'
import '../Styles/Home.css'

export default function Home() {

    return (
        <div>
            <div className="InfoBar">
                <div className="ImagesContainerCss">
                    <div><img className="imageCss" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ylixa43q8rp8jtjtvppt"/></div>
                    <div><img className="imageCss" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ztpd5q9awnmmnefczn5x"/></div>
                    <div><img className="imageCss" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ruhdgnzrjhb9r2nq9wg4"/></div>
                    <div><img className="imageCss" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/gac7esjmxywyqh0t0kws"/></div>
                </div>
            </div>
            <br /><br /><br />
                    <div className="sideBar">
                                <a className="sideBarLink" href="#TopPicks">
                                    <div className="flexContainer">
                                        <div><img className="linkImage" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_90,h_90/rng/md/carousel/production/vt13uzhjrg5r49kh9oru" alt="i1"/></div>
                                        <div className="flexContainer2">
                                            <div>Top Picks</div>
                                            <div className="fontCss">5 OPTIONS</div>
                                        </div>
                                    </div>
                                </a>
                                <a className="sideBarLink" href="#Premium">
                                    <div className="flexContainer">
                                        <div><img className="linkImage" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_90,h_90/marketing-dashboard/carousel/ftnsdmo6fotidtzobbm2" alt="i11"/></div>
                                        <div className="flexContainer2">
                                            <div>Premium</div>
                                            <div className="fontCss">5 OPTIONS</div>
                                        </div>
                                    </div>
                                </a>
                                <a className="sideBarLink" href="#OnlyOnSwiggy">
                                    <div className="flexContainer">
                                        <div><img className="linkImage" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_90,h_90/y4vnumwu4f8olsly1hnw" alt="i111"/></div>
                                        <div className="flexContainer2">
                                            <div>Only On Swiggy</div>
                                            <div className="fontCss">5 OPTIONS</div>
                                        </div>
                                    </div>
                                </a>
                                <a className="sideBarLink" href="#VegetarianOptions">
                                    <div className="flexContainer">
                                        <div><img className="linkImage" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_90,h_90/bm8bziikwyvwqsml1clm" alt="i1111"/></div>
                                        <div className="flexContainer2">
                                            <div>Vegetarian Options</div>
                                            <div className="fontCss">5 OPTIONS</div>
                                        </div>
                                    </div>
                                </a>
                                <a className="sideBarLink" href="#OffersNearYou">
                                    <div className="flexContainer">
                                        <div><img className="linkImage" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_90,h_90/urw8usdf4mk9aywd59gq" alt="i1111"/></div>
                                        <div className="flexContainer2">
                                            <div>Offers Near You</div>
                                            <div className="fontCss">5 OPTIONS</div>
                                        </div>
                                    </div>
                                </a>
                                <a className="sideBarLink" href="#AllHotels">
                                    <div className="flexContainer">
                                        <div><img className="linkImage" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_90,h_90/urw8usdf4mk9aywd59gq" alt="i1111"/></div>
                                        <div className="flexContainer2">
                                            <div>SEE ALL</div>
                                            <div className="fontCss">5 OPTIONS</div>
                                        </div>
                                    </div>
                                </a>
                    </div>
                    <div className="sideBarContent">
                                <div id="TopPicks" style={{marginTop : "-580px",marginBottom : "100px"}}>
                                    <h1>Top Picks</h1>
                                    <div className="flexContainer">
                                        <div className="hotelCardCss">
                                                <a href="">
                                                    <div><img className="hotelCardImageCss" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ducf3kqrp33zuyfhdnjq" alt="1"/></div>
                                                    <div className="flexContainer3">
                                                        <div className="hotelNameCss">A2B Veg</div>
                                                        <div className="hotelVarieties">North Indian, Chinese, South Indian</div>
                                                    </div>
                                                    <div className="hotelInfoCss fontCss2">
                                                        <div className="ratingCss"><span style={{fontWeight:"bolder"}}>*</span><span style={{float:"right"}}>4.3</span></div>
                                                        <div>•</div>
                                                        <div>28 MINS</div>
                                                        <div>•</div>
                                                        <div>₹300 FOR TWO</div>
                                                    </div>
                                                </a>
                                            </div>
                                        <div className="hotelCardCss">
                                            <a href="">
                                                <div><img className="hotelCardImageCss" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/pvkq7je1y87ghxtcsres" alt="1"/></div>
                                                <div className="flexContainer3">
                                                    <div className="hotelNameCss">Cool Biz</div>
                                                    <div className="hotelVarieties">Juices, Beverages, Combo, Desserts, Fast Food, Snacks</div>
                                                </div>
                                                <div className="hotelInfoCss fontCss2">
                                                    <div className="ratingCss"><span style={{fontWeight:"bolder"}}>*</span><span style={{float:"right"}}>4.3</span></div>
                                                    <div>•</div>
                                                    <div>28 MINS</div>
                                                    <div>•</div>
                                                    <div>₹150 FOR TWO</div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="hotelCardCss">
                                            <a href="">
                                                <div><img className="hotelCardImageCss" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ckoimcsqdsileq07czhp" alt="1"/></div>
                                                <div className="flexContainer3">
                                                    <div className="hotelNameCss">Dindigul Thalappakatti</div>
                                                    <div className="hotelVarieties">Biryani, South Indian, Grill, Indian, Chinese</div>
                                                </div>
                                                <div className="hotelInfoCss fontCss2">
                                                    <div className="ratingCss"><span style={{fontWeight:"bolder"}}>*</span><span style={{float:"right"}}>4.0</span></div>
                                                    <div>•</div>
                                                    <div>42 MINS</div>
                                                    <div>•</div>
                                                    <div>₹600 FOR TWO</div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div id="Premium" style={{marginBottom : "100px"}}><h1>Premium</h1>
                                    <div className="flexContainer">
                                            <div className="hotelCardCss">
                                                    <a href="">
                                                        <div><img className="hotelCardImageCss" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/z0thl5ew7qosbchloncu" alt="1"/></div>
                                                        <div className="flexContainer3">
                                                            <div className="hotelNameCss">Haven Sampoorna</div>
                                                            <div className="hotelVarieties">Indian, Chinese</div>
                                                        </div>
                                                        <div className="hotelInfoCss fontCss2">
                                                            <div className="ratingCss"><span style={{fontWeight:"bolder"}}>*</span><span style={{float:"right"}}>4.3</span></div>
                                                            <div>•</div>
                                                            <div>43 MINS</div>
                                                            <div>•</div>
                                                            <div>₹1200 FOR TWO</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            <div className="hotelCardCss">
                                                <a href="">
                                                    <div><img className="hotelCardImageCss" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/yctowgzztbiyh6u1yrny" alt="1"/></div>
                                                    <div className="flexContainer3">
                                                        <div className="hotelNameCss">Cream Centre</div>
                                                        <div className="hotelVarieties">North Indian, Italian, Mexican</div>
                                                    </div>
                                                    <div className="hotelInfoCss fontCss2">
                                                        <div className="ratingCss"><span style={{fontWeight:"bolder"}}>*</span><span style={{float:"right"}}>4.3</span></div>
                                                        <div>•</div>
                                                        <div>28 MINS</div>
                                                        <div>•</div>
                                                        <div>₹1200 FOR TWO</div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="hotelCardCss">
                                                <a href="">
                                                    <div><img className="hotelCardImageCss" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/prjripuxadrpmqhjjgbe" alt="1"/></div>
                                                    <div className="flexContainer3">
                                                        <div className="hotelNameCss">Wok n a Box</div>
                                                        <div className="hotelVarieties">Thai, Asian, Chinese, Malaysian</div>
                                                    </div>
                                                    <div className="hotelInfoCss fontCss2">
                                                        <div className="ratingCss"><span style={{fontWeight:"bolder"}}>*</span><span style={{float:"right"}}>4.1</span></div>
                                                        <div>•</div>
                                                        <div>47 MINS</div>
                                                        <div>•</div>
                                                        <div>₹300 FOR TWO</div>
                                                    </div>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                                <div id="OnlyOnSwiggy" style={{marginBottom : "100px"}}>
                                    <h1>Only On Swiggy</h1>
                                    <div className="flexContainer">
                                            <div className="hotelCardCss">
                                                    <a href="">
                                                        <div><img className="hotelCardImageCss" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cvkggej0qwdjwhgpsilw" alt="1"/></div>
                                                        <div className="flexContainer3">
                                                            <div className="hotelNameCss">The North Indian Rasoi</div>
                                                            <div className="hotelVarieties">North Indian, Punjabi, Thalis, Combo, Biryani</div>
                                                        </div>
                                                        <div className="hotelInfoCss fontCss2">
                                                            <div className="ratingCss"><span style={{fontWeight:"bolder"}}>*</span><span style={{float:"right"}}>4.3</span></div>
                                                            <div>•</div>
                                                            <div>40 MINS</div>
                                                            <div>•</div>
                                                            <div>₹250 FOR TWO</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            <div className="hotelCardCss">
                                                <a href="">
                                                    <div><img className="hotelCardImageCss" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/sjczbzq0g53lrosvm3en" alt="1"/></div>
                                                    <div className="flexContainer3">
                                                        <div className="hotelNameCss">Loiee Sweets & Snacks</div>
                                                        <div className="hotelVarieties">North Indian, Italian, Mexican</div>
                                                    </div>
                                                    <div className="hotelInfoCss fontCss2">
                                                        <div className="ratingCss"><span style={{fontWeight:"bolder"}}>*</span><span style={{float:"right"}}>4.0</span></div>
                                                        <div>•</div>
                                                        <div>54 MINS</div>
                                                        <div>•</div>
                                                        <div>₹300 FOR TWO</div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="hotelCardCss">
                                                <a href="">
                                                    <div><img className="hotelCardImageCss" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rimpdfgz0juwvkljalsv" alt="1"/></div>
                                                    <div className="flexContainer3">
                                                        <div className="hotelNameCss">Combo Corner</div>
                                                        <div className="hotelVarieties">Combo, Continental, Chinese, North Indian, Thalis, American, Barbecue, Asian</div>
                                                    </div>
                                                    <div className="hotelInfoCss fontCss2">
                                                        <div className="ratingCss"><span style={{fontWeight:"bolder"}}>*</span><span style={{float:"right"}}>---</span></div>
                                                        <div>•</div>
                                                        <div>47 MINS</div>
                                                        <div>•</div>
                                                        <div>₹200 FOR TWO</div>
                                                    </div>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                                <div id="VegetarianOptions" style={{marginBottom : "100px"}}>
                                <h1>Vegetarian Options</h1>
                                <div className="flexContainer">
                                            <div className="hotelCardCss">
                                                    <a href="">
                                                        <div><img className="hotelCardImageCss" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ducf3kqrp33zuyfhdnjq" alt="1"/></div>
                                                        <div className="flexContainer3">
                                                            <div className="hotelNameCss">A2B Veg</div>
                                                            <div className="hotelVarieties">North Indian, Chinese, South Indian</div>
                                                        </div>
                                                        <div className="hotelInfoCss fontCss2">
                                                            <div className="ratingCss"><span style={{fontWeight:"bolder"}}>*</span><span style={{float:"right"}}>4.3</span></div>
                                                            <div>•</div>
                                                            <div>38 MINS</div>
                                                            <div>•</div>
                                                            <div>₹300 FOR TWO</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            <div className="hotelCardCss">
                                                <a href="">
                                                    <div><img className="hotelCardImageCss" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cqfqykdibhbghvbectft" alt="1"/></div>
                                                    <div className="flexContainer3">
                                                        <div className="hotelNameCss">Fresh Baked Goodness</div>
                                                        <div className="hotelVarieties">Bakery</div>
                                                    </div>
                                                    <div className="hotelInfoCss fontCss2">
                                                        <div className="ratingCss"><span style={{fontWeight:"bolder"}}>*</span><span style={{float:"right"}}>4.0</span></div>
                                                        <div>•</div>
                                                        <div>57 MINS</div>
                                                        <div>•</div>
                                                        <div>₹250 FOR TWO</div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="hotelCardCss">
                                                <a href="">
                                                    <div><img className="hotelCardImageCss" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fnotwzyhyaoafwyqy3eu" alt="1"/></div>
                                                    <div className="flexContainer3">
                                                        <div className="hotelNameCss">Madras Bowl</div>
                                                        <div className="hotelVarieties">Indian</div>
                                                    </div>
                                                    <div className="hotelInfoCss fontCss2">
                                                        <div className="ratingCss"><span style={{fontWeight:"bolder"}}>*</span><span style={{float:"right"}}>---</span></div>
                                                        <div>•</div>
                                                        <div>47 MINS</div>
                                                        <div>•</div>
                                                        <div>₹200 FOR TWO</div>
                                                    </div>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                                <div id="OffersNearYou" style={{marginBottom : "100px"}}>
                                <h1>Offers Near You</h1>
                                <div className="flexContainer">
                                            <div className="hotelCardCss">
                                                    <a href="">
                                                        <div><img className="hotelCardImageCss" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ducf3kqrp33zuyfhdnjq" alt="1"/></div>
                                                        <div className="flexContainer3">
                                                            <div className="hotelNameCss">A2B Veg</div>
                                                            <div className="hotelVarieties">North Indian, Chinese, South Indian</div>
                                                        </div>
                                                        <div className="hotelInfoCss fontCss2">
                                                            <div className="ratingCss"><span style={{fontWeight:"bolder"}}>*</span><span style={{float:"right"}}>4.3</span></div>
                                                            <div>•</div>
                                                            <div>38 MINS</div>
                                                            <div>•</div>
                                                            <div>₹300 FOR TWO</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            <div className="hotelCardCss">
                                                <a href="">
                                                    <div><img className="hotelCardImageCss" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cqfqykdibhbghvbectft" alt="1"/></div>
                                                    <div className="flexContainer3">
                                                        <div className="hotelNameCss">Fresh Baked Goodness</div>
                                                        <div className="hotelVarieties">Bakery</div>
                                                    </div>
                                                    <div className="hotelInfoCss fontCss2">
                                                        <div className="ratingCss"><span style={{fontWeight:"bolder"}}>*</span><span style={{float:"right"}}>4.0</span></div>
                                                        <div>•</div>
                                                        <div>57 MINS</div>
                                                        <div>•</div>
                                                        <div>₹250 FOR TWO</div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="hotelCardCss">
                                                <a href="">
                                                    <div><img className="hotelCardImageCss" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fnotwzyhyaoafwyqy3eu" alt="1"/></div>
                                                    <div className="flexContainer3">
                                                        <div className="hotelNameCss">Madras Bowl</div>
                                                        <div className="hotelVarieties">Indian</div>
                                                    </div>
                                                    <div className="hotelInfoCss fontCss2">
                                                        <div className="ratingCss"><span style={{fontWeight:"bolder"}}>*</span><span style={{float:"right"}}>---</span></div>
                                                        <div>•</div>
                                                        <div>47 MINS</div>
                                                        <div>•</div>
                                                        <div>₹200 FOR TWO</div>
                                                    </div>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                    </div>
                    <div id="AllHotels" className="sideBarContent">    

                        <div style={{marginBottom : "40px"}}>
                                    <h1>All Restaurants</h1>
                                    <div className="flexContainer">
                                        <div className="hotelCardCss">
                                                <a href="">
                                                    <div><img className="hotelCardImageCss" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ducf3kqrp33zuyfhdnjq" alt="1"/></div>
                                                    <div className="flexContainer3">
                                                        <div className="hotelNameCss">A2B Veg</div>
                                                        <div className="hotelVarieties">North Indian, Chinese, South Indian</div>
                                                    </div>
                                                    <div className="hotelInfoCss fontCss2">
                                                        <div className="ratingCss"><span style={{fontWeight:"bolder"}}>*</span><span style={{float:"right"}}>4.3</span></div>
                                                        <div>•</div>
                                                        <div>28 MINS</div>
                                                        <div>•</div>
                                                        <div>₹300 FOR TWO</div>
                                                    </div>
                                                </a>
                                            </div>
                                        <div className="hotelCardCss">
                                            <a href="">
                                                <div><img className="hotelCardImageCss" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/pvkq7je1y87ghxtcsres" alt="1"/></div>
                                                <div className="flexContainer3">
                                                    <div className="hotelNameCss">Cool Biz</div>
                                                    <div className="hotelVarieties">Juices, Beverages, Combo, Desserts, Fast Food, Snacks</div>
                                                </div>
                                                <div className="hotelInfoCss fontCss2">
                                                    <div className="ratingCss"><span style={{fontWeight:"bolder"}}>*</span><span style={{float:"right"}}>4.3</span></div>
                                                    <div>•</div>
                                                    <div>28 MINS</div>
                                                    <div>•</div>
                                                    <div>₹150 FOR TWO</div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="hotelCardCss">
                                            <a href="">
                                                <div><img className="hotelCardImageCss" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ckoimcsqdsileq07czhp" alt="1"/></div>
                                                <div className="flexContainer3">
                                                    <div className="hotelNameCss">Dindigul Thalappakatti</div>
                                                    <div className="hotelVarieties">Biryani, South Indian, Grill, Indian, Chinese</div>
                                                </div>
                                                <div className="hotelInfoCss fontCss2">
                                                    <div className="ratingCss"><span style={{fontWeight:"bolder"}}>*</span><span style={{float:"right"}}>4.0</span></div>
                                                    <div>•</div>
                                                    <div>42 MINS</div>
                                                    <div>•</div>
                                                    <div>₹600 FOR TWO</div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    <div id="AllHotels" className="sideBarContent">    

                            <div style={{marginBottom : "20px"}}>
                                        <div className="flexContainer">
                                            <div className="hotelCardCss">
                                                    <a href="">
                                                        <div><img className="hotelCardImageCss" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ducf3kqrp33zuyfhdnjq" alt="1"/></div>
                                                        <div className="flexContainer3">
                                                            <div className="hotelNameCss">A2B Veg</div>
                                                            <div className="hotelVarieties">North Indian, Chinese, South Indian</div>
                                                        </div>
                                                        <div className="hotelInfoCss fontCss2">
                                                            <div className="ratingCss"><span style={{fontWeight:"bolder"}}>*</span><span style={{float:"right"}}>4.3</span></div>
                                                            <div>•</div>
                                                            <div>28 MINS</div>
                                                            <div>•</div>
                                                            <div>₹300 FOR TWO</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            <div className="hotelCardCss">
                                                <a href="">
                                                    <div><img className="hotelCardImageCss" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/pvkq7je1y87ghxtcsres" alt="1"/></div>
                                                    <div className="flexContainer3">
                                                        <div className="hotelNameCss">Cool Biz</div>
                                                        <div className="hotelVarieties">Juices, Beverages, Combo, Desserts, Fast Food, Snacks</div>
                                                    </div>
                                                    <div className="hotelInfoCss fontCss2">
                                                        <div className="ratingCss"><span style={{fontWeight:"bolder"}}>*</span><span style={{float:"right"}}>4.3</span></div>
                                                        <div>•</div>
                                                        <div>28 MINS</div>
                                                        <div>•</div>
                                                        <div>₹150 FOR TWO</div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="hotelCardCss">
                                                <a href="">
                                                    <div><img className="hotelCardImageCss" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ckoimcsqdsileq07czhp" alt="1"/></div>
                                                    <div className="flexContainer3">
                                                        <div className="hotelNameCss">Dindigul Thalappakatti</div>
                                                        <div className="hotelVarieties">Biryani, South Indian, Grill, Indian, Chinese</div>
                                                    </div>
                                                    <div className="hotelInfoCss fontCss2">
                                                        <div className="ratingCss"><span style={{fontWeight:"bolder"}}>*</span><span style={{float:"right"}}>4.0</span></div>
                                                        <div>•</div>
                                                        <div>42 MINS</div>
                                                        <div>•</div>
                                                        <div>₹600 FOR TWO</div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                            </div>
                        </div>
        </div>

                    
    )
}