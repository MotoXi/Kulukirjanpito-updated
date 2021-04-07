import styles from './content.module.scss';

/*Content-komponentti on tässä ohjelmassa eräänlainen kääre-komponentti,
joka sijoitellaan items-komponentin ympärille, content komponentin avulla
sisältö (items) rullautuu ylös-alas sovelluksessa halutulla tavalla.
Content-komponentti käyttää sisällä olevia komponenttejaan lapsikomponentteina, 
eli items, joka on content-komponentin sisällä, näyttää itemsin sisällä olevan sisällön*/

function Content(props) {
    return (
        <div className={styles.content}>
            {props.children}
        </div>
    );
}

export default Content;