import React from 'react';
import logo from './logo.svg';
import './App.css';
import Icon from './components/atoms/Icon/icon'
import Heading1, {Heading2 , Heading3}  from './components/atoms/Heading/Heading';
import Card from './components/molecules/Card/Card';
import Footer from './components/molecules/footer/Footer';
import CustomStyles from './components/atoms/checkbox/Checkbox';
import Header from './components/organisms/Header';
import { makeStyles } from "@material-ui/core/styles";
import MyLibrary from './pages/MyLibrary';
import BookDetailView from './pages/BookDetailView/BookDetailView';
import Banner from './components/molecules/Banner/Banner';
import Entrepreneurship from './pages/Entrepreneurship/Entrepreneurship'
import Expore from './components/organisms/Explore/Explore'
import Explore from './components/organisms/Explore/Explore';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function App() {

  const {isLoading} = useAuth0();

  if(isLoading){
    return (<Box sx={{ width: '100%' }}>
    <LinearProgress />
  </Box>)
  }
  
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<MyLibrary />} />
          <Route path='/entrepreneurship' element={<Entrepreneurship />} />
          <Route path='/detailed' element={<BookDetailView />} />
        </Routes>

      </Router>
      
      
      
    
    </div>
  );
}

export default App;
