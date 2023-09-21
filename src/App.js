import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import { Home } from './components/HomePage/Homepage';
import { Profile } from './components/Profile/Profile';
import ErrorPage from './components/ErrorPage/ErrorPage';
import RegistrationForm from './components/Register/Register';
import ProfileManagerDashboard from './components/Dashboard/Dashboard';
import Comments from './components/Dashboard/Details/Comments';
import Sadaqah from './components/Dashboard/Details/Sadaqah';
import SecondaryManager from './components/Dashboard/Details/SecondaryManager';
import UpdateProfile from './components/Dashboard/Details/UpdateProfile';
import Media from './components/Dashboard/Details/Media';
import DeceasedList from './components/Search/Search';
import { useHistory } from 'react-router-dom';



function App() {
  return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/profile"> <Profile/> </Route> 
            <Route path="/register"> <RegistrationForm/> </Route> 
            <Route path="/dashboard"> <ProfileManagerDashboard/> </Route> 
            <Route path="/search"> <DeceasedList/> </Route> 
            <Route path="/comments"> <Comments/> </Route> 
            <Route path="/media"> <Media/> </Route> 
            <Route path="/sadaqah"> <Sadaqah/> </Route> 
            <Route path="/secondarymanager"> <SecondaryManager/> </Route> 
            <Route path="/updateprofile"> <UpdateProfile/> </Route> 
            <Route path="/"> <Home /> </Route> 
            <Route path="*"> <ErrorPage /> </Route> 
            
          </Switch>
        </div>
      </Router>
  );
}

export default App;
