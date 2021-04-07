import { Link } from 'react-router-dom';
import styles from './menu.module.scss'
import SettingsIcon from '@material-ui/icons/Settings';
import ListAltIcon from '@material-ui/icons/ListAlt';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

/*Menu-komponentilla määritettään sovelluksen alaosa, sekä alaosan napit ja niiden paikka 
(alkuruutu, statistiikka ja asetukset -napit), sekä nappien kuvakkeet (ikonit). Menu-komponentissa määritellään myös nappien linkitykset, 
josta voidaan määrittää mitä mikäkin nappi tekee.*/

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
