import React, { memo } from 'react'

const CallChild = ({counttwo , setCounttwo}) => {
  return (
    <div>
        <h1>Child Components</h1>
    </div>
  )
}

export default memo(CallChild);
