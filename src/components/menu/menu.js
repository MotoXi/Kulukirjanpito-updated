import { Link } from 'react-router-dom';
import styles from './menu.module.scss'
import SettingsIcon from '@material-ui/icons/Settings';
import ListAltIcon from '@material-ui/icons/ListAlt';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';


function Menu() {
    return (
        <div className={styles.menu}>
            <div><Link to="/"><ListAltIcon fontSize="large" /></Link></div>
            <div><Link to="/stats"><TrendingUpIcon  fontSize="large" /></Link></div>
            <div><Link to="/settings"><SettingsIcon fontSize="large" /></Link></div>
        </div>
    );  
        
}

export default Menu;
