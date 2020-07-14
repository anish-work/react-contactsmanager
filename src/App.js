import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import Header from './components/layout/Header';
import About from './components/pages/About';
import Contacts from './components/contacts/Contacts';
import { Provider } from './context';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <div className="container col-8">
              <Switch>
                <Route exact path="/" component= {Contacts} />
                <Route exact path="/about" component= {About} />
                <Route exact path="/addcontact" component= {AddContact} />
                <Route exact path ="/contact/edit/:id" component={EditContact}/>                
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;