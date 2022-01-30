import React from 'react';
import Heading1 , {Heading2,Heading3} from '../../atoms/Heading/Heading';
import Icon from '../../atoms/Icon/icon';
import Image from '../../atoms/Image/Images';
import Styles from '../Card/card.module.css';

interface Props{
    picturenumber:string;
    Heading:string;
    subheading:string;
    minuteread:string;
}


const Card = (props:Props)=>{

    return(
    <div id={Styles.maindiv} >
        <div id={Styles.imagediv}><img src={props.picturenumber} alt="image1" /></div>
        
        <h1 id={Styles.head1} >{props.Heading}</h1>
        <h1 id={Styles.head2}>{props.subheading}</h1>

        <div id={Styles.textcenterdiv}>
        <span><svg id={Styles.mystyle} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM11 10H15V12H9V5H11V10Z" fill="#042330"/>
</svg></span>

        <h1 id={Styles.head3}>{props.minuteread}</h1> <br/>

        </div>
        
        <br/>
        <br/>
        <br/>

        <span id={Styles.mystyle3}><Icon dValue={'M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM16 0C14.9 0 14 0.9 14 2C14 3.1 14.9 4 16 4C17.1 4 18 3.1 18 2C18 0.9 17.1 0 16 0ZM9 0C7.9 0 7 0.9 7 2C7 3.1 7.9 4 9 4C10.1 4 11 3.1 11 2C11 0.9 10.1 0 9 0Z'}></Icon></span>

       

    </div>

    )
}
export default Card;