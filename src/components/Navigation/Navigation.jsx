"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import { navMenu } from './NavMenu';


const Navigation = () => {
    const pathname = usePathname();
const currentTab = pathname?.split("/")[1];
const [current, setCurrent] = useState("")


useEffect(() => {
 setCurrent(currentTab);
}, [currentTab]);

  return (
    <nav className='fixed bottom-0 w-full border-t
    rounded-t-2xl h-fit flex justify-around gap-7 bg-[#FFF] border-gray-200 py-4 px-7 shadow-md items-center '>

{/* mapping all the navitems */}
{navMenu.map((item) => (
  
            <Link key={item.id} className='flex flex-col items-center justify-center text-center gap-[4px] ' href={`/${item.link}`}>
              {/* logic for color change  like if current is equal to current link*/}
              {item.icon(current === item.link ? '#53B175' : '#181725')}
             <span className={`${current === item.link?"text-[#53B175]":"text-[#181725]"} text-sm font-semibold`}>
                {item.name}</span>
          
         </Link>
      ))}
        
    </nav>
  )
}

export default Navigation