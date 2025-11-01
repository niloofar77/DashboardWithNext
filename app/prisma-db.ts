import {PrismaClient} from "@prisma/client"
const prisma=new PrismaClient()

const seedProducts=async()=>{
    const count = await prisma.product.count()
    if(count===0){
        await prisma.product.createMany({
            data:[
                {title :"product1",price:500,description:"des 1"},
                {title :"product2",price:500,description:"des 2"},
                {title :"product3",price:500,description:"des 3"},
            ]
        })
        }
    }
    
seedProducts()