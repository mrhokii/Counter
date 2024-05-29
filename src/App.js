import { useState } from "react";

import Counter from "./components/Counter";
import styles from "./App.module.css"

const App = () =>{
    const [number, setCount] = useState(0);

    const plus= () =>{
        setCount(number+1)
    }
    const minus= () =>{
        if(number>0){
            setCount(number-1)
        }
    }
    const Reset= () =>{
        setCount(0)
    }

    return(
        <div className={styles.App}>
            <h1>Counter Project</h1>
            <Counter plu={plus} min={minus} reset={Reset} num={number} />
        </div>
    )
}

export default App