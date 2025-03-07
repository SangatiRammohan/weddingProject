import React from "react";
import { useNavigate } from "react-router-dom";
import './Pricing.css'
import { useState } from "react";

const Pricing = () => {
    const [activeComponent, setActiveComponent] = useState("Component1");
    const navigate = useNavigate();
    const Component1 = () => 
  
        <div id='Pricefree'>
            <div className='Pricebox'>
                <div className='Matters'>
                    <h2>Unlimited Downloads</h2>
                    <h5> <img src="./images/check.png" alt="" />Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
                    <h5> <img src="./images/check.png" alt="" />Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
                    <h5> <img src="./images/check.png" alt="" />Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
                    <h5><img src="./images/check.png" alt="" />Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
                </div>
                <div className='BoxPrices'>
                    <h2><strike> &#8377; 14399</strike></h2>
                    <h1> &#8377; 12899</h1>
                    <div className="time">For Unlimited time</div>
                </div>
            </div>
            <button className='free' onClick={() => navigate("/page")}>Try ShaadiPix for Free <img src='../../../public/images/sparkle.png' alt="" /></button>
        
            </div>;
        const Component2 = () => 
        <div id='Pricefree'>
            <div className='Pricebox'>
                <div className='Matters'>
                    <h2>Unlimited Downloads</h2>
                    <h5> <img src="./images/check.png" alt="" />Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
                    <h5> <img src="./images/check.png" alt="" />Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
                    <h5> <img src="./images/check.png" alt="" />Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
                    <h5><img src="./images/check.png" alt="" />Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
                </div>
                <div className='BoxPrices'>
                    <h2><strike> &#8377; 30000</strike></h2>
                    <h1> &#8377; 22099</h1>
                    <div className="time">For Unlimited time</div>
                </div>
            </div>
            <button className='free' onClick={() => navigate("/page")}>Try ShaadiPix for Free <img src='../../../public/images/sparkle.png' alt="" /></button>
        </div>;
        const Component3 = () =>
         <div id='Pricefree'>
            <div className='Pricebox'>
                <div className='Matters'>
                    <h2>Unlimited Downloads</h2>
                    <h5> <img src="./images/check.png" alt="" />Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
                    <h5> <img src="./images/check.png" alt="" />Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
                    <h5> <img src="./images/check.png" alt="" />Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
                    <h5><img src="./images/check.png" alt="" />Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
                </div>
                <div className='BoxPrices'>
                    <h2><strike> &#8377; 67399</strike></h2>
                    <h1> &#8377; 55999</h1>
                    <div className="time">For Unlimited time</div>
                </div>
            </div>
            <button className='free' onClick={() => navigate("/page")}>Try ShaadiPix for Free <img src='../../../public/images/sparkle.png' alt="" /></button>
        
        </div>;
    return (
        <>
            <main>
                <div className='Pricing' >
                    <div className='PriceHeader'>
                        <h1>Pricing</h1>
                        <div className='Prices'>
                            <button onClick={() => setActiveComponent("Component1")} className='PriceBtn' >Monthly</button>
                            <button onClick={() => setActiveComponent("Component2")} className='PriceBtn'>Quarterly</button>
                            <button onClick={() => setActiveComponent("Component3")} className='PriceBtn'>Lifetime</button>

                        </div>
                    </div>

                    <div className="pricesMain">
                        {activeComponent === "Component1" && <Component1 />}
                        {activeComponent === "Component2" && <Component2 />}
                        {activeComponent === "Component3" && <Component3 />}
                    </div>


                </div>
            </main>
        </>)
};



export default Pricing;