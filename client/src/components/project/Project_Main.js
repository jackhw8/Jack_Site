import React from 'react';
import '../../comp.css';

const Project_Main = () => {
    return (
        <>
        <header className="bg-light border-top border-bottom" style={{'marginBottom': '20px'}}>
            <div className="text-center">
                <p></p>
                    <h1 style={{'fontWeight':'700'}}>Projects</h1>
                    <p style={{'fontSize': '25px', 'color': 'grey', 'fontFamily': 'open sans,sans-serif'}}>Check out my 
                    <span style={{'textDecoration': 'none', 'color': '#0096cc'}}> projects! </span>
                    <br/>
                </p>
            </div>
        </header>


        <main className="container" style={{'maxWidth': '40em'}}>
            {/* Ezian or Mcomics */}
            <div className="row mb2 border-bottom border-light-gray pad3">
                {/* mcomics pic */}
                <div className="col sm-col-4 px2 div1">
                    <a href="https://www.mcomics.co.kr/" target="_blank" rel="noopener noreferrer">
                        <img src="/pic/project/mcomics.PNG" alt="mcomics" className="i2" style={{'width':'350px', 'height':'350px'}}></img>
                    </a>
                </div>
                {/* mcomics explanation */}
                <div className="col sm-col-8 px2 mb2 div2">
                    <a href="https://www.mcomics.co.kr/" target="_blank" rel="noopener noreferrer" className="atag2">
                        <h3 style={{'marginBottom':'0'}}>Mcomics</h3>
                    </a>
                    <a href="https://www.mcomics.co.kr/" target="_blank" rel="noopener noreferrer" className="atag2 atag3">
                        https://www.mcomics.co.kr/
                    </a>
                    <p style={{'textAlign': 'left'}}>
                        Mcomics is a website of web comics and graphic novels.
                        Designed and developed graphic image presentation, front-end user authentication, 
                        and various UI elements for the beta-launch of a web comics/graphic novels hosting website (mcomics.co.kr) in an iterative-driven team environment.
                    </p>
                </div>
            </div>

            {/* Python Auto-receipt */}
            <div className="row mb2 border-bottom border-light-gray pad3">
                {/* Do1 pic */}
                <div className="col sm-col-4 px2 div1">
                    <a href="https://github.com/jackhw8/Donation-Receipt-Auto-Transaction" target="_blank" rel="noopener noreferrer">
                        <img src="/pic/project/do1.png" alt="do1" className="i2" style={{'width':'350px', 'height':'350px'}}></img>
                    </a>
                </div>
                {/* Do1 explanation */}
                <div className="col sm-col-8 px2 mb2 div2">
                    <a href="https://github.com/jackhw8/Donation-Receipt-Auto-Transaction" target="_blank" rel="noopener noreferrer" className="atag2">
                        <h3 style={{'marginBottom':'0'}}>Donation Receipt : Auto Transaction</h3>
                    </a>
                    <a href="https://github.com/jackhw8/Donation-Receipt-Auto-Transaction/" target="_blank" rel="noopener noreferrer" className="atag2 atag3">
                        https://github.com/jackhw8/Donation-Receipt-Auto-Transaction
                    </a>
                    <p style={{'textAlign': 'left'}}>
                        Developed Python scripts to automate the process of reading input data for more than 1,200 people and outputting individual receipts.
                    </p>
                </div>
            </div>

            {/* In-Class Live Chat */}
            <div className="row mb2 border-bottom border-light-gray pad3">
                {/* Do1 pic */}
                <div className="col sm-col-4 px2 div1">
                    <a href="https://github.com/jackhw8/In-Class-Live-Chat" target="_blank" rel="noopener noreferrer">
                        <img src="/pic/project/inclass1.PNG" alt="do1" className="i2" style={{'width':'350px', 'height':'350px'}}></img>
                    </a>
                </div>
                {/* Do1 explanation */}
                <div className="col sm-col-8 px2 mb2 div2">
                    <a href="https://github.com/jackhw8/In-Class-Live-Chat" target="_blank" rel="noopener noreferrer" className="atag2">
                        <h3 style={{'marginBottom':'0'}}>In-Class Live Chat</h3>
                    </a>
                    <a href="https://github.com/jackhw8/In-Class-Live-Chat" target="_blank" rel="noopener noreferrer" className="atag2 atag3">
                        https://github.com/jackhw8/In-Class-Live-Chat
                    </a>
                    <p style={{'textAlign': 'left'}}>
                        Using Material-UI to develop a web application that allows students to post and vote on questions in real time
                    </p>
                </div>
            </div>



            {/* Web Components */}
            <div className="row mb2 border-bottom border-light-gray pad3">
                {/* Web-Comp pic */}
                <div className="col sm-col-4 px2 div1">
                    <a href="https://github.com/jackhw8/Web-Components" target="_blank" rel="noopener noreferrer">
                        <img src="/pic/project/webcomp1.PNG" alt="do1" className="i2" style={{'width':'350px', 'height':'350px'}}></img>
                    </a>
                </div>
                {/* Web-Comp explanation */}
                <div className="col sm-col-8 px2 mb2 div2">
                    <a href="https://github.com/jackhw8/Web-Components" target="_blank" rel="noopener noreferrer" className="atag2">
                        <h3 style={{'marginBottom':'0'}}>Web Components</h3>
                    </a>
                    <a href="https://github.com/jackhw8/Web-Components" target="_blank" rel="noopener noreferrer" className="atag2 atag3">
                        https://github.com/jackhw8/Web-Components
                    </a>
                    <p style={{'textAlign': 'left'}}>
                        Collection of standard Web Components that can be integrated into any web project.
                    </p>
                </div>
            </div>


            {/* CRUD */}
            <div className="row mb2 border-bottom border-light-gray pad3">
                {/* Web-Comp pic */}
                <div className="col sm-col-4 px2 div1">
                    <a href="/crud" rel="noopener noreferrer">
                        <img src="/pic/project/crud1.PNG" alt="do1" className="i2" style={{'width':'350px', 'height':'350px'}}></img>
                    </a>
                </div>
                {/* Web-Comp explanation */}
                <div className="col sm-col-8 px2 mb2 div2">
                    <a href="/crud" rel="noopener noreferrer" className="atag2">
                        <h3 style={{'marginBottom':'0'}}>CRUD</h3>
                    </a>
                    <a href="/crud" rel="noopener noreferrer" className="atag2 atag3">
                        Create, Read, Update, and Delete
                    </a>
                    <p style={{'textAlign': 'left'}}>
                        4 basic functions implementation corresponding to HTTP methods POST, GET, PUT, and DELETE, respectively
                    </p>
                </div>
            </div>

        </main>
        </>
    );
}

export default Project_Main;