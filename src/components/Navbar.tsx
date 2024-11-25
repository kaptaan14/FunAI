"use client"

import React from 'react'
import {Button} from "@/components/Button"

export const Navbar = () => {

  const handleClick = () =>{
    window.open("https://r4.wallpaperflare.com/wallpaper/616/654/498/great-ape-western-gorilla-mammal-terrestrial-animal-wallpaper-58763d7880b00c1860bc210ec8a2e4fa.jpg","_blank")
  }
  return (
    <div className='flex justify-between items-center py-4'>
        <div className='text-3xl font-bold'>
            Fun<span className='text-red-500'>AI</span> 
        </div>

        <div>
            <Button onClick={handleClick}>Contact us</Button>
        </div>
    </div>
  )
}
