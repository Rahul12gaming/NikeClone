 const getTotal=(arr)=>
{
    let subTotal=0;
    let quantity=0;
    for(let item of arr)
    {
        subTotal+=item.price;
        quantity+=item.quantity;
    }
    return {subTotal,quantity}
}
export const getCartTotal=(arr,discountPercent=0)=>
{
    const {subTotal,quantity}=getTotal(arr)

    const shipping=subTotal>1400&&subTotal>0?0:750;
     const discount = Math.floor(subTotal * discountPercent / 100);
    const total = subTotal + shipping - discount;

    return {
        subTotal,
        quantity,
        shipping,
        discount,
        total
    }
}