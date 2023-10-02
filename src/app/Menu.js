"use client"
import Image from 'next/image';
import Link from 'next/link';
import iconMenue from "../../public/menue-icon.svg"
import iconCross from "../../public/cross-icon.svg"
import { useState } from "react";

const linkStyle = "hover:text-lg decoration-white hover:underline"

export default function Menu(){
    const [menuVisibile, setMenueVisibile] = useState(false);
    const [menuIcon, setMenuIcon] = useState(iconMenue);
    
    function toggelMenu(){
        if(menuVisibile == false){
            setMenueVisibile(!menuVisibile);
            setMenuIcon(iconCross)
        }

        if(menuVisibile == true){
            setMenueVisibile(!menuVisibile);
            setMenuIcon(iconMenue)
        }

    }
    return(
      <div>
        <Image onClick={toggelMenu} src={ menuIcon } alt='menue' width={50} height={50}/>
        <ul style={{display: menuVisibile ? "block" : "none"}}>

            <div className='bg-black border-b-2 border-l-2 border-black px-2 pb-2'>
              <li><Link className={linkStyle} href="/">Home</Link></li>
              <li><Link className={linkStyle} href="/Blogs">Blogs</Link></li>
              <li><Link className={linkStyle} href="/Workshop">Workshop</Link></li>
              <li><Link  className={linkStyle} href="/About">About Me</Link></li>
              <li><Link  className={linkStyle} href="/#footer-contact">Contact</Link> </li>
            </div>

        </ul>
      </div>
    )
  }
  