import Cookies from 'js-cookie'
export const getItem=(key)=>
{
   if(Cookies.get(key))
   {
    return Cookies.get(key)
   }
   return undefined
}
export const setItem=(key,value)=>
{
    return Cookies.set(key,value)
}
export const removeItem=(key)=>
{
    return Cookies.remove(key)
}