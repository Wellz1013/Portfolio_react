import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './home.css';

export default class about_me extends Component{
    render() {
        return(
            <body>
                <header>
                    <div>
                        <div id="pro-sect">
                            <table>
                                <tr>
                                    <td>
                                        <img id="pro-pic" src={require("./img/selfie_e.jpg")}/>
                                    </td>
                                    <td id="t-name">
                                       <div>Emmanuel Brown</div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </header>
            </body>
        )
    }
}

