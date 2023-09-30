"use client"
import Image from 'next/image';
import Link from 'next/link';
import iconMenue from "../../public/menue-icon.svg"
import iconCross from "../../public/cross-icon.svg"
import { useState } from "react";

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

            <div className='bg-grey border-b-2 border-l-2 border-black px-2 pb-2'>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/Blogs">Blogs</Link></li>
              <li><Link href="/Workshop">Workshop</Link></li>
              <li><Link href="/About">About Me</Link></li>
              <li><Link href="/#footer-contact">Contact</Link> </li>
            </div>

        </ul>
      </div>
    )
  }
  