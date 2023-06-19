import React from 'react';
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../components/Header'


const Products = () => {
  const navigate = useNavigate();
  const [productData, setProductData] = useState([]);

  useEffect(()=>{
    axios(`http://localhost:3009/get-data`).then((res)=>{
    setProductData(res.data.data)
    })
  },[])
  return (
  <div>
    <Header />
    <div className='products'>
      <table id="customers">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Detail</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody> 
          {productData.map((item)=>{
            if(typeof item.title !== "undefined"){
              return(
              <tr key={item.id}>
                <td>{item.id}</td>
                <td><img src={item.image} alt={item.title} /></td>
                <td>{item.title.slice(0,15)}</td>
                <td>{item.description.slice(0, 15)}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td><button onClick={()=>navigate(`/product-detail/${item.id}`)}>Details</button></td>
                <td><button>Delete</button></td> 
              </tr>
              )
          
            }
          })}
          
        </tbody> 
      </table>
    </div>
  </div>
 
  )
}

export default Products

