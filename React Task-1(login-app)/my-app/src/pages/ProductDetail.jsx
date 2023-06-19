import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from "../components/ProductCard"

const ProductDetail = () => {
    const { id } = useParams();
    const [card, setCard] = useState({});
   useEffect(()=>{
    axios( `http://localhost:3009/get-data/${id}`).then((res)=>{
        setCard(res.data.data);
        // console.log(res.data.data)
   });
   },[]);
    // console.log(id)
   
  return (
    <div className='card-detail'>
        <ProductCard card={card} />
    </div>
  );
};

export default ProductDetail