import Link from "next/link"



export default function Footer(){
    return(
    <div className="footer">

        
     
         <ul className="footer-btn">
            
            <Link href =""><li className="btn"> Email</li></Link> 
           <Link href =""><li className="btn">Linkdin</li></Link>
         
         </ul>
   

  


          
  
    </div>

    )
}