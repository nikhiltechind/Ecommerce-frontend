import { useDispatch, useSelector } from "react-redux";

import { CardComp } from "../Card";
import Grid from '@mui/material/Grid';
export const Shop = () => {

    const category = useSelector(state => state.category.data);
    const dispatch = useDispatch();

   

    if (!category || !Array.isArray(category) || category.length !== 5) {
        return null;
    }

    return (
        <div>

            {category.map((categoryItem, index) => (
                <div key={index}>
                    <h1 style={{ textAlign: "center", paddingTop: "40px" }}>
                        <span style={{ color: "black", WebkitTextStrokeWidth: "2px", WebkitTextStrokeColor: "black" }}>
                            {categoryItem.title.toUpperCase() + " "}
                      
                            COLLECTION
                        </span>
                    </h1>

                    <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center">


                        {categoryItem.items.slice(0, 3).map((item, itemIndex) => (

                            <CardComp key={item.id} item={item} />
                        ))}
                    </Grid>

                </div>
            ))}
        </div>
    );
};
