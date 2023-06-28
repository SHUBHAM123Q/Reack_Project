import React from 'react';
import Expanceitem from './Expanceitem';

const Expences = (props) => {
  return (
    <div>
    <Expanceitem
    date={props.item[0].date} title={props.item[0].title} amount={props.item[0].amount}/>
  
   <Expanceitem
   date={props.item[1].date} title={props.item[1].title} amount={props.item[1].amount}/>

  <Expanceitem
  date={props.item[2].date} title={props.item[2].title} amount={props.item[2].amount}/>

 <Expanceitem
 date={props.item[3].date} title={props.item[3].title} amount={props.item[3].amount}/>


    </div>
  )
}

export default Expences