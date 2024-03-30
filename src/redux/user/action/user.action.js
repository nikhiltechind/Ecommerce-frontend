export const USER_DETAIL="USER_DETAIL"

export const setUser=(user)=>(
    {
        type:USER_DETAIL,  //Mandatory
        payload:user //Optional
    }
)


// import axios from "axios";

// export const registerUser = (userData) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.post('http://localhost:7000/user/registration', userData);
//       console.log(response.data);
//       alert("Successfully Registered!!!");
//       dispatch(registerSuccess());
//     } catch(error) {
//       console.log(error);
//       alert("Registration Failed!!, Please try again");
//       dispatch(registerFailure());
//     }
//   };
// };

// const registerSuccess = () => ({
//   type: 'REGISTER_SUCCESS'
// });

// const registerFailure = () => ({
//   type: 'REGISTER_FAILURE'
// });
