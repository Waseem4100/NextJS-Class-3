import Link from "next/link"

export default function Header (){
    return(
       
        <div>
             <div className="header">
              
       
       <ul className="header-button">
      <Link href={`/`}> <li id="home-btn">Home</li></Link> 
      <Link href={`/contact`}> <li id="home-btn">Contact</li></Link>
      <Link href={`/about`}> <li id="home-btn">About</li></Link>
      <Link href={`/jobs`}> <li id="home-btn">Jobs</li></Link>
        </ul>
  
        </div>
         
        </div>
      

    )
}