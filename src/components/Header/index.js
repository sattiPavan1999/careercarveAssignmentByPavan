import './index.css'

const Header = props => {
    const {clickHome, clickMentor} = props

    const clickHomeButton = () => {
        clickHome('home')
    }
    const clickMentorButton = () => {
        clickMentor('mentor')
    }
    return(
        <div className='headerButtons'>
            <div className='bothbuttons'>
                <button className='button'
                        onClick={clickHomeButton}>Go To Home</button>
                <button className='button'
                        onClick={clickMentorButton}>Select Mentor</button>
            </div>
        </div>
    )
}

export default Header