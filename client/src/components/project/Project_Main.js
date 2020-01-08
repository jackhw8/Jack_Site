import React from 'react';

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
            <div className="row clearfix border-bottom border-light-gray circle-line py3"  style={{'paddingTop':'30px'}}>
                {/* mcomics pic */}
                <div className="col sm-col-4 px2 div1">
                    <a href="https://www.mcomics.co.kr/" target="_blank" rel="noopener noreferrer">
                        <img src="/pic/mcomics.PNG" alt="mcomics" className="i2" style={{'width':'350px', 'height':'350px'}}></img>
                    </a>
                </div>
                {/* mcomics explanation */}
                <div className="col sm-col-8 px2 mb2 div2">
                    <a href="https://www.mcomics.co.kr/" className="a2" target="_blank" rel="noopener noreferrer">
                        <h2>Mcomics</h2>
                    </a>
                    <a href="https://www.mcomics.co.kr/" className="a2 mb2" target="_blank" rel="noopener noreferrer" style={{'fontSize':'0.75rem', 'display':'block', 'color': '#0096cc'}}>
                        https://www.mcomics.co.kr/
                    </a>
                    <p style={{'textAlign': 'left'}}>
                        Mcomics is a website of web comics and graphic novels. I mostly worked on the frontend for this.
                        I also increased ad banner so that users can giveaways and popularity polls
                    </p>
                </div>
            </div>

            {/* Python Auto-receipt */}
            <div>


            </div>

            {/* CRUD */}
            <div>


            </div>

            {/* CSE 110 */}
            <div>


            </div>


            {/* CSE 112 */}
            <div>


            </div>
        </main>
        </>
    );
}

export default Project_Main;