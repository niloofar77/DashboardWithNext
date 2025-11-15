
import { GetStaticProps } from 'next';
import path from 'path';
import fs from 'fs';
import { useState } from 'react';

interface Product {
  id: string;
  title: string;

}

interface Props {
  productItems: Product[];
}
async function getProducts() {
    const filePath = path.join(process.cwd(), 'data', 'products.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonData) as Product[];
  }
 export default function Product2({ productItems }: Props) {
    const[productData,setProductData]=useState()
    
    async function productPriceHandler(id:string){
       const res =await fetch(`/api/${id}`)
      const responseData =await res.json()
      setProductData(responseData.product)
    }
  return (
    <div>
        {productData&&<p>{productData}</p>}
      <ul>
        {productItems?.map((item) => (
          <li key={item.id}>{item.title}
          <button onClick={productPriceHandler.bind(null,item.id)}>show Price</button>
          
          </li>
        ))}
      </ul>
    </div>
  );
}

