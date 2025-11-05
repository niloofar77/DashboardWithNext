import Image from "next/image";
import { useState } from "react";

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");



  return (
    <div className="flexContainer  border-2 border-gray-500 rounded-xl px-3 py-2 w-full max-w-md">
      <Image  src="/icons/search.svg" alt="Search" width={24} height={24} className="text-gray-600"/>
      <input type="text" id="searchbar"
        placeholder="Search..."  value={searchText} onChange={(e) => setSearchText(e.target.value)} className="flex-grow ml-2 border-none outline-none"/>


    </div>
  );
}
