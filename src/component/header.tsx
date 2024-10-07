"use client";
import React, { useState } from "react";
import SS from "@/public/SS.png";
import github from "@/public/github.png";
import Link from "next/link"
import Image from "next/image";








export default function Header (){
  const [navbarOpen, setNavbarOpen] = useState(false);
    
    return(
       
        <div >

        <header id="header" > 


       <h3 className="logo">  <Link href={`/`}> WASEEM AHMED</Link> </h3>
      
       
    
     <ul className="header-button">
      <Link href={`/`}> <li className="header-btn">Home</li></Link> 
      <Link href={`/contact`}> <li className="header-btn">Contact</li></Link>
      <Link href={`/about`}> <li className="header-btn">About</li></Link>
      <Link href={`/projects`}> <li className="header-btn">Project</li></Link>
        </ul>
  
        </header>   
         
        </div>
      

    )
}