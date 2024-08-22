import './index.css'
import Student from '../Student'
import { Component } from 'react'

import Header from '../Header'

class Home extends Component{
    state = {
        studentButton: false,
        mentorButton: false
    }

    clickStudent = () => {
        this.setState(prevState => ({
            studentButton: true,
            mentorButton: false
        }))
    }

    clickMentor = () => {
        this.setState(prevState => ({
            studentButton: false,
            mentorButton: true
        }))
    }

    renderHome = () => {
        const {studentButton, mentorButton} = this.state
        const bothStudentMentor = studentButton || mentorButton
        
            if(!bothStudentMentor){
                return(
                    <div className="homeDiv">
                        <h3>SELECT</h3>
                        <div className="buttonDiv">
                            <button onClick={this.clickStudent}>STUDENT</button>
                            <button onClick={this.clickMentor}>MENTOR</button>
                        </div>
                    </div>
                )
            }
            else if(studentButton){
                return(
                    <div className="homeDiv">
                        <Student/>
                    </div>
                )
                
            }   

    }

    clickHome = name => {
        const {studentButton, mentorButton} = this.state
        this.setState({
            studentButton: false,
            mentorButton: false        
        })
    }

    clickMentor = name => {
        this.setState(prevState => ({
            studentButton: true,
            mentorButton: false
        }))
    }

    render(){
        const {studentButton, mentorButton} = this.state
        return(
            <>
            <Header clickHome={this.clickHome}
                    clickMentor={this.clickMentor}/>
            {this.renderHome()}
            </>  
        )
    }

}

export default Home