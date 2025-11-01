"use client"
import { Item } from "@radix-ui/react-dropdown-menu";
import { useRef, useState } from "react";

export default function Products() {
    const priceRef = useRef<HTMLInputElement | null>(null);
    const titleInputRef = useRef<HTMLInputElement | null>(null);
    const [productItems,setProductItems]=useState([])

    async function  addProductHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        
        if (!titleInputRef.current || !priceRef.current) {
            return; // Prevent errors if refs are null
        }

        const title = titleInputRef.current.value;
        const price = priceRef.current.value;
        const reqBody={title:title,price:price}
       const response=await fetch("/api/product",{
            method:'POST',
            body:JSON.stringify(reqBody),
            headers:{
                "Content-Type":"application/json"
            }

        })
       const responseData= response.json()
        // console.log("Title:", title);
        // console.log("Price:", price);
        console.log(responseData)
    }
    async function showProductHandler(){
   const response= await fetch("/api/product")

   console.log(response)
 }
    return (
        <div>
            <h2>Home Page</h2>
            <form onSubmit={addProductHandler}>
                <div>
                    <input type="text" placeholder="Title" ref={titleInputRef} />
                </div>
                <div>
                    <input type="text" placeholder="Price" ref={priceRef} />
                </div>
                <button type="submit">Add</button>
                <button onClick={showProductHandler}>showProducts</button>
            </form>
            {/* <ul>
                {productItems.map((item)=>(
                     <li key={item.title}>
                        {item.title}
                     </li>)
 
                )}
            </ul> */}
        </div>
    );
}
