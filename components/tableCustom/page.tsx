import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination";
  import Image from "next/image";
  import { useState, useEffect } from "react";
  
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  
  type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  };
  
  type TableCustomProps = {
    data: User[];
  };
  
  export function TableCustom({ data }: TableCustomProps) {
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  
  
    useEffect(() => {
      setFilteredUsers(data);
    }, [data]);
  

    const sortByName = () => {
      const sortedUsers = [...filteredUsers].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setFilteredUsers(sortedUsers);
    };
      const sortByCity = () => {
      const sortedUsers = [...filteredUsers].sort((a, b) =>
        a.address.city.localeCompare(b.address.city)
      );
      setFilteredUsers(sortedUsers);
    };
  
    return (
      <>

      <div className="flex flex-row items-left justify-left m-5 ">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Image
                  src={"/icons/filter.svg"}
                  alt="filter"
                  width={40}
                  height={40}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel onClick={sortByName}>Sort by Name</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={sortByCity}>Sort by City</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
  
        <div className="flex flex-col justify-center items-center overflow-hidden">

          <Table className="mt-20 overflow-auto hide-scrollbar">
            <TableHeader>
              <TableRow className="border bottom-1 border-gray-400">
                <TableHead className="bg-gray-300">Id</TableHead>
                <TableHead className="bg-gray-300">Name</TableHead>
                <TableHead className="bg-gray-300">Username</TableHead>
                <TableHead className="bg-gray-300">City</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="border bottom-1 border-gray-400">
              {filteredUsers.map((user, index) => (
                <TableRow key={index} >
                  <TableCell className="font-medium">{index}</TableCell>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.username}</TableCell>

                  <TableCell>{user.address.city}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
  
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
    
         
      </>
    );
  }
  