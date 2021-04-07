import styles from './header.module.scss';

//Koko ohjelman otsikkon funktio. Funktio pitää sisällään ohjelman nimen ja tekstin, sekä milla fontilla ja tyyleillä kulukirjanpitosovelluksen pääotsikko on toteutettu.

function Header() {
    return (
        <div className={styles.header}>
            Kulukirjanpito
        </div>
    );
}

export default Header;