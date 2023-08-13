import "../nav6/nav6.css"
 
import r from "../../../imagesfolder/download (1).jpg"
import r2 from "../../../imagesfolder/download (2).jpg"
import r3 from "../../../imagesfolder/download (3).jpg"
import r4 from "../../../imagesfolder/download (1).jpg"
import r10 from "../../../imagesfolder/download (4).jpg"
import r5 from "../../../imagesfolder/download (5).jpg"
import r6 from "../../../imagesfolder/download (6).jpg"
import r7 from "../../../imagesfolder/download (7).jpg"
import r8 from "../../../imagesfolder/download (8).jpg"
import r9 from "../../../imagesfolder/download (9).jpg"
import c from "../../../imagesfolder/c11.jpg"
  
const data = [
   {im:r,
   fam:"family Room",
   av:"available room",
   s:"#22,000",
   n:"per night"},
    {im:r2,
           fam:"Couples Room",
           av:"available room",
           s:"#22,000",
           n:"per night"}, {im:r3,
               fam:"friends Room",
               av:"available room",
               s:"#22,000",
               n:"per night"}, {im:r4,
                   fam:"family Room",
                   av:"available room",
                   s:"#22,000",
                   n:"per night"}, {im:r5,
                       fam:"kids Room",
                       av:"available room",
                       s:"#22,000",
                       n:"per night"}, {im:r6,
                           fam:"Room for two",
                           av:"available room",
                           s:"#22,000",
                           n:"per night"}, {im:r7,
                               fam:"family Room",
                               av:"available room",
                               s:"#22,000",
                               n:"per night"}, {im:r8,
                                   fam:"couple Room",
                                   av:"available room",
                                   s:"#22,000",
                                   n:"per night"}, {im:r9,
                                       fam:"family Room",
                                       av:"available room",
                                       s:"#22,000",
                                       n:"per night"}
]


function Nav6(){
   return(
       <div>
           <div style={{fontSize:"4vw", marginLeft:"23vw", marginTop:"5vw"}} >
               Hotel Best Room & Suites.
           </div>

           <div className="jio">
           {
               data.map(ele=>{
                   return(
                       <div  >
                            <div style={{backgroundColor:"black"}} > <img style={{width:"20vw", height:"22vw"}} src={ele.im}  /> </div>

                            <div className="kl" > <p>{ele.fam}</p> <p> {ele.s}  </p></div>
                           <div className="kll" > <p>{ele.av}</p> <p>{ele.n}</p></div>

                           
                       </div>
                   )
               })
           }
                <button style={{marginLeft:"23vw"}} className="dii" > More Room  </button>
           </div>

          <div>
           <div  className="kaa" >  
               <div>
                   <p style={{fontSize:"1.5vw"}} > <b>welcome to H-control</b> </p>
                   <p style={{fontSize:"2vw"}} >our Hotel has been present over 10 years</p>
                   <p  style={{fontSize:"1.5vw"}}  >through our recognition based we have <br/> created the best evinronment for businesss <br/>
                    organisation private reserve, family log, booking <br/>
                     from different part of the world, 
                   </p>
                   <button  className="dii" > book  </button>
                   </div>
                   <div>
                       <img style={{height:"25vw" ,borderRadius:"2vw"}} src={r9} alt="ll" />
                       <img style={{width:"20vw", marginLeft:"-3vw", marginBottom:"-20vw", borderRadius:"2vw" }}  src={r10} alt="ll" />
                   </div>
               
           </div>

          </div>


          <div style={{backgroundColor:"whitesmoke",paddingLeft:"15vw", paddingTop:"5vw", paddingBlock:"4vw"}} >
           <div style={{fontSize:"3vw", textAlign:"center", marginTop:"2vw"}} >H control service</div>
           <div className="ww" >
               <div>  <img style={{width:"35vw", height:"25vw"}} src={c} alt="mm"/> </div>
               <div>
                   <p style={{fontSize:"2vw", marginTop:'2vw'}} > <b>Relaxing moment at spa </b></p>
                   <p  style={{fontSize:"1.5vw"}} >  <b>experience the sensation </b></p>
                   <p style={{fontSize:"1.3vw"}} > * facial care: 30min per day </p>
                   <p style={{fontSize:"1.3vw"}}>* body massage: 30 minper day </p>
                   <p style={{fontSize:"1.3vw"}}>* aroma terap: 30 min per day</p>
                   <button  className="dii" > read more  </button>
                   
               </div>
           </div>

          </div>

       </div>
   )
}



export default Nav6