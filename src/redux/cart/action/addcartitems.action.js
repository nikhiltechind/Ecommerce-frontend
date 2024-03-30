// Type Of Action
export const ADD_CART_ITEMS="ADD_CART_ITEMS"
// Action
// Parathensis()
// Curlybraces {}
// Block {}
// Object {}
// Destructing {}
// DataBinding {}
export const addCartItems=(cartItems)=>(
    {
        type:ADD_CART_ITEMS,  //Mandatory
        payload:cartItems //Optional
    }
)


