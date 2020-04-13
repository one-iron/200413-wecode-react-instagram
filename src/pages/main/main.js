import React, { Component } from 'react';
import Nav from "../../components/nav/nav.js";
import Feeds from "../../components/feeds/feeds.js";
import MainRight from "../../components/mainRight/mainRight.js";
import './main.css';


class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Nav />
                <main>
                    <Feeds />
                    <MainRight />
                </main>
            </div>
        );
    }
}


export default Main;