import styles from './edititem.module.scss';
import ItemForm from '../../components/itemform';
import {useParams} from 'react-router-dom';

/*EditItem-komponenttin avulla voidaan muokata ItemForm komponentin 
pohjalla/avulla kaikkia lisättyjä merkintöjä eli itemeitä.*/

function EditItem(props) {

    const { id } = useParams();
    const index = props.data.findIndex(item => item.id === id);
    let item =  props.data [index];

    return (
        <div className={styles.edititem}>
            <h2>Merkinnän muokkaaminen</h2>
            <ItemForm onItemSubmit={props.onItemSubmit} data={item} types={props.types} onItemDelete={props.onItemDelete} />
        </div>
    );
}

export default EditItem;
