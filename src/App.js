import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import  HomePage  from './components/HomePage/Homepage';
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
import { AuthProvider } from './components/Context/AuthContext';
import NewUser from './components/Register/NewUser';
import Login from './components/Register/Login';
import SignUpwithGoogle from './components/Register/SignUpwithGoogle';




function App() {
  return (
    <Router>
      <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/dashboard" element={<ProfileManagerDashboard />} />
          <Route path="/dashboard/:generatedId" element={<ProfileManagerDashboard />} />
          <Route path="/search" element={<DeceasedList />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/media" element={<Media />} />
          <Route path="/sadaqah" element={<Sadaqah />} />
          <Route path="/secondarymanager" element={<SecondaryManager />} />
          <Route path="/updateprofile" element={<UpdateProfile />} />
          <Route path="/newuser" element={<NewUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signupwithgoogle" element={<SignUpwithGoogle />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
      
        </Routes>
      </div>
      </AuthProvider>
    </Router>
  );
}


export default App;
