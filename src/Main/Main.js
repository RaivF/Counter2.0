import React from "react";
import s from './Main.module.css'

let Main = () => {

    const [count, setCount] = React.useState(0);
    function counter() {
        setCount(count+1)
    }
    function  reserCounter(){
        setCount(count - count)
    }
    return (

        <div className={s.mainContainer}>
            <div className={s.container}>
                <div className={s.resulrCounterPlase}><span>{count}</span></div>
                <div className={s.containerButton}>
                    <button onClick={()=>{counter()
                        console.log(counter)}}>inc</button>
                    <button onClick={()=>{reserCounter()}}>reset</button>
                </div>
            </div>
        </div>
    )
}

export default Main