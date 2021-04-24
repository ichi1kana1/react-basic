import React, {useState, useEffect} from 'react'

// ある処理をした時だけ呼び出すなど

const BasicUseEffect = () => {

    const [count, setCount] =useState(0)
    const [item, setItem] =useState('')

    useEffect(()=> {
        console.log("useEffect invoked")
    },[count]) 
    　　//[]を記載すると、レンダリング時に一回だけ実行される
    　　//[]内に引数を指定すると、引数だけステートが変更れる

    return (
        <div>
            <button onClick={()=> setCount( prevCount => prevCount + 1)}>Click {count}</button>
            <input type='text' value={item} onChange={evt=>setItem(evt.target.value)}/>
        </div>
    )
}

export default BasicUseEffect
