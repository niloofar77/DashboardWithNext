import Image from "next/image";


export default function ChangeLang() {

  return (
    <div className="flexContainer  border-2 border-gray-500 rounded-xl p-3 2 w-full  ">
      <Image  src="/icons/lang.svg" alt="Search" width={24} height={24} className="text-gray-600"/>
      <p>En</p>
  


    </div>
  );
}
