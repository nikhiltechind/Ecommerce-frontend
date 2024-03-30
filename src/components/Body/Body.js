import  React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CategoryCard from '../../MaterialComponents/skeleton';
import { CATEGORY } from '../utils/jsondata';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoryData } from '../../redux/category/action/action';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  justifyContent:'center',
  
  color: theme.palette.text.secondary,
}));



const itemlist= CATEGORY;
export default function Body() {
const dispatch = useDispatch()
const category = useSelector(state=> state.category.data)
console.log(category)

  useEffect(()=>{
   dispatch(fetchCategoryData())    
  },[dispatch])
 
  return (
    <>
    
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
    flexWrap="wrap"
   
  >
     
      {category?.map((item)=> <CategoryCard key={item.id} category={item}/>)}
           
     </Box>
     </>
  );
}
