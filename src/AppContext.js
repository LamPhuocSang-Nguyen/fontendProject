import React from "react";
import { createContext, useState, useEffect} from "react";
import axios from "axios";
export const AppConText = createContext({});
export const AppProvider = ({children})=>{
    const url="https://66a077917053166bcabb8106.mockapi.io/student"
    const [count, setCount] = useState(1);
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])


    const fetchProducts = ()=>{
        axios.get(url)
        .then(function(res){
            setProducts(res.data)
        })
        .catch(function(error){
            console.log(error)
        })
    }


    const addCart = (id)=>{//id=6
        const res = products.find((item)=>item.id===id)
        const index = cart.findIndex((item)=>item.id===id)
        console.log(index);
        //cart=[{id:2,name:"iphone 15 pro max", quantity::1}, {id:6,name:"vivo v25 pro 5g" quantity:1}]
        if(index >= 0){//truong hop id nay (san pham nay) da ton tai trong cart
        //cart=[{id:2,name:"iphone 15 pro max", quantity::1}, {id:6,name:"vivo v25 pro 5g" quantity:1}]
        let newCart = cart
        newCart[index].quantity++;
        setCart(newCart)
        }
        else{
            setCart([...cart,{...res,quantity:1}]);
        }
    }

    const deleteCart = (id)=>{
        setCart(cart.filter(item=>item.id!==id))
    }

    const updateById1 = (id,flag)=>{
        let index = cart.findIndex(item=>item.id===id)
        let newCart = cart;
        if(flag == -1){
            if(newCart[index].quantity > 1){
                newCart[index].quantity--;
            }
        }
        else{
            newCart[index].quantity++;
        }
        setCart([...newCart]);
    }

    const updateById = (id,num)=>{
        const kq = cart.map((item)=>(item.id==id && !(num==-1 && item["quanity"]==1))?{...item,quanity:item["quantity"]+num}:item);
        setCart(kq);
    }


    useEffect(()=>{
        fetchProducts();
    },[])

    return <AppConText.Provider value={{count,setCount, cart, addCart, deleteCart,updateById}}>{children}</AppConText.Provider >
}