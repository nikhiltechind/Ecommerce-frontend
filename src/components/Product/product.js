import { useParams } from "react-router-dom"

import { SHOP_DATA } from "../utils/jsondata";
import Error from "../utils/Error";
import { useSelector } from "react-redux";
import { CardComp } from "../Card";

import { Grid } from "@mui/material";

  

const Product = ()=>{
  
   const category = useSelector(state=> state.category.data)
 const prod =  useParams();
 // console.log(prod)

const cat=category.find((item)=>
    item.title.toLowerCase()===prod.title
)



    return cat===undefined? <Error/>:(
        
           
            <div >    
            <h1 style={{ textAlign: "center", paddingTop: "20px",textDecoration:"underline overline" }}>
                        <span style={{ color: "black", WebkitTextStrokeWidth: "2px", WebkitTextStrokeColor: "black" }}>
                            {prod.title.toUpperCase() + " "}
                      
                            COLLECTION
                        </span>
                    </h1>

                    <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center">


                        {cat.items.map((item) => (

                            <CardComp key={item.id} item={item} />
                        ))}
                    </Grid>

                </div>
            

    )
}
export default Product;