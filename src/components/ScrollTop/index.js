import React, { Component } from 'react'
import './styles.css'

export default class ScrollTop extends Component {

    render() {
        return (
            <>
                <a href="#home" className="scrollup" id="scroll-up">
                    <i className="uil uil-arrow-up scrollup_icon" />
                </a>
            </>
        )
    }
}