import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Crud from './Crud';
import Main from './components/main/Main';
import Bio from './components/main/Bio';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                    <Navbar />
                        <Switch>
                            <Route exact path='/' component={Main}/>
                            <Route path='/bio' component={Bio}/>
                            <Route path='/crud' component={Crud}/>
                        </Switch>                    
            </BrowserRouter>
        );
    }
}

export default App;