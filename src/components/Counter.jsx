import styles from "../App.module.css"
const Counter = ({plu, min, reset, num}) =>{
    return(
        <div>
            <h2>{num}</h2>
            <button className={styles.btn} onClick={plu}>+</button>
            <button className={styles.btn} disabled={num===0} style={num===0 ? {background:'red'}: {}} onClick={min}>-</button>
            <button className={styles.btn} onClick={reset}>Reset</button>
        </div>
    )
}


export default Counter;