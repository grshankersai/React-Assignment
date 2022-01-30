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


function App() {
  
  return (
    <div className="App">
        
      
       
    
       <MyLibrary/> 
      
    
    </div>
  );
}

export default App;
