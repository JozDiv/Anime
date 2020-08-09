import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Admin from './Admin';
import Accueil from './Accueil';

const Menu = () => {
    return ( 
        <Router>
             <div className="fixed-top">
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <div className="navbar-brand">AnimeUltime</div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse col-12" id="collapsibleNavbar">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Acceuil</Link>
                    </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/admin2020">Administration</Link>
                    </li>
                    </ul>
                </div>
                </nav>
            </div>
            <Switch>
             <Route exact path="/">
                <Accueil />
             </Route> 
                <Route path="/admin2020">
                    <Admin />
            </Route>
            </Switch>
        </Router>
     );
}
 
export default Menu;