import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { RiShoppingBag4Line } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";

import './index.css'

const HeadingPage = () => {
    return(
        <div>
        <div className="logosDiv">
            <div className="menuAndLogo">
                <img
                src="https://i.ibb.co/f4h45nT/Logo.png"
                alt="Logo"
                className="image"
                />
            </div>
            <div>
                <h1 className="logo">LOGO</h1>
            </div>
            <div className="logosindividualdiv">
                <CiSearch className="margin-element"/>
                <CiHeart className="margin-element" />
                <RiShoppingBag4Line className="margin-element" />
                <IoPersonOutline className="margin-element person-icon" />
                <select className="selectItem margin-element selectEngItem">
                    <option>ENG</option>
                </select>
            </div>
        </div>
        <div className="md-buttons-headingPage">
            <button className="button">SHOP</button>
            <button className="button">SKILLS</button>
            <button className="button">STORIES</button>
            <button className="button">ABOUT</button>
            <button className="button">CONTACT US</button>
        </div>
        </div>
    )
}

export default HeadingPage