import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Item } from "../utils/item";
import Login from "../login/login";
import CustomButton from "../custom-button";
import CustomTextfield from "../custom-textfield";
import {  useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/user/action/user.action";

const Signup = () => {
  const [refresh, setrefresh] = useState(false);
  const logged =useSelector(state=>state.user.user)
  const [UserData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  
  const dispatch= useDispatch()
  console.log(UserData);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8085/user/registration",
        UserData
      );
      console.log(response);
      alert("SignUp successful");
    } catch (error) {
      console.log(error);
      alert("signup failed");
    }
  };

  return logged!==null ? (
    <div>
      please signout
      <button
        onClick={() => {
         
          dispatch(setUser(null))
          setrefresh(!refresh);
        }}
      >
        Signout
      </button>
    </div>
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: "10px",
        flexWrap: "wrap",
      }}
    >
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <Grid item>
          <h2 style={{ fontFamily: "cursive" }}>I do not have an account</h2>

          <p style={{ fontFamily: "cursive" }}>
            SignUp with your Email and Password
          </p>

          <Item>
            <CustomTextfield
              label={"User Name"}
              id={"username"}
              variant={"outlined"}
              name="username"
              onChange={handleChange}
            />
          </Item>
          <Item>
            <CustomTextfield
              id="email"
              label="Email"
              variant="outlined"
              name="email"
              onChange={handleChange}
            />{" "}
          </Item>
          <Item>
            <CustomTextfield
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              name="password"
              onChange={handleChange}
            />
          </Item>
          <Item>
            <CustomButton
              style={{
                width: "100px",
                height: "50px",
                color: "white",
                backgroundColor: "red",
                cursor: "pointer"
              }}
              type="submit"
              onClick={handleSubmit}
            >
              {" "}
              Sign Up
            </CustomButton>
          </Item>
        </Grid>
      </Box>

      <Login />
    </div>
  );
};
export default Signup;
