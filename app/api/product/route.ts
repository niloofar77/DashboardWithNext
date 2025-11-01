
import fs from "fs";
import path from "path";

export async function POST (request: Request) {
  const body = await request.json();
  const { title, price } = body;

  const filePath = path.join(process.cwd(), "data", "products.json");
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData.toString());
  
  data.push({ title, price });
  fs.writeFileSync(filePath, JSON.stringify(data));

  return Response.json({ success: true });
}

export async function GET() {
  const filePath = path.join(process.cwd(), "data", "products.json");
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData.toString());
  return data

 
}