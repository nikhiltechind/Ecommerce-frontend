import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CustomButton from '../custom-button';
import './card.css'
import { useDispatch, useSelector } from 'react-redux';
import { addCartItems } from '../../redux/cart/action/addcartitems.action';



export const CardComp = ({ item }) => {
const dispatch=useDispatch();


  const handleClick= () => {

    dispatch(addCartItems(item))

}

  return (
    <>
      <Card sx={{ minWidth: 280, margin: 3, marginTop: 10 }} className="card">
        <CardActionArea  >
          <div className='image-container'>
            <CardMedia
              component="img"
              height="250"
              width="250"
              image={item.imageUrl}
              alt={item.name}
            />
            <div className="textblock" >
              <CustomButton style={{height:"50px",width:"100%",opacity:"0.7",fontSize:"15px",fontWeight:"50px",cursor: "pointer"}} onClick={handleClick} >ADD TO CART</CustomButton>
            </div>
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: ${item.price}
            </Typography>

          </CardContent>
        </CardActionArea>
      </Card>
     
    </>

  );

}
