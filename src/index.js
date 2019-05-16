import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Particles from 'react-particles-js'
import './App.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';


const particlesOptions = {
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}

class Document extends React.Component {
    render() {
        return(
            <div>
                <HomePage />
                <About />
                <Projects />
                <Contact />

            </div>
        )
    }
}

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <div className="Header">
                    <li className="TopButtons"> <a href="#con"> Contact </a> </li>
                    <li className="TopButtons"> <a href="#pro"> Projects </a> </li>
                    <li className="TopButtons"> <a href="#ab"> About </a></li>
                    <h1 className="Name"> James<b>Bates</b> </h1>
                </div>
                <div>
                    <Particles className='particles' params={particlesOptions} />
                </div>
                <div className="Empty">

                </div>
            </div>
        )
    }
}

class About extends React.Component {
    render() {
        return (
            <div id="ab" className="About">
                <div className="Bio">
                    <img src="./images/ProfilePic.jpg" alt="Me" />
                    <h1> <u>About</u> </h1>
                    <p> Hi, I'm James! I'm studying Mechanical Engineering at the University of Waterloo with hopes of specializing in Mechatronics. Throughout my 6 co-op terms I would like to experiment working in various industries. I have experience in control system / backend design most fluently in <b>C++, Python </b>and <b>MatLab</b>. Additionally, I enjoy the artistic side of front-end development in which I am most familiar using <b>ReactJS</b>. Similarly, I have experience in Mechanical Design using <b>Solidworks</b>, <b>AutoCAD</b>, <b>GD&T</b> and free-hand sketching. </p>
                    <p> On a more personal side, I enjoy sports and have represented Canada at the Latin American Baseball Classic in the Dominican Republic, played for Team BC indoor and beach volleyball where I placed 4th at North America's largest beach volleyball tournament. Additionally, I love to travel, try new foods and get out of my comfort zone! Some of my favourite memories include eating live octopus in China, Kite Surfing alongside Seals in Squamish and hiking the beautiful Bryce Canyon in Utah. </p>
                </div>
            </div>
        )
    }
}

class Projects extends React.Component {

    goToParkN()
    {
        window.open("https://devpost.com/software/parkn");
    }

    goToEcoSphere()
    {
        window.open("https://devpost.com/software/ecosphere");
    }

    render() {
        return(
            <div id="pro" className="Proj">
                <div className="Projbubble">
                    <h1> <u> Projects </u> </h1>
                    <hr/>
                    <div className="box">
                        <img src="./images/ecoSphere.png" alt="EcoSphere" />
                        <h1> <b>EcoSphere</b> </h1>
                        <p> EcoSphere is an educational <b>android application</b> developed to encourage recycling! It was developed in <b>7 hours</b> at <b>ECOding Hacks</b> and received an <b>honorable mention</b>. EcoSphere was designed so that users can track their recycling habits while being encouraged by an aesthetic, game-like interface. Furthermore, when first opening the app, the background is gross, dirty and clearly polluted, but as you recycle, the environment cleanses and will eventually become a beautiful ecosystem.  </p>
                        <p> This application was developed using <b>Corona SDK</b> (written in <b>Lua</b>); however, the graphics were done using <b>Adobe Photoshop</b>. </p>
                        <button className="button" onClick={this.goToEcoSphere}> See DevPost </button>

                    </div>
                    <hr/>
                    <div className="box">
                        <img id="pk" src="./images/ParkN.jpg" alt="ParkN" />
                        <h1> <b> ParkN </b></h1>
                        <p> ParkN is a <b>web application</b> designed to make parking quicker and easier! Since everyone knows parking can be frustrating, ParkN allows users to enter a location and search for parking spot to rent. It is even possible to book ahead so you can be guaranteed a spot upon arrival. Similarly, users can rent their own parking spots when, for example, they are away from home or going on a trip.  </p>
                        <p> This application was created at <b> StarterHacks</b>, my first Hackathon. Furthermore, I worked on the front-end of this application that was built using <b> ReactJS </b> and features <b> React Routers </b> along with implementation of the <b> Google Maps API </b> </p>
                        <button className="button" onClick={this.goToParkN}> See DevPost </button>
                    </div>
                    <hr/>
                    <div className="box">
                        <iframe className="vid" src="https://youtube.com/embed/WE163DhiTGk" frameborder="0" allowfullscreen> </iframe>
                        <h1> <b> Glider </b></h1>
                        <p> The Glider project involved the design, building and testing of a glider that could carry an egg as far as possible without it breaking. This project was under <b>sponsorship from Boeing</b> as they agreed to give us an insider engineering workshop/tour inside their Seattle. Furthermore, I was responsible for designing and constructing the <b>dihedral</b> of the aircraft, building a <b>charged Nichrome Cutting Wire </b> to shape the Composite foam and correcting the position of the center of mass relative to the lift force in order to create smooth flight.   </p>
                    </div>
                    <hr/>

                </div>

            </div>
        )
    }
}

class Contact extends React.Component {

    goToGithub()
    {
        window.open("https://github.com/ja-bates");
    }

    goToLinkedin()
    {
        window.open("https://www.linkedin.com/in/j4bates/");
    }

    render() {
        return(
            <div id="con" className="contact">
                <div className="contactbubble">
                    <h1> <u> Contact </u></h1>
                    <hr/>
                    <p> Hope you enjoyed my site! </p>
                    <p2> Connect with me on LinkedIn, check out my work on Github, or just send me an email! </p2>
                    <br/>
                    <p3> <a>jabates@uwaterloo.ca</a> </p3>
                    <div>
                        <button className="conbut" onClick={this.goToGithub}><FaGithub /> GitHub </button>
                        <button className="conbut" onClick={this.goToLinkedin}><FaLinkedin /> LinkedIn </button>
                    </div>
                </div>

            </div>
        )
    }
}

ReactDOM.render(<Document />, document.getElementById('root'));





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
