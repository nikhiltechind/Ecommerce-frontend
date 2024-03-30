export const SHOW_CART="SHOW_CART"

export const showCart=(showcart)=>(
    {
        type:SHOW_CART,  //Mandatory
        payload:showcart //Optional
    }
)