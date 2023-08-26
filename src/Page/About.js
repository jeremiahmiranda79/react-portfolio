import React from "react";
import logo from '../assets/img/logo.png'
import AppCarousel from "../components/Carousel/Carousel";

const About = () => {
    return (
        <>  
            <div className="d-flex align-items-center" resizeMode={'cover'}>
              <img src={logo} class="d-block w-25" alt="..."/>
              <p className="font-style">
                My name is Jeremiah. I am a full stack developer with practice in frameworks, data, api's', cloud hosting, web applications, game development, progressive web apps, and mobile applications. Pround husband and father of two amazing boy's. I have three cat's who love to program with me by stepping on my key-board, and two dog's.
              </p>
            </div>

            <AppCarousel/>

            <p></p>
    
            <p>
              I wrote my first bit of code back in the 1980's as a child with a TI-99/4a using extended basic. I would read sections out of my fathers magazines(Compute Magazine), and try and understand how goto lines created logical loops.
            </p>

            <p>
              But as a young adult, I put aside my love for code to persue a well established career as a fine dining Executive Chef. I have restructured over 20 resturaunts to logicaly lower food costs, reduce labor costs, and output faster and more quality production.
            </p>

            <p>
              Fast forward 25 years, I decided to go back to my original passion! So I obtained my bachelors degree in Computer Information Systems, and completed a college level bootcamp for full stack web devoplment.
            </p>

            <p>
              My mission is to create what ever application you desire to work as intended with the best quality. I work hard to stay in direct contact with my clients to make sure acceptance criteria is met and projects can be delivered in a timely fassion, and, of course, working as expected.
            </p>

            <p>
              I look forward to speaking with you soon, and thank you for checking out my digital portfolio!
            </p>
        </>
    )
}

export default About