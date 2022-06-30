import React, { useEffect, useState } from 'react';

const App2 = (props) => {
    const [ count, setCount ] = useState(1);
    const [ input, setInput ] = useState("");
    useEffect(()=>{
        // componentDidMount && cononentDidUpdate
        console.log('렌더링 될 때마다 useEffect 호출')
    })
    
    // useEffect에 두번 째 인자로 []을 넘겨주면 마운트 될때만 호출됨
    // conponentDidMount 
    useEffect(()=>{
        console.log('처음 마운트 될 때만 useEffect 호출')
    }, [])

    useEffect(()=>{
        console.log('배열요소안의 값이 업데이트 되면 useEffect 호출')
    }, [count])

    const handleCount = () => {
        setCount(count+1);
    }

    const onChange = (e) => {
        setInput(e.target.value);
    }
    return (
        <div>
            <button onClick={handleCount}>수정하기</button>
            <span>count: {count}</span>
            <input onChange={onChange} value={input}/>
        </div>
    );
};

export default App2;