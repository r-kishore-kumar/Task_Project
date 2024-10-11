import logo from './logo.svg';
import './App.css';
import UserProfile from './UserProfile';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter, useNavigate } from 'react-router-dom';
import { store, login, logout } from './store';
import Xml from './XmlHttp';
import Home from './Home';
import Chart from './Chart';
import TableComponent from './Table';
import { createContext, useContext, useState } from 'react';
import ProtectedRoute from './ProtectedRoute';
import { AuthProvider } from './AuthContext';

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/profile' element={<UserProfile/>}></Route>
          <Route path='/xml' element={<Xml/>}></Route>
          <Route path='/chart' element={<Chart></Chart>}/>
          <Route path='/table' element={<TableComponent/>}/>
          <Route path='/authenticationfilter' element={
            <AuthProvider/>}/>
        </Routes>
      </Router>
      </AuthContext.Provider>
  );
}

export default App;
