import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Crud from './Crud';
import Main from './components/main/Main';
import Project_Main from './components/project/Project_Main';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                    <Navbar />
                        <Switch>
                            <Route exact path='/' component={Main}/>
                            <Route path='/project' component={Project_Main}/>
                            <Route path='/crud' component={Crud}/>
                        </Switch>                    
            </BrowserRouter>
        );
    }
}

export default App;