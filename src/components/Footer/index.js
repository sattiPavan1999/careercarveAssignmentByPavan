import './index.css'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return(
        <div className='footer-div'>
            <div className='for-m-device'>
            <div className='footer-first-part'>
            <div className='footer-first-part-left-side'>
            <p className='text'>BE THE FIRST TO KNOW</p>
            <p className='text'>Sign up for updates from mettā muse.</p>
            <div>
                <input placeholder='Enter your e-mail..'
                       className='input'/>
                <button type='button' 
                        className='subscribe-button'>SUBSCRIBE</button>
            </div>
            </div>
            <div className='footer-first-part-right-side'>
                <p className='text'>CONTACT US</p>
                <p className='text'>+44 221 133 5360</p>
                <p className='text'>customercare@mettamuse.com</p>
                <p className='text'>CURRENCY</p>
                <div className='usd-div'>
                    <img src="https://i.ibb.co/GxmBz9m/United-States-of-America-US.png" 
                         alt="United-States-of-America-US"
                    />
                    <p className='text'>.USD</p>
                </div>
                <p className='text'>Transactions will be completed in Euros and a currency reference is available on hover.</p>
            </div>
            </div>
            <hr/>
            <div className='footer-second-part'>
                <div className='alignCorrectly'>
                    <h1 className='text'>mettā muse</h1>
                    <p className='text'>About Us</p>
                    <p className='text'>Stories</p>
                    <p className='text'>Artisans</p>
                    <p className='text'>Boutiques</p>
                    <p className='text'>Contact Us</p>
                    <p className='text'>EU Compliances Docs</p>
                </div>
                <div className='alignCorrectly'>
                    <h1 className='text'>Quick Links</h1>
                    <p className='text'>Orders & Shipping</p>
                    <p className='text'>Join/Login as a Seller</p>
                    <p className='text'>Payment & Pricing</p>
                    <p className='text'>Return & Refunds</p>
                    <p className='text'>FAQs</p>
                    <p className='text'>Privacy Policy</p>
                    <p className='text'>Terms & Conditions</p>
                </div>
                <div className='alignCorrectly'>
                    <h1 className='text'>FOLLOW US</h1>
                    <div className='icons-div'>
                    <div >
                        <FaInstagram className='icon'/>
                    </div>
                    <div >
                        <FaLinkedin className='icon'/>
                    </div>
                    </div>
                    <div className='text'>
                        <h1>mettā muse ACCEPTS</h1>
                        <img src="https://i.ibb.co/HrGGVz9/Frame-136278.png" 
                        alt="Frame-136278"
                        className='last-image'/>
                    </div>
                </div>
            </div>
            </div>
            <div>
                <div className='sm-first'>
                    <p className='text'>BE THE FIRST TO KNOW</p>
                    <p className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.</p>
                    <div>
                        <input placeholder='Enter your e-mail..'
                            className='input'/>
                        <button type='button' 
                                className='subscribe-button'>SUBSCRIBE</button>
                    </div>
                    <hr className='hr-line'/>
                    <div className='customercarefulldiv'>
                        <h1 className='text'>CALL US</h1>
                        <div className='customercarediv'>
                            <p className='text'>+44 221 133 5360</p>
                            <p className='text customercare'>. customercare@mettamuse.com</p>
                        </div>
                    </div>
                    <hr className='hr-line'/>
                    <div className='us-s-device-div'>
                        <h1 className='text'>CURRENCY</h1>
                        <div className='us-s-device'>
                            <img src="https://i.ibb.co/GxmBz9m/United-States-of-America-US.png" 
                                 alt="United-States-of-America-US"
                            />
                            <p className='text'>. USD</p>
                        </div>
                    </div>
                    <hr className='hr-line'/>
                    <select className='select-ele-sm-device'>
                        <option>mettā muse</option>
                    </select>
                    <hr className='hr-line'/>
                    <select className='select-ele-sm-device'>
                        <option>Quick Links</option>
                    </select>
                    <hr className='hr-line'/>
                    <select className='select-ele-sm-device'>
                        <option>Follow Us</option>
                    </select>
                    <hr className='hr-line'/>
                    <p>mettā muse Accepts</p>
                    <div className='text last-image-sm-div'>
                        <h1>mettā muse ACCEPTS</h1>
                        <img src="https://i.ibb.co/HrGGVz9/Frame-136278.png" 
                        alt="Frame-136278"
                        className='last-image-sm'/>
                    </div>
                    <p className='text'>Copyright © 2023 mettamuse. All rights reserved.</p>
                </div>
                
            </div>
        </div>
    )
}
export default Footer