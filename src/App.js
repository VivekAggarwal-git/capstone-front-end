
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import Privateroute from './components/PrivateRoute';
import SignUpPage from './components/SignUpPage';
import About from './components/About';
import Personal from './components/Personal';
import HelpCenter from './components/HelpCenter';
import ManagePayee from './components/ManagePayee';

function App() {

  const user = useSelector(state => state.user.value)
  var loginStatusValidation = user.loginStatus


  console.log(loginStatusValidation);



  return (
    <div>

      <Routes>


        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/personal' element={<Personal />} />
        <Route path='/helpcenter' element={<HelpCenter />} />
        <Route element={<Privateroute />} >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/managepayee" element={<ManagePayee />} />
        </Route>

      </Routes>



    </div>
  );
}

export default App;
