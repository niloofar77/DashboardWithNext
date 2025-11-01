import fs from "fs";
import path from "path";
interface Product{
id:string,
title:string
}
function handler(req: Request,res:Response){
   const pid= req.query.productID
   
  const filePath = path.join(process.cwd(), "data", "products.json");
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData.toString());
   const product=data.find((item:Product)=>item.id===pid)
  
  

}
export default handler