import React, { Component } from 'react'
import './navbar.css'

export default class Navbar extends Component {
    constructor(){
        super()
        this.state={
            toggle: false
        }
    }

    menuToggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }
    render() {
        console.log(this.state.toggle)
        return (
            <div>
                <nav className='navbar'>
                    <h1 className='logo'>Start Bootstrap</h1>
                    <ul className='menu'>
                        <li>SERVICES</li>
                        <li>PORTFOLIO</li>
                        <li>ABOUT</li>
                        <li>TEAM</li>
                        <li>CONTACT</li>
                    </ul>
                    <h1 className='hamburger' onClick={this.menuToggle}>MENU &#9776;</h1>
                </nav>
                <ul className={this.state.toggle ?
                'menu2 toggle'
                    :
                'menu2'}>
                        <li>SERVICES</li>
                        <li>PORTFOLIO</li>
                        <li>ABOUT</li>
                        <li>TEAM</li>
                        <li>CONTACT</li>
                </ul>
            </div>
        )
    }
}
