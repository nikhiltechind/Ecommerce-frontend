// Type Of Action
export const REMOVE_CART_ITEM="REMOVE_CART_ITEMS"

export const removeCartItems=(cartItems)=>(
    {
        type:REMOVE_CART_ITEM,  //Mandatory
        payload:cartItems //Optional
    }
)


