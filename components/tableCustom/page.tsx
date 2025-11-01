import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

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
type tableCustomProps={
    data:User[]
}
export function TableCustom({ data}:tableCustomProps) { 

    return (
        <Table>
          
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Name</TableHead>
                    <TableHead>Username</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead className="text-right">City</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((user, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{user?.name}</TableCell>
                        <TableCell>{user?.username}</TableCell>
                        <TableCell>{user?.email}</TableCell>
                        <TableCell className="text-right">{user?.address.city}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
