import Grid from "@mui/material/Grid";
import { Item } from "../utils/item";
import CustomButton from "../custom-button";
import CustomTextfield from "../custom-textfield";
import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/user/action/user.action";

const Login = () => {
  const [refresh, setrefresh] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const param= useLocation()
  const [UserData, setUserData] = useState({
    email: "",
    password: "",
  });
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
        "http://localhost:8085/user/login",
        UserData
      );
      console.log(response);
      console.log(response.data.username);
      if(response.data.logged){
      localStorage.setItem("username", JSON.stringify(response.data.username));
      localStorage.setItem("token", JSON.stringify(response.data.token));
      dispatch(setUser(response.data))
      alert("Login successful");
      console.log(param.pathname)
    //  if(param.pathname==="/Signup")
      navigate("/");
      
      setrefresh(!refresh);
      }  
      else{
        alert("wrong credentials")
      }
    } catch (error) {
      console.log(error);
      alert("Login failed");
    }
  };
  return (
    <>
      <Grid item>
        <h2 style={{ fontFamily: "cursive" }}>I have an account</h2>

        <p style={{ fontFamily: "cursive" }}>
          SignIn with your Email and Password
        </p>
        <Item>
          <CustomTextfield
            id="email"
            label="Email"
            variant="outlined"
            onChange={handleChange}
            name="email"
          />{" "}
        </Item>
        <Item>
          <CustomTextfield
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            onChange={handleChange}
            name="password"
          />
        </Item>

        <Item>
          <CustomButton
            style={{
              width: "100px",
              height: "50px",
              color: "white",
              backgroundColor: "#3CB043",
              cursor: "pointer"
            }}
            onClick={handleSubmit}
          >
            {" "}
            Sign in
          </CustomButton>
        </Item>
      </Grid>
    </>
  );
};
export default Login;
