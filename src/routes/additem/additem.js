import styles from './additem.module.scss';
import ItemForm from '../../components/itemform';

/*AddItem-komponentti pitää sisällään funktion, jolla pystytääm lisäämään
lomakesivun kautta (ItemForm) item-merkintä. Toisinsanoen Additem komponentti 
toimii, kun painetaan "lisää merkintä" painiketta, niin silloin linkitys ohjaa 
lomakesivulle (ItemForm), mistä voi lisätä uuden merkinnän (itemin)*/


function AddItem(props) {
    return (
        <div className={styles.additem}>
            <h2>Uuden merkinnän lisääminen</h2>
            <ItemForm onItemSubmit={props.onItemSubmit} types={props.types} />
        </div>
    );
}

export default AddItem;
