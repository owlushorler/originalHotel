import { useEffect, useState } from 'react';
import axios from "axios"
import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faUserFriends,
  faBed,
  faWifi,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
import jj from "../card/basket-cart-icon-27.png"
import DropdownCollection from '../rooms/room/dropdown/DropdownCollection';
import Displa from './cartdip';
import im from "../../imagesfolder/download (6).jpg"
import { Button } from 'bootstrap';
import Nav2 from '../home/nav2/nav2';
import BgColor from '../rooms/room/bgColor/bgColor';
import "./cam.css"
import lp from "../../imagesfolder/download (13).jpg"
import BookingForm from '../rooms/bookingForm/BookingForm';
import Offcanvas from 'react-bootstrap/Offcanvas';



function Cam(){
  const [pa ,setpa]=useState(0)
    const [moo,setmoo]=useState([])
    const [ho ,setho]=useState([])
    const [cart, setcart]=useState([])
    const [cat, setcat]=useState([])
    const [lag, setlag]= useState()
    const [game, setgame]= useState(0)
    const [pass, usepass]=useState("")
    const [tolu , settolu]= useState(true)
     const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  const [qq,setqq]= useState()


  function sett(oo){
      
        setpa(oo)
        //settolu(false)
       // setma(false)
        handleShow()
        

    }
 



    
    const [caa ,setcaa]=useState(true)
    const [c ,setc]=useState(false)
    const ass = ()=>{
       axios.get("http://localhost:3000/api/rooms")
       .then(res=>(setho(res.data))
       ).catch((e)=>{console.log(e)})

     }

    useEffect(()=>{
        ass()},[])


    const dat = ho.map((ele)=>{
        return(
            <div>
                {ele.name}
            </div>
        )
 
 
    })
        // dele
    


    // add to cart
 const pol=async (id)=>{
    const mool =ho.filter((ele)=>ele._id === id)
      setcat((ele)=>[...ele,mool])
    
 setlag()
    //setmoo(cat.map((ele)=>{
     // return(  
      //  <div>
          //  <div>{ele[0].name}</div>
          //  <div>{ele[0].features}</div>
         //   <div>{ele[0].price}</div>
           // <button onClick={()=>{del(ele[0]._id)}}  >remove</button>
       // </div>)
   // }))
   // setmoo(go)
   
 const pok = game
   function tota(){

    const to= cat.map((ele)=> Number(ele[0].price))
   const u = Number(to[to.length-1])

   setgame(u)

   const ss =  game?game + u: 0 + u
   console.log(u)
   console.log(ss)
    setgame(ss)
   console.log(pok)
  
   }
        
    tota()
    
}
let rat = cat.length
function del(del){
    const hol = cat.filter((ele)=>ele[0]._id !== del)
    setcat(hol)

    
}

{/*function sett(oo){
  setpa(oo)
  settolu(false)
setma(false)*/}



let pppp = cat.map((ele)=>{
    return(  
      <div >
     
         <div className='kol' >
         {/*<div><img src={ele[0].images} alt='' /></div>*/}
         <div><img style={{width:"3vw", height:"2vw"}} src={lp} alt='' /></div>
          <div>{ele[0].name}</div>
         
           
            <div>{ele[0].features}</div>
          <div>{ele[0].price}</div>
          <button style={{backgroundColor:"goldenrod",fontSize:"1vw", width:"5vw",height:"1.5vw", border:"none", borderRadius:"2vw"}} onClick={()=>{del(ele[0]._id)}}  >Remove</button>
          <div></div>
          </div>
      </div>)
  })

// ad to card

function ca(roon){
    
        const koe = ho.filter((ele)=>ele.name === roon) 
        setcart(koe)
    
    
 /*{roon &&setcart(koe.map((card, index) => (
    <Card
      abu  
      key={index}
      style={{
        width: "20rem",
        backgroundColor: "#efece3",
        height: "33rem",
      }}
      className="abu-card-scheme"
    >
      <Card.Img
        abu                                  
        variant="top"
        src={card.images}
        style={{ height: "13rem" }}
        className="abu-card-image"
      />
      <Card.Body abu>
        <div className="abu-rating">
          <FontAwesomeIcon abu icon={faStar} />
          <FontAwesomeIcon abu icon={faStar} />
          <FontAwesomeIcon abu icon={faStar} />
          <FontAwesomeIcon abu icon={faStar} />
          <FontAwesomeIcon abu icon={faStar} />
        </div>
        <div className="abu-title-price">
          <Card.Title className="abu-card-title">
            {card.name}
          </Card.Title>
          <p className="abu-pop">
            <span className="highlighted-text">{card.price}</span>
            <span className="per-night"> /Per Night</span>
          </p>
        </div>
        <div className="abu-font-container">
          <div>
            <FontAwesomeIcon
              abu
              className="abu-font"
              icon={faUserFriends}
              size="lg"
            />{" "}
            <p>{card.capacity}</p>
          </div>
          <div style={{}}>
            <FontAwesomeIcon
              abu
              className="abu-font"
              icon={faBed}
              size="lg"
              style={{
                paddingRight: "8px",
              }}
            />
            <p
              style={{
                fontSize: "13px",
                paddingLeft: "5px",
              }}
            >
              King Size Bed{" "}
            </p>
          </div>
        </div>
        <div className="abu-font-container">
          <div>
            <FontAwesomeIcon
              abu
              className="abu-font"
              icon={faWifi}
              size="lg"
            />
            <p>{card.features} </p>
          </div>
          <div>
            <FontAwesomeIcon
              abu
              className="abu-font"
              icon={faSquare}
              size="lg"
              style={{
                marginRight: "15px",
                color: "#d4af37",
              }}
            />
            <p>36 Sqm </p>
          </div>
        </div>

        <button className="abu-cardBtn">
          <Link to="/booking" className="abu-cardBtn-refer">
            BOOK NOW
          </Link>
        </button>

        <img  onClick={()=>pol(card._id)} style={{width:"2vw", marginLeft:"5vw"}} src={jj} alt='ee'/>
      </Card.Body>
    </Card>
  )))}*/

//{!roon && setcart(dom)}

 
setcaa(false)

}

function poo(ele){
      
  axios.post("http://localhost:3000/viewpay",{
    checkin:20-23-2023,
    checkout:12-3-2023,
    price:ele
  }).then(res=>console.log(res))
}
 // equating the dom
 
const domm = (cart.map((card, index) => {
    return(
    <Card
      abu
      key={index}
      style={{
        width: "20rem",
        backgroundColor: "#efece3",
        height: "33rem",
      }}
      className="abu-card-scheme"
    >
      <Card.Img
        abu
        variant="top"
        //src={card.images}
        src={lp}
        style={{ height: "13rem" }}
        className="abu-card-image"
      />
      <Card.Body abu>
        <div className="abu-rating">
          <FontAwesomeIcon abu icon={faStar} />
          <FontAwesomeIcon abu icon={faStar} />
          <FontAwesomeIcon abu icon={faStar} />
          <FontAwesomeIcon abu icon={faStar} />
          <FontAwesomeIcon abu icon={faStar} />
        </div>
        <div className="abu-title-price">
          <Card.Title className="abu-card-title">
            {card.name}
          </Card.Title>
          <p className="abu-pop">
            <span className="highlighted-text">{card.price}</span>
            <span className="per-night"> {card.price} /Per Night</span>
          </p>
        </div>
        <div className="abu-font-container">
          <div>
            <FontAwesomeIcon
              abu
              className="abu-font"
              icon={faUserFriends}
              size="lg"
            />{" "}
            <p>{card.capacity}</p>
          </div>
          <div style={{}}>
            <FontAwesomeIcon
              abu
              className="abu-font"
              icon={faBed}
              size="lg"
              style={{
                paddingRight: "8px",
              }}
            />
            <p
              style={{
                fontSize: "13px",
                paddingLeft: "5px",
              }}
            >
              King Size Bed{" "}
            </p>
          </div>
        </div>
        <div className="abu-font-container">
          <div>
            <FontAwesomeIcon
              abu
              className="abu-font"
              icon={faWifi}
              size="lg"
            />
            <p>{card.features} </p>
          </div>
          <div>
            <FontAwesomeIcon
              abu
              className="abu-font"
              icon={faSquare}
              size="lg"
              style={{
                marginRight: "15px",
                color: "#d4af37",
              }}
            />
            <p>36 Sqm </p>
          </div>
        </div>

        <button  onClick={()=>{sett(card)}} className="abu-cardBtn">
<Link className="abu-cardBtn-refer">
            BOOK NOW
            </Link>
        </button>

        <img onClick={()=>pol(card._id)} style={{width:"2vw", marginLeft:"5vw"}} src={jj} alt='ee'/>
      </Card.Body>
    </Card>
)}))
const dom = (ho.map((card, index) => {
    return(
    <Card
      abu
      key={index}
      style={{
        width: "20rem",
        backgroundColor: "#efece3",
        height: "33rem",
      }}
      className="abu-card-scheme"
    >
      <Card.Img
        abu
        variant="top"
        //src={card.images}
        src={lp}
        style={{ height: "13rem" }}
        className="abu-card-image"
      />
      <Card.Body abu>
        <div className="abu-rating">
          <FontAwesomeIcon abu icon={faStar} />
          <FontAwesomeIcon abu icon={faStar} />
          <FontAwesomeIcon abu icon={faStar} />
          <FontAwesomeIcon abu icon={faStar} />
          <FontAwesomeIcon abu icon={faStar} />
        </div>
        <div className="abu-title-price">
          <Card.Title className="abu-card-title">
            {card.name}
          </Card.Title>
          <p className="abu-pop">
            <span className="highlighted-text">{card.price}</span>
            <span className="per-night"> /Per Night</span>
          </p>
        </div>
        <div className="abu-font-container">
          <div>
            <FontAwesomeIcon
              abu
              className="abu-font"
              icon={faUserFriends}
              size="lg"
            />{" "}
            <p>{card.capacity}</p>
          </div>
          <div style={{}}>
            <FontAwesomeIcon
              abu
              className="abu-font"
              icon={faBed}
              size="lg"
              style={{
                paddingRight: "8px",
              }}
            />
            <p
              style={{
                fontSize: "13px",
                paddingLeft: "5px",
              }}
            >
              King Size Bed{" "}
            </p>
          </div>
        </div>
        <div className="abu-font-container">
          <div>
            <FontAwesomeIcon
              abu
              className="abu-font"
              icon={faWifi}
              size="lg"
            />
            <p>{card.features} </p>
          </div>
          <div>
            <FontAwesomeIcon
              abu
              className="abu-font"
              icon={faSquare}
              size="lg"
              style={{
                marginRight: "15px",
                color: "#d4af37",
              }}
            />
            <p>36 Sqm </p>
          </div>
        </div>

        <button  onClick={()=>{sett(card)}} className="abu-cardBtn">
          <Link  className="abu-cardBtn-refer">
            BOOK NOW
            </Link>*
        </button>

        <img onClick={()=>pol(card._id)} style={{width:"2vw", marginLeft:"5vw"}} src={jj} alt='ee'/>
      </Card.Body>
    </Card>
)}))
  
 const [ma , setma]=useState(false)
 function up(){

    setma((ele)=>ele?false:true)
 }

    return(
        <div>

          <>


      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>please fill up to make complete your booking</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <BookingForm
            poor={pa}
            qq={qq}/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
          
           { !tolu && <BookingForm
            price={pa}/>}
           {!tolu && <botton style={{backgroundColor:"goldenrod"}} onClick={()=>settolu(true)} >go back</botton>}
            
           {tolu && <Nav2
           rat={rat}
           ret={up}/>}
           {ma && <div style={{backgroundColor:"goldenrod"}}>
            <div style={{textAlign:"center"}}  > <h3>YOUR CART</h3> </div>
         <div className='ko'  >
         <div>PRODUCT</div>
         
         <div></div>
         <div>FEATURES</div>
       <div>PRICE</div>
       <div></div>
       <div></div>
       
         </div>
         <div  >
            {pppp}
            </div>
            <div>{lag}</div>
            <hi style={{marginLeft:"80vw"}} >total:{game}</hi>
            <button  onClick={()=>{sett(game)}} >BOOK NOW</button>
            </div>}
            <BgColor/>
            
            <DropdownCollection
            ca ={ca}/> 
         
            {/*{moo}*/}
            
          {/*{cat}*/}
          {!caa && <button style={{border:"none"}} onClick={()=>setcaa(true)} >view all rooms</button>}
        
            <div className="abu-card-grid">
           {/* {!caa &&cart}
            {caa && dom}*/}
             {!caa && domm}
            {caa && dom}
     </div>
     
        </div>
    )
}


export default Cam;