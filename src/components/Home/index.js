import './index.css'
import { Component } from 'react'
import Header from '../Header'
import HeadingPage from '../HeadingPage'
import HeadingAndDescription from '../HeadingAndDescription'
import Below from '../Below'
import Products from '../Products'
import Footer from '../Footer'

class Home extends Component {
    state = {
        newData: [],
        hideOrShow: true
    }
    componentDidMount(){
        this.getData()
    }
    getData = async () => {
        const url = "https://fakestoreapi.com/products"
        const response = await fetch(url)
        if(response.ok){
            const data = await response.json()
            const updatedData = data.map(eachItem => ({
                category: eachItem.category,
                description: eachItem.description,
                id: eachItem.id,
                image: eachItem.image,
                price: eachItem.price,
                rating: eachItem.rating,
                title: eachItem.title
            }))
            this.setState({
                newData: updatedData
            })
        }
        
    }

    renderCustomizableLists = () => {
        return(
            <div className='CustomizableListsForSmallDevices'>
                        <div className='checkbox-div'>
                            <input type="checkbox"/>
                            <p>CUSTOMIZBLE</p>
                        </div>
                        <hr/>
                        <div>
                            <select className='selectOption'>
                                <option>IDEAL FOR</option>
                            </select>
                            <p className='text-ele'>ALL</p>
                        </div>
                        <hr/>
                        <div>
                            <select className='selectOption'>
                                <option>OCCATION</option>
                            </select>
                            <p className='text-ele'>ALL</p>
                        </div>
                        <hr/>
                        <div>
                            <select className='selectOption'>
                                <option>WORK</option>
                            </select>
                            <p className='text-ele'>ALL</p>
                        </div>
                        <hr/>
                        <div>
                            <select className='selectOption'>
                                <option>FABRIC</option>
                            </select>
                            <p className='text-ele'>ALL</p>
                        </div>
                        <hr/>
                        <div>
                            <select className='selectOption'>
                                <option>SEGMENT</option>
                            </select>
                            <p className='text-ele'>ALL</p>
                        </div>
                        <hr/>
                        <div>
                            <select className='selectOption'>
                                <option>SUITABLE FOR</option>
                            </select>
                            <p className='text-ele'>ALL</p>
                        </div>
                        <hr/>
                        <div>
                            <select className='selectOption'>
                                <option>RAW MATERIALS</option>
                            </select>
                            <p className='text-ele'>ALL</p>
                        </div>
                        <hr/>
                        <div>
                            <select className='selectOption'>
                                <option>PATTERN</option>
                            </select>
                            <p className='text-ele'>ALL</p>
                        </div>
                        <hr/>
            </div>
        )
    }

    onClickHide = () => {
        this.setState(prevState => ({
            hideOrShow: !prevState.hideOrShow
        }))
    }

    render(){
        const {newData, hideOrShow} = this.state

        return(
            <div className='fullbg'>
                <Header/>
                <HeadingPage/>
                <hr/>
                <HeadingAndDescription/>
                <Below onClickHide={this.onClickHide}
                       hideOrShow={hideOrShow}/>
                <div className='all-products-div'>
                    {hideOrShow && this.renderCustomizableLists()}
                    <div>
                        <ul className='unordered-list'>
                            {newData.map(eachItem => (
                                <Products eachItem={eachItem}
                                        key={eachItem.id}/>
                            ))}
                        </ul>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }

}

export default Home