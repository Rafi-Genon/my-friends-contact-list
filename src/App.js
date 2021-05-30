import './App.css';
import ContactPage from './Components/ContactPage/ContactPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EditContact from './Components/EditContact/EditContact';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <ContactPage></ContactPage>
        </Route>
        <Route path='/edit/:id' >
          <EditContact></EditContact>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
