import Image from 'next/image';
import Link from 'next/link';
import './globals.css'
import { Inter } from 'next/font/google'
import EmailIcon from"../../public/email-icon.svg"
import GithubIcon from"../../public/github.svg"
import LinkedinIcon from"../../public/linkedn.svg"
import tweetIcon from"../../public/twiter.svg"
import Menu from "./Menu.js"

const inter = Inter({ subsets: ['latin'] })
const liStyle = 'list-none no-underline font-semibold text-base mr-5 mt-5 ml-5';
const footerIconStyle = "inline-flex text-white mx-20 py-2";
const footerTextStyle = "px-4"



export const metadata = {
  title: 'Protofolio',
  description: 'Generated by create next app',
}




export default function RootLayout({ children }) {


  return (

    <html lang="en">
      <body className={inter.className}>

        <header className='flex w-full h-14 opacity-90 bg-black text-white rounded-lg fixed'>

          <h1 className='flex-1 text-white text-xl font-bold ml-6 mt-4'><Link href="/">Anuj Kumar</Link></h1>

          <nav className=''>
            <ul className='flex justify-around'>

              <li className={liStyle}>
                <p>
                <Link href="/">Dashborard</Link>
                </p>
              </li>
              <li><Menu /></li>
            </ul>

          </nav>
        </header>
        
        <div className='px-10'>
          {children}
        </div>
        <div className='flex md:block'>
        <footer id='footer-contact' className='bg-teal rounded-t-xl'>
          <div className=''>
          <h2 className="text-white text-2xl font-bold px-28 py-3 "> Contacts</h2>
          <ul >
            <li >
              <Link className={footerIconStyle} href={"mailto:kumaranuj154000@gmail.com"}>
                <Image src={EmailIcon} alt='email'></Image>
                <p className={footerTextStyle}>Email: kumaranuj154000@gmail.com</p>
              </Link>
              </li>
            <li>
              <Link href={"#"} className={footerIconStyle}>
                <Image src={tweetIcon} alt='twitter'></Image>
                <p className={footerTextStyle}>Twitter or X </p>
              </Link>
            </li>
            <li>
              <Link href={"https://www.linkedin.com/in/anuj-kr-vandium-915880194/"} className={footerIconStyle}>
              <Image src={LinkedinIcon} alt='Linkedin'></Image>
              <p className={footerTextStyle}>Linkedin</p>
              </Link>
            </li>
            <li>
              <Link href={"https://github.com/anujkumar-t9"} className={footerIconStyle}>
                <Image src={GithubIcon} alt='Github'></Image>
                  <p className={footerTextStyle}>GitHub</p>
              </Link>
            </li>
          </ul>
          </div>
        </footer>
        </div>

      </body>
    </html>

  )
}
