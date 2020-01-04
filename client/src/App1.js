import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Crud from './Crud';
import Main from './components/main/Main';


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <div className="container">
                        <Switch>
                            <Route exact path='/' component={Main}/>
                            <Route path='/crud' component={Crud}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;