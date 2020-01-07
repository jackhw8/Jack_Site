import React from 'react';
import '../../main.css';
import { SocialIcon } from 'react-social-icons';

const Main = () => {
  return (
    <>
      <header className="bg-light border-top border-bottom">
       <div className="text-center">
         <p></p>
         <img src="/pic/pic6.png" alt=""></img>
         <h1 style={{'fontWeight':'700'}}>Jack Hyeonwoo Kim</h1>
         
         <p style={{'fontSize': '25px', 'color': 'grey'}}>Full stack developer<br/>
         Heavy lifter &amp;
        <span style={{'textDecoration': 'none', 'color': '#0096cc'}}> Diamond 1</span> in LOL
         </p>
        
        </div>
      </header>


      {/*
      <a href="https://ucsd.edu/" target="_blank" style={{'textDecoration': 'none', 'color': '#0096cc'}} rel="noopener noreferrer">UCSD</a>
      */}

      <main className="p3">
        <div class="container" style={{'marginLeft': 'auto', 'marginRight': 'auto'}}>
          <div class="row" >
            <div className="col-sm-9">
            <h3 className="mb2">About me</h3>
            <p style={{'line-height':'1.75rem'}}>
                
                Hyeonwoo (Jack) Kim loves programming, Dodgers games, League of Legends, and lifting heavy things. 
                He does not love talking about himself in the 3rd person. 
                Jack is also a full stack developer, especially gifted when it comes to website development. 
                He received his Computer Science B.S. at the University of California, San Diego (UCSD) in December of 2019.
                
                <br/>
                Jack was a huge gamer ever since he was a child. Gaming cafes or “PC Bangs” are hugely popular in South Korea,
                but for financial reasons, he seldom had a chance to go.
                To make up for this, Jack’s father designed a simple shooting game (in C#). 
                Years later, this experience would be the inspiration that birthed his career as a Software Engineer.

                <br/>
                Immediately after servicing as a KATUSA (Korean Augmentation to the U.S. Army), Jack landed his first internship as an engineer for Ezian,
                a leading web agency in Korea that consults, develops, and manages a variety of commercial websites.
                Jack’s military experience and time at Ezian taught him how to communicate effectively,
                reach target goals within strict deadlines, and develop advanced web applications.
                As someone whose career has always revolved around creating innovative business solutions
                for big names in the industry (Samsung and Hyundai to name a few), Jack strongly values diversity and camaraderie in the workplace.
                He is currently seeking employment at an organization that mirrors these values. 
            </p>
            </div>
            <div className="col-sm-3">
              <h3 className="mb2">Contact</h3>
              <ol style={{'columns': '3', 'listStyle':'none'}}>
                <li><SocialIcon url="https://www.linkedin.com/in/jack-hyeonwoo-kim-4b669376/" target="_blank"/></li>
                <li><SocialIcon url="https://www.facebook.com/jack.hw8" target="_blank"/></li>
                <li><SocialIcon bgColor="#000000" url="https://github.com/jackhw8" target="_blank"/></li>    
              </ol>
            </div>
          </div>
        </div>
      </main>
      </>
  )
}

export default Main;