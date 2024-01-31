import React from 'react'
import './ItemDate.css'
function ItemDate(props) {
  
    const itemDate=props.date;
    const itemMonth=props.month;
    const itemYear=props.year;
    return (
        <>
    <div className='date'>
        <span>{itemDate}</span>
        <span>{itemMonth}</span>
        <span>{itemYear}</span>
    </div>
    </>
  )
}

export default ItemDate
