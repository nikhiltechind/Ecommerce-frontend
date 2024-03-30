import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { showCart } from "../../redux/cart/action/showcart.action";
import CustomButton from "../custom-button";
import { addCartItems } from "../../redux/cart/action/addcartitems.action";
import { removeCartItems } from "../../redux/cart/action/removecartitem.action";
import { clearCartItems } from "../../redux/cart/action/clearitem.action";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  height: 450,
  display: "flex",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export default function BasicModal() {
  const show = useSelector((state) => state.cart.showCart);

  const [count, setcount] = React.useState(0);
  let total = 0;

  const dispatch = useDispatch();
  const cartitem = useSelector((state) => state.cart.cartitems);

  console.log(cartitem);
  const [open, setOpen] = React.useState(show);

  //const handleOpen = () => dispatch(showCart(true));
  const handleClose = () => dispatch(showCart(false));
  const navigate = useNavigate();
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            display: "block",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            overflowY: "auto",
          }}
        >
          {cartitem.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                width: "270px",
                height: "auto",
                backgroundColor: "white",
                margin: "3px",
                border: "2px solid black",
              }}
            >
              <Box>
                <img src={item.imageUrl} width="80px" height="100%" />
              </Box>
              <Box sx={{ margin: "10px" }}>
                <p style={{ margin: "0", padding: "0" }}>{item.name}</p>
                <p style={{ margin: "0", padding: "0" }}>
                  {item.quantity} x ${item.price}
                </p>
                <p style={{ margin: "0", padding: "0" }}>
                  <button
                    key={item.id}
                    onClick={() => {
                      dispatch(addCartItems(item));
                      setcount(count + 1);
                    }}
                  >
                    +
                  </button>
                  {"  "}
                  <button
                    onClick={() => {
                      dispatch(removeCartItems(item));
                      setcount(count - 1);
                    }}
                  >
                    -
                  </button>
                  {"  "}

                  <button
                    onClick={() => {
                      dispatch(clearCartItems(item));
                      setcount(count - 1);
                    }}
                  >
                    <DeleteForeverIcon />
                  </button>
                </p>
              </Box>
            </Box>
          ))}
        </Box>

        {cartitem.map((item) => {
          total = total + item.quantity * item.price;
        })}

        <p>Total: {total}$</p>

        <Box>
          <CustomButton
            style={{
              width: "100px",
              height: "50px",
              color: "white",
              backgroundColor: "black",
              margin: "5px",
            }}
            onClick={()=> {
              dispatch(showCart(false))
              navigate("/checkout")}}
          >
            CHECK OUT
          </CustomButton>
        </Box>
      </Box>
    </Modal>
  );
}
