// Type Of Action
export const CLEAR_CART_ITEM="CLEAR_CART_ITEMS"

export const clearCartItems=(cartItems)=>(
    {
        type:CLEAR_CART_ITEM,  //Mandatory
        payload:cartItems //Optional
    }
)


