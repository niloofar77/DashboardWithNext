"use client"

import { TableCustom } from "@/components/tableCustom/page"
import { useEffect, useState } from "react"


export default function UsersCustom() {
    type User={
        
            "id":number
            "name": string,
            "username": string,
            "email": string,
            "address": {
              "street": string,
              "suite":string, 
              "city": string,
              "zipcode": string,
              "geo": {
                "lat":string,
                "lng": string
              }
            },
            "phone":string,
            "website": string,
            "company": {
              "name": string,
              "catchPhrase": string,
              "bs": string
            }
          

    }
    const[users,setUsers]=useState<User[]>([])
    useEffect(()=>{
        async function fetchPosts() {
            const res=await fetch("https://jsonplaceholder.typicode.com/users")
            const data=await res.json()
            setUsers(data)
        }
        fetchPosts()
    },[])
    return(
        <div className=" h-screen w-screen  bg-white dark:bg-black shadow p-4 text-black  dark:text-white  m:2">
          
            <h1 className="m-4 ">Users inforamtion :</h1>

            
            <div className="m-4">
                <TableCustom  data={users}></TableCustom>
            </div>
          
        </div>
    )
} 
