Item-komponentilla renderöidään yksittäinen merkintä sivulle.
Komponentti saa kutsun yhteydessä tulostettavan merkinnän tiedot
data-ominaisuuden kautta.

Malliesimerkki käytöstä:
```js
import { BrowserRouter as Router } from 'react-router-dom';

    const data= {
    id: "abcd-1234",
    type: "Puhelin",
    amount: 26.90,
    paymentDate: "2021-03-16",
    perioidStart: "",
    perioidEnd: "",
    receiver: "Ilpo"
};
<Router>
    <Item data= {data} />
</Router>
```

Jos merkinnän tietojen yhteydessä annetaan myös jakson alku- ja 
päättymispäivämäärät,  laskee komponentti keskimääräisen kuukautta
kohden tulevan kulun.

```js
import { BrowserRouter as Router } from 'react-router-dom';

    const data= {
    id: "abcd-1234",
    type: "Sähkö",
    amount: 359.70 ,
    paymentDate: "2021-03-15",
    perioidStart: "2021-01-01",
    perioidEnd: "2021-02-28",
    receiver: "Lahti-Energia"
};
<Router>
    <Item data= {data} />
</Router>
```