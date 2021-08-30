import React from 'react';
import {Restaurant, RestaurantInfo, Title, Addres , RestaurantPhoto} from './styles'
import ReactStars from "react-rating-stars-component";
import restaurante from '../../assets/restaurante-fake.png'
import { useState } from 'react';
import  Skeleton from '../Skeleton';
const RestaurantCard = ({restaurant,onClick}) => {
    
    const [imageLoaded,setImageLoaded] = useState(false)

    return (  
        <Restaurant onClick={onClick}>
        <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars count={5} value={restaurant.rating} edit={false} isHalf activeColor="#e7711c" />
        <Addres>{restaurant.vicinity || restaurant.formatted_address}</Addres>
        </RestaurantInfo>
        <RestaurantPhoto imageLoaded={imageLoaded} src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} onLoad={()=>setImageLoaded(true)} alt="Restaurante default"/>
        {!imageLoaded && <Skeleton width="100px" height="100px"/> }
        </Restaurant>
    );
}
 
export default RestaurantCard;