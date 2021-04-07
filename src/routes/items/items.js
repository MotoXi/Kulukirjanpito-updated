import {Link} from 'react-router-dom';
import Item from '../../components/item';
import { FloatingButton, ButtonContainer } from '../../shared/uibuttons';

/*Items-komponentti:
Yksinkertaisuudessaan merkinnät (item) tulostava komponentti.
Items komponentti siis tulostaa kaikki Itemit.*/

function Items(props) {

    const items = props.data.map( (item) => <Item key={item.id} data= {item} />);

    return (
        <ButtonContainer>
            <div>
              { items }
                <Link to="/add"><FloatingButton secondary>+</FloatingButton></Link>
            </div>
        </ButtonContainer>     
    );
}

export default Items;   