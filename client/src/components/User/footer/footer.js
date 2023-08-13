import "../footer/footer.css"
import r10 from "../../imagesfolder/download (4).jpg"
 import r5 from "../../imagesfolder/download (5).jpg"
 import r6 from "../../imagesfolder/download (6).jpg"
 import r7 from "../../imagesfolder/download (7).jpg"
 import r8 from "../../imagesfolder//download (8).jpg"
 import r1 from "../../imagesfolder/download (8).jpg"
 import r9 from "../../imagesfolder/download (9).jpg"
 import nnn from "../../imagesfolder/MicrosoftTeams-image (1).png"
 

 const data = [
    
    {
      na:r10
    },
    {
        na:r5
      },
      {
        na:r7
      },
      {
        na:r8
      },
      {
        na:r9
      },
      {
        na:r8
      }
 ]

function Footer(){
    return(
        <div className="yoy" >
            
<div className="fot" style={{fontSize:"1.5vw"}}  >
            <nav >
                <div>
                <img style={{width:"3vw"}} src={nnn} alt="oo"/>
                    <p>best hotel in the word <br/> come and enjoy a life experience</p>
                </div>

             </nav>   

             <nav>
                <div style={{fontSize:"1.5vw"}} >
                <p   >USEFULL LINK</p>
                <p>* roon $ suit</p>
                <p>* spa center</p>
                <p>* swimming</p>
                <p>* contact us</p>
                </div>
            </nav>

            <nav>
                <div>
                <p>CONTACT INFO</p>
                <p>TEL:9093455332</p>
                <p>MAIL: HFACTOR@GMAIL.COM</p>
                <p>HOUR:MON - FRI</p>
                <p>24/7 SERVICE</p>
                </div>
            </nav>

            <nav> 
            <p style={{color:"balckd"}} >GALLERY</p>
                <div style={{display:"grid", gridTemplateColumns: "10vw 10vw"}} >
                    
                {
                data.map(ele=>{
                    return(
                        <div  >
                             <div style={{backgroundColor:"black"}} > <img style={{width:"10vw", height:"6vw"}} src={ele.na}  /> </div>


                            
                        </div>
                    )})}
                </div>
            </nav>  
            </div>


            <nav className="wew">
                <p className="wee" >GET UPDATE</p>
                <p className="ooo" >get latest update and deal</p>
                <div  className="ol" >
                <input style={{height:"2.5vw", width:"20vw" }}  type="text" placeholder="enter your mail"/>
                <button  className="dii" > read more  </button>
                </div>
            </nav> 
        </div>
    )
}

export default Footer