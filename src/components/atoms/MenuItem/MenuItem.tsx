import Typography from '../Typography/Typography';
import Styles from './MenuItem.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface Props{
    content:string;
    emoji : React.FC;
}

const MenuItem = (props:Props)=>{

    return(
        <div className={Styles.root}>
		            <props.emoji />
                    <div className={Styles.text}><Typography variant={"body2"} content={props.content} styles={{marginTop:"0px",marginBottom:'15px',marginLeft:"5px"}}/></div>
                    </div>
    )
}

export default MenuItem