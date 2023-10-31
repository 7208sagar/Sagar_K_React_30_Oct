import React, { useState } from 'react'
import Counter from '../../src/component/Counter.css'

function CounterND() {
    const [count, setCount] = useState(0);
    const [error, setError] = useState('');

    const refresh = () => {
        setCount(0);
    }
    const increment = () => {
        setCount(count + 1);
        console.log("incremented value:", count + 1);
    }

    const decrement = () => {
        if (!count == 0) {
            setCount(count - 1);
            console.log("incremented value:", count - 1);
        } else {
            setError("can not  go below 0")
        }
    }

    return (
        <div>
            <div className='counter_container m-auto mt-5 p-5  text-light w-50 rounded'>

                <h1>Counter App Using React</h1><br />
                <h4 className='current_count'>Your Current Count is : {count}</h4>
                <div className='text-danger fs-4 mt-3'>
                    <p>Error : {error}</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <button onClick={decrement} className='btn btn_success '>Decrement</button>
                    <button onClick={increment} className='btn btn_success '>Increment</button>
                    <button onClick={refresh} className='btn btn_danger '>Go Back To 0</button>
                </div>
            </div>
        </div>
    )
}

export default CounterND
