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

function Cam(){
    const [moo,setmoo]=useState([])
    const [ho ,setho]=useState([])
    const [cart, setcart]=useState([])
    const [cat, setcat]=useState([])
    const [lag, setlag]= useState(10)
    const [game, setgame]= useState(0)
    

    


    
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
   

   function tota(){

    const to= cat.map((ele)=> Number(ele[0].price))
   //setgame((ele)=>[Number(ele) + to[to.length-1]])
   //console.log(game)
   console.log(typeof to)
   }
        
    tota()
    
}
let rat = cat.length
function del(del){
    const hol = cat.filter((ele)=>ele[0]._id !== del)
    setcat(hol)

    
}


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
          <div>total</div>
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

        <button  className="abu-cardBtn">
          /*<Link to="/booking" className="abu-cardBtn-refer">
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

        <button  className="abu-cardBtn">
          /*<Link to="/booking" className="abu-cardBtn-refer">
            BOOK NOW
            </Link>
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
            
            <Nav2
           rat={rat}
           ret={up}/>
           {ma && <div style={{backgroundColor:"goldenrod"}}>
            <div style={{textAlign:"center"}}  > <h1>YOUR CARTs</h1> </div>
         <div className='ko'  >
         <div>PRODUCT</div>
         
         <div></div>
         <div>FEATURES</div>
       <div>PRICE</div>
       <div></div>
       <div>TOTAL</div>
       
         </div>
         <div  >
            {pppp}
            </div>
            <div>{lag}</div>
            
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