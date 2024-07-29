import Search from "@/components/exploreComponent/Search"
import Image from "next/image"
import { Products } from "./products"


const page = () => {
  return (
    <div >
      <h1 className="text-xl text-[#181725] text-center font-normal my-2">Find Products</h1>
      <Search/>
      <div className="mx-7 md:mx-12 grid grid-cols-2  mt-8 xl:mt-12 xl:gap-12 md:grid-cols-4 xl:grid-cols-5">

        {/* mapping of products */}
{
  Products.map((item)=>(
<div
            key={item.id}
            className="flex flex-col items-center justify-center  my-2 mx-[4px] text-center rounded-[18px] max-w-44 gap-7 h-48 shadow-md"
            style={{
              backgroundColor: item.color,
              border: `1px solid ${item.color}`,
            }}
          >
<Image src={item.imageSrc} width={111.379} height={74.902} alt="fruits"/>

<p className="text-center font-normal text-base leading-6 tracking-[0.1px text-[#181725]">{item.name}</p>
        </div>
  ))
}

        

      </div>
    </div>
  )
}

export default page