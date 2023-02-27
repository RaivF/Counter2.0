import React from "react";
import s from './Main.module.css'
import './main.css'

let Main = () => {

    const [count, setCount] = React.useState(0);
    let maxCount = 5
    function counter() {
        if (count == maxCount-1){
            document.getElementById("1").classList.add("resultSpanRed")
        }
        if (count == maxCount) {
            setCount(count)
        }else{
        setCount(count + 1)}
    }
    function reserCounter() {
        setCount(count - count)
        document.getElementById("1").classList.remove("resultSpanRed")
    }
    return (
        <div className={s.mainContainer}>
            <div className={s.container}>
                <div className={s.resulrCounterPlase}><span id="1" className="resultSpan">{count}</span></div>
                <div className={s.containerButton}>
                    <button onClick={() => {
                        counter()
                    }}>inc
                    </button>
                    <button onClick={() => {
                        reserCounter()
                    }}>reset
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Main