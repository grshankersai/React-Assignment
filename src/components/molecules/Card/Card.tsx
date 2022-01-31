import React from 'react';
import Heading1 , {Heading2,Heading3} from '../../atoms/Heading/Heading';
import Icon from '../../atoms/Icon/icon';
import Image from '../../atoms/Image/Images';
import Styles from '../Card/card.module.css';
import Button from '../../atoms/Button/Button';
import AddIcon from "@mui/icons-material/Add";
import { Grid } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Typography from '../../atoms/Typography/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

interface Props{
    picturenumber:string;
    Heading:string;
    subheading:string;
    minuteread:string;
    buttonText:string;
    
    
}


const Card = (props:Props)=>{

    return(
    <div id={Styles.maindiv} >
        <div id={Styles.imagediv}><img src={props.picturenumber} alt="image1" /></div>

    
            
           
            <Typography variant={'subtitle3'} content={props.Heading} styles={{margin:"10px"}} />
           
            <Typography variant={'body1'} content={props.subheading} styles={{margin:"10px"}}/>
      
        
        
        
        
        
        <div id={Styles.textcenterdiv}>

            <Grid container >
                <Grid item xs={1}> <AccessTimeIcon/></Grid>
                <Grid item xs={5} textAlign={'center'}><Typography variant={'caption3'} content={props.minuteread} styles={{marginTop:"3px"}}/></Grid>
            </Grid>
        

        

        </div>
        <br />
        
        <Grid container>
            <Grid item xs={12}>
            <Button
            size="large"
            variant="text"
            color="primary"
            
            fullWidth={true}
          >
            {props.buttonText}
          </Button>

            </Grid>
            <Grid xs={12} textAlign={"right"}>
            <MoreHorizIcon />
            </Grid>
        </Grid>

      

       

       

    </div>

    )
}
export default Card;