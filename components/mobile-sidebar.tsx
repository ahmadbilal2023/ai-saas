"use client"


import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import SideBar from './sideBar'

const MobileSidebar = () => {
  const [isMounted, setIsMouted] = useState(false);

  useEffect(()=>{
    setIsMouted(true);
  },[])

  if (!isMounted){
    return null;
  }


  return (
    <div>
      <Sheet>
        <SheetTrigger>
        <Button variant="ghost" size="icon" className='md:hidden'>
            <Menu />
        </Button>
        </SheetTrigger>
        <SheetContent side={"left"} className='p-0'>
        <SideBar/>
        </SheetContent>
        </Sheet>
    </div>
  )
}

export default MobileSidebar