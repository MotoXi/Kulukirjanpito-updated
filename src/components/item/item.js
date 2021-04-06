import styles from './item.module.scss';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {Link} from 'react-router-dom';

function Item(props) {

    const locale = "fi-FI";
    const paymentDate = new Date(props.data.paymentDate).toLocaleDateString(locale);
    
    const numberFormat = new Intl.NumberFormat(locale, { style: 'currency', currency: 'EUR'});
    const amount = numberFormat.format(props.data.amount);

    let average;
    let perioid;
    if (props.data.perioidStart && props.data.perioidEnd) {
        const perioidStart = new Date(props.data.perioidStart);
        const perioidEnd = new Date(props.data.perioidEnd);
        perioid  = perioidStart.toLocaleDateString(locale) + " - " + perioidEnd.toLocaleDateString(locale);
        const days = (perioidEnd - perioidStart) / (1000*60*60*24);
        average = numberFormat.format(props.data.amount / days * 30);
    }

    
    return (
        <div className={styles.item}>
            <div className={styles.item_data}>
                <div className={styles.item_type}>{props.data.type}</div>
                <div className={styles.item_amount}>{amount}</div>
                <div className={styles.item_date}>{paymentDate}</div>
                <div className={styles.item_timespan}>{perioid}</div>
                <div className={styles.item_receiver}>{props.data.receiver}</div>
                <div className={styles.item_average}>{ average ? average + "/kk" : ""}</div>
            </div>
            <div className={styles.item_edit}>
                <Link to={"/edit/"+props.data.id}><NavigateNextIcon /></Link>
            </div>
        </div>
    );
}

export default Item;