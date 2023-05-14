import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getAllAsync,addAsync,selectProducts,delAsync,updAsync, } from './CRUDSlice'
import Alert from 'react-bootstrap/Alert';
const CRUD = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector(selectProducts);
    const [desc, setdesc] = useState("")
    const [price, setprice] = useState(0)
    useEffect(() => {
        dispatch(getAllAsync())
    }, [])
    
    return (
        <div>
           <h1> CRUD</h1>
            Desc<input onChange={(e)=>setdesc(e.target.value)}/>
            price<input onChange={(e)=>setprice(+e.target.value)}/>
            <button onClick={() => dispatch(addAsync({desc,price}))}>add data</button> 
            <h2>Number of items:             {products.length}</h2>
            
            <hr/>
            {products.map((prod,ind) =>  <div key={ind}>desc:{prod.desc}, price:{prod.price} ,ID:{prod.id} 
            <button onClick={() => dispatch(delAsync(prod.id || 0))}>Del </button>
            <button onClick={() => dispatch(updAsync({id:(prod.id || 0),desc,price}))}>upd </button>
              </div> )}
            
        </div>
    )
}

export default CRUD