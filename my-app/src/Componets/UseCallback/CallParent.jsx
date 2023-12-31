import React from 'react'
import CallChild from './CallChild'
import { useCallback ,useState} from 'react';
const CallParent = () => {

    const[countone  , setCountone] = useState(0);
    const[counttwo  , setCounttwo] = useState(0);

    const IncrimentOne = () => {
        setCountone(countone+1)
    }

    const fun =useCallback( () => {
        console.log("Hello Child");
    }, [counttwo])

  return (
    <div>
        <CallChild  counttwo={counttwo} fun={fun}/>
        <button onClick={fun}>count={countone}</button>
    </div>
  )
}

export default CallParent
