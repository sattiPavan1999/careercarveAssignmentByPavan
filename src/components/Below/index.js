import { render } from '@testing-library/react';
import './index.css'
import { FaLessThan } from "react-icons/fa6";
import { PiGreaterThan } from "react-icons/pi";

const Below = props => {
    const {onClickHide, hideOrShow} = props

    const byClickinghideFilter = () => {
        onClickHide()
    }

    const renderHide = () => {
        return(
            <button className='hide-filter hideForMeddium' onClick={byClickinghideFilter}>
                <FaLessThan />
                <p className='hide-heading'>HIDE FILTER</p>
            </button>
        )
    }

    const renderShow = () => {
        return(
            <button className='hide-filter hideForMeddium' onClick={byClickinghideFilter}>
                <PiGreaterThan />
                <p className='hide-heading'>SHOW FILTER</p>
            </button>
        )
    }



    return(
        <div className="below-div">
            <hr className='hr-line'/>
            <div className='text-div'>
                <p className='hideForMeddium'>3425 ITEMS</p>
                <p className='hideForsmall'>Home | shop</p>
                <div>
                
                    {hideOrShow ? renderHide() : renderShow()}
                
                </div>
                <select className='select-element'>
                    <option>RECOMMENDED</option>
                    <option>NEWEST FIRST</option>
                    <option>POPULAR</option>
                    <option>PRICE: HIGH TO LOW</option>
                    <option>PRICE: LOW TO HIGH</option>
                </select>
            </div>
            <hr className='hr-line'/>
        </div>
    )
}

export default Below