import React from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/HotItemCard.css';

const HotItemCard = ({image, index,name, price}) => {
  return (
    <div className="hotItemCard">
        <img src={image} alt={`${index} product`}/>
        <p>{name}</p>
        <span>{price}</span>
        <Outlet />
    </div>
  )
}

export default HotItemCard;