import React from 'react';
import "./index.css";
import "./Home.css";


export class Home extends React.Component {
    /*
    componentDidMount() {
        this.canvas.setOnReady(this.props.onReady);
    }

    componentWillReceiveProps(nextProps) {
        this.canvas.pushProps(nextProps);
    }
    
    shouldComponentUpdate() { 
        return false;
    }
    
    componentWillUnmount() {
        this.canvas.remove();
    }
    */

    render() {
        return (
            <div className="homebody">
                <div className="pic">
                    <img src={require("./img/emgrottoprofile.png")} alt="avatar" className="profile-pic" />
                </div>
                <div className="about">
                    <div className="heading">First of all... Welcome!</div>
                    <div className="about_par">
                        <div className="social_media">
                            <a href='https://github.com/emgrotto' target="_blank">
                                <img src={require('./img/github.png')} ></img>
                            </a>

                            <a href='https://www.linkedin.com/in/emma-grotto/' target="_blank">
                                <img src={require('./img/linkedIn.png')}></img>
                            </a>

                            <a href='https://www.facebook.com/profile.php?id=100008407994190' target="_blank">
                                <img src={require('./img/facebook.png')}></img>
                            </a>
                        </div>
                        <div>
                            I'm Emma Grotto. I recenlty graduated from Mount Holyoke college with a double major in Computer Science and Physics. 
                            I am passionate about web programming, data science, modeling physical systems, and astronomy. 
                            This is my personal website where you can find my resume, social media links, and random stuff I think is cool. 
                            Thanks for visiting! :)
                        </div>
                    </div>

                </div>

                <div className="passtimes-wrapper">
                <div className="pastimes">
                    <div className="pt1">
                        Interests /
                        <br></br>
                        Things I enjoy /
                        <br></br>
                        Entertainment
                    </div>
                    <div className="pt2">
                        <p className="pt_type"><b>Podcasts</b></p>
                        <p>Joe Rogan Experience</p>
                        <p>MIT Artificial Intelligence</p>
                        <p>Hello Internet</p>
                        <p>Cortex</p>
                    </div>

                    <div className="pt3">
                        <p className="pt_type"><b>Books</b></p>
                        <p>Ender's Game</p>
                        <p>The Expanse</p>
                        <p>Experience on Demand</p>
                        <p>The Elegant Universe</p>
                    </div>

                    <div className="pt4">
                        <p className="pt_type"><b>YouTube Channels</b></p>
                        <p>Primer</p>
                        <p>Kurzgesagt – In a Nutshell</p>
                        <p>PolyMatter</p>
                        <p>Philip DeFranco</p>
                    </div>
                </div>
                </div>

            </div>
        );
    }
}
