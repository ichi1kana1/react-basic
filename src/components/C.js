import React, {useContext} from 'react'
import AppContext from '../contexts/AppContext'

const C = () => {
    // Hooksの機能で親(App.js)から孫(C.js)に直接値の引き渡しができる
    const value = useContext(AppContext)
    return (
        <div>
            <h3>C</h3>
            {value}
            
        </div>
    )
}

export default C
