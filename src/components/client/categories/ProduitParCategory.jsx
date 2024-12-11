import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export const ProduitParCategory = () => {

    const {idproduit} = useParams()
    console.log('id produit', idproduit)

    ///productsbyCat/:category
const [produitParCatg,setProduitParCat]=useState()

async function fetchProducts(idproduit) {
    const res = await axios.get(`http://localhost:4000/product/productsbyCat/${idproduit}`);
    console.log('product par categorie ',res.data)
    if (res) {
        // setProduitParCat(res.data);
    }
  }  


useEffect(()=>{
    fetchProducts()
},[idproduit])

  return (
    <div>



    </div>
  )
}
