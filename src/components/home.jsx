import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './home.css';

export default class home extends Component{
    render() {
        return(
            <body>
                <header>
                    <div>
                        <div id="pro-sect">
                            <table>
                                <tr>
                                    <td>
                                        <img id="pro-pic" src={require("./img/best_selfie.jpg")} alt=""/>
                                    </td>
                                    <td id="t-name">
                                       <div><Link to="./components/about_me.jsx">Emmanuel Brown</Link></div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div id="connect-sect" className="h-container">
                            <ul>
                                <li>
                                    <ul>
                                        <li>
                                            <div className="fa fa-snapchat-ghost" style={{fontSize:'24px'}}></div>
                                        </li>
                                        <li>
                                            <p>sall.star01</p>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li>
                                            <div className="fa fa-instagram" style={{fontSize: '24px'}}></div>
                                        </li>
                                        <li>
                                            <p>Wellz1013</p>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li>
                                            <div style={{fontSize:'24px'}}>#</div>
                                        </li>
                                        <li>
                                            <p>803-579-8542</p>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>

                <section>
                    <div id="side-bar">
                        <div id="menu">
                            <ul>
                                <li className="s-group"><Link to="#"><span id="templates" className="s-header">Templates</span></Link>
                                    <ul>
                                        <li><Link to="#">Main</Link></li>
                                        <li><Link to="#">Blog</Link></li>
                                        <li><Link to="#">Infographic</Link></li>
                                        <li><Link to="#">Valentines</Link></li>
                                    </ul>
                                </li>
                                <li className="s-group"><Link to="#"><span id="animations" className="s-header">Dynamics</span></Link>
                                    <ul>
                                        <li><Link to="#">Animations</Link></li>
                                        <li><Link to="#">Widgets</Link></li>
                                        <li><Link to="#">backgrounds</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                    <div id="content">
                        <table>
                            <tr>
                                <td>
                                    <div className="for-color"><Link to="">{/*Create a separate background image for each block*/}{/*trying to modify*/}
                                        <div className="block" id="box-1">
                                            <div className="box-text">Mixzz</div>
                                        </div></Link>
                                    </div>
                                </td>
                                <td>
                                    <div className="for-color" >{/*Create a separate background image for each block*/}
                                        <div className="block" id="rainbow box-2">
                                            <div className="box-text">N/A</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="for-color" >{/*Create a separate background image for each block*/}
                                        <div className="block" id="rainbow box-3">
                                            <div className="box-text">N/A</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="for-color" >{/*Create a separate background image for each block*/}
                                        <div className="block" id="rainbow box-4">
                                            <div className="box-text">N/A</div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="for-color">{/*Create a separate background image for each block*/}
                                        <div className="block" id="rainbow box-5">
                                            <div className="box-text">N/A</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="for-color">{/*Create a separate background image for each block*/}
                                        <div className="block" id="rainbow box-6">
                                            <div className="box-text">N/A</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="for-color">{/*Create a separate background image for each block*/}
                                        <div className="block" id="rainbow box-7">
                                            <div className="box-text">N/A</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="for-color">{/*Create a separate background image for each block*/}
                                        <div className="block" id="rainbow box-8">
                                            <div className="box-text">N/A</div>
                                        </div>
                                    </div>
                                </td>
                            </tr>    
                            <tr>
                                <td>
                                    <div className="for-color">{/*Create a separate background image for each block*/}
                                        <div className="block" id="rainbow box-9">
                                            <div className="box-text">N/A</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="for-color">{/*Create a separate background image for each block*/}
                                        <div className="block" id="rainbow box-10">
                                            <div className="box-text">N/A</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="for-color">{/*Create a separate background image for each block*/}
                                        <div className="block" id="rainbow box-11">
                                            <div className="box-text">N/A</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="for-color">{/*Create a separate background image for each block*/}
                                        <div className="block" id="rainbow box-12">
                                            <div className="box-text">N/A</div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
            </body>
        )
    }
}

