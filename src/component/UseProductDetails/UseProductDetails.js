import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const UseProductDetails = () => {
const {id: productId} = useParams();
const {product, setProducts} = useState();
const {selectColor, setSelectColor} = useState("");
const {selectedSize,setSelectedSize} =useState("");
const {selectedQuantity, setelectedQuantity} = useState(1);



  return (
    <div>UseProductDetails</div>
  )
}

export default UseProductDetails