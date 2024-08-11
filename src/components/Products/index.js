import './index.css'
import { CiHeart } from "react-icons/ci";

const Products = props => {
    const {eachItem} = props
    const {image,title} = eachItem
    return(
        <li className='product-item'>
            <img src={image}
                 className="image-element"
                 alt='product-image'/>
            <h1 className='title-element'>{title}</h1>
            <div className='small-adjust'>
            <p className='title-element'>Sign in or Create an account to see pricing</p>
            </div>
        </li>
    )
}
export default Products