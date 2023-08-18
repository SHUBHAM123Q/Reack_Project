import {useState} from 'react'

const Usecustehook2 = () => {
    const [count, setCount] = useState(0);

    function Incriment() {
        setCount(count + 1)
    }
    function Decriment() {
        setCount(count - 1)
    }
  return [count,Incriment,Decriment]
}

export default Usecustehook2
