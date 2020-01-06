import React from 'react';
import '../../main.css';
import { SocialIcon } from 'react-social-icons';

const Bio = () => {
  return (
    <>
      <header className="bg-light border-top border-bottom">
       <div className="text-center">
         <p></p>
         <img src="/pic/pic3.png"></img>
         <h1>Jack Hyeonwoo Kim</h1>
         
         <p style={{'fontSize': '25px', 'color': 'grey', 'fontFamily':'merriweather'}}>Full stack developer<br/>
         heavy lifter &amp;
         S3 <a href="https://na.op.gg/summoner/userName=jackhyeonwoo" target="_blank" style={{'textDecoration': 'none', 'color': '#0096cc'}}>Diamond </a>
         1 in LOL(S10 Plat…)
         </p>
        
        </div>
      </header>

      <br/>
      <br/>

      <main>
        <div class="container">
            <h5 style={{'fontFamily':'Lucida Sans'}}>More About me</h5>
            <p>Hyeonwoo (Jack) Kim loves programming, Dodgers games, League of Legends, and lifting heavy things. He does not love talking about himself in the 3rd person. 
           Jack is also a full stack developer, especially gifted when it comes to website development. 
           He received his Computer Science B.S. at the University of California, San Diego (UCSD) in December of 2019.
           Jack was a huge gamer ever since he was a child. Gaming cafes or “PC Bangs” are hugely popular in South Korea, but for financial reasons, he seldom had a chance to go.
           To make up for this, Jack’s father designed a simple shooting game (in C#). 
           Years later, this experience would be the inspiration that birthed his career as a Software Engineer.
           Immediately after servicing as a KATUSA (Korean Augmentation to the US Army), Jack landed his first internship as an engineer for Ezian, a leading web agency in Korea that consults, develops, and manages a variety of commercial websites.
           Jack’s military experience and time at Ezian taught him how to communicate effectively, reach target goals within strict deadlines, and develop advanced web applications.
           As someone whose career has always revolved around creating innovative business solutions for big names in the industry (Samsung and Hyundai to name a few), Jack strongly values diversity and camaraderie in the workplace.
           He is currently seeking employment at an organization that mirrors these values. 
            </p>
        </div>
      </main>
      </>
  )
}

export default Bio;