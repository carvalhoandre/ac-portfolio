import React, { Component } from "react";
import './styles.css'

export default class Footer extends Component {

    render() {
        return (
            <>
                <footer className="footer">
                    <div className="footer_bg">
                        <div className="footer_container">
                            <div>
                                <h1 className="footer_title">André Carvalho</h1>
                                <span className="footer_subtitle">Mobile and Frontend developer</span>
                            </div>
                        </div> 
                        
                        <p className="footer_copy">
                            &#169; André Carvalho. All right reserved
                        </p>
                    </div>
                </footer>
            </>
        )
    }
}