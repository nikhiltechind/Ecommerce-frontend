import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CustomButton from '../custom-button';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItems } from '../../redux/cart/action/addcartitems.action';
import { removeCartItems } from '../../redux/cart/action/removecartitem.action';
import { clearCartItems } from '../../redux/cart/action/clearitem.action';
import { useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function CheckOut() {
    const [cnt,setCnt] = React.useState(0)
    const dispatch = useDispatch();
    const cartitem = useSelector((state) => state.cart.cartitems);
    const navigate=useNavigate();
    let total=0;
    console.log(localStorage.getItem("username"))
  return cartitem===undefined ? <h2>cart is empty</h2>: (
    <>
    <TableContainer component={Paper}>
        <h2>Checkout</h2>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product</StyledTableCell>
            <StyledTableCell >Description</StyledTableCell>
            <StyledTableCell  >Quantity</StyledTableCell>
            <StyledTableCell >Price</StyledTableCell>
            <StyledTableCell>Remove</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartitem.map((item) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell component="th" scope="row">
              <CardMedia
        component="img"
        sx={{ width: 120 }}
         image={item.imageUrl}
      />
              </StyledTableCell>
              <StyledTableCell >{item.name}</StyledTableCell>
              <StyledTableCell >
                <Box sx={{display:"flex"}}>
                <CustomButton style={{backgroundColor:"blue",color:"white",margin:"10px",height:"30px",width:"50px",cursor: "pointer"}}
                onClick={()=>{
                  dispatch(addCartItems(item))
                  setCnt(cnt+1)
                }}>
                    +
                    </CustomButton>
                 <Typography sx={{position:"relative",top:"12px"}}>
                   {item.quantity}
                 </Typography>
                 <CustomButton style={{backgroundColor:"red",color:"white",margin:"10px",height:"30px",width:"50px",cursor: "pointer"}}
                 onClick={()=>{
                    dispatch(removeCartItems(item))
                    setCnt(cnt-1)
                 }}
                 >-</CustomButton>
                </Box>
              </StyledTableCell>
              <StyledTableCell >{item.price}$</StyledTableCell>
              <StyledTableCell >
              <DeleteIcon onClick={()=>{
                dispatch(clearCartItems(item))
                setCnt(cnt-1) 
              }}/>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
     
    </TableContainer>

    <h2 style={{display:"flex",flexDirection:"column",alignItems:"center",cursor: "pointer"}}>
        {cartitem.map((item) => {
          total = total + item.quantity * item.price
})}

        <p >Total: {total}$</p>
        <CustomButton style={{width:"auto", height:"30px", backgroundColor:"orange",cursor: "pointer"}} onClick={()=>
        navigate("/payment")
        }> Pay Now</CustomButton>
    </h2>
    </>
  );
}
