import React from 'react';
import shoe from "../../images/sheo.jpg";
import mouse from "../../images/mouse.jpg";
import women from "../../images/frocks.jpg";
import "./posters.scss";
import { Link } from 'react-router-dom';

const Shopbox = () => {
    return (
        <section>
            <div className="container">
                <div className="boxs">
                    <div className="shop-box">
                        <img src={shoe} alt="Shop Now" className="img" />
                        <div className="box-text">
                            <h5>MEN'S FOOTWARE SALE UPTO 50%</h5>
                            <h4 className="highlight">$499</h4>
                            <Link className="button1">Shop Now</Link>
                        </div>
                    </div>
                    <div className="shop-box">
                        <img src={mouse} alt="Shop Now" className="img" />
                        <div className="box-text">
                            <h5 className="italic">MOUSE ON SALE</h5>
                            <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <Link className="button2">Shop now</Link>

                        </div>
                    </div>
                    <div className="shop-box">
                        <img src={women} alt="Shop Now" className="img" />
                        <div className="box-text">
                            <h5 className="poiret">WOMEN APPAREL SALE UPTO 30%</h5>
                            <h4>$599</h4>
                            <Link className="button3">Shop Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Shopbox



