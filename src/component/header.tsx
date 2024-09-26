import Link from "next/link"

export default function Header (){
    return(
       
        <div>
             <div className="header">


          <h2>Waseem Ahmed</h2>
              
              
       
       <ul className="header-button">
      <Link href={`/`}> <li className="header-btn">Home</li></Link> 
      <Link href={`/contact`}> <li className="header-btn">Contact</li></Link>
      <Link href={`/about`}> <li className="header-btn">About</li></Link>
      <Link href={`/jobs`}> <li className="header-btn">Jobs</li></Link>
        </ul>
  
        </div>
         
        </div>
      

    )
}