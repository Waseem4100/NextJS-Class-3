import Image from "next/image";
import SS from "../public/SS.png";
import Header from "@/component/header";
import Footer from "@/component/footer";


export default function Main() {
    
  return (


    

    <div className="Home">

      <div>
        <Header></Header>
      </div>

     
     
      <div className="Main">
  

      

    

      
      <div className="intro">

<h1>Hi,<br />I'm <span id="name">Waseem Ahmed</span> <br />Next Js Developer</h1>

      </div>
<div className="picture">

 <Image src={SS} alt="profilePicture"  loading="lazy"  id="picture"/>
 
</div>

      </div>

    

    <div>
      <Footer />
    </div>

       
  
     







    </div>
  );
}
