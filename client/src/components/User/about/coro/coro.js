// import Carousel from "react-bootstrap/Carousel";
// import "bootstrap/dist/css/bootstrap.min.css";
// import word from "../../../imagesfolder/download (5).jpg"
// import gone from "../../../imagesfolder/download (6).jpg"
// import div from "../../../imagesfolder/download (7).jpg"

// function Caro() {
//   return (
//     <Carousel style={{ width: "100vw", height: "10vw", marginBottom:"30vw"}} data-bs-theme="dark">
//       <Carousel.Item>
//         <img
//           style={{ width: "100vw", height: "25vw" }}
//           className="d-block w-100"
//           src={word}
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h5>First slide label</h5>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           style={{ width: "100vw", height: "25vw" }}
//           className="d-block w-100"
//           src={gone}
//           alt="Second slide"
//         />
//         <Carousel.Caption>
//           <h5>Second slide label</h5>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           style={{ width: "100vw", height: "25vw" }}
//           className="d-block w-100"
//           src={div}
//           alt="Third slide"
//         />
//         <Carousel.Caption>
//           <h5>Third slide label</h5>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default Caro;

import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import div from "../imagefolder/images/pexels-engin-akyurt-1579253.jpg";
import word from "../imagefolder/images/pexels-hakim-santoso-3634741.jpg";
import gone from "../imagefolder/images/pexels-pixabay-164595.jpg";
import good from "../imagefolder/images/put-together.jpg";

function Caro() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            style={{ width: "80vw", height: "40vw" }}
            className="d-block w-100"
            src={word}
            alt="Deliux Room"
          />
          {/* <Carousel.Caption> */}
            {/* <h5>Deliux Room</h5> */}
            {/* <p className="ward">
              Conveniently located in the heart of the city, The H-Control
              provides easy access to major attractions, shopping districts, and
              cultural landmarks. Whether you're interested in exploring the
              local culture or conducting business meetings, our prime location
              makes it all within reach.
            </p> */}
          {/* </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            // style={{ width: "100vw", height: "40vw"  }}
            className="d-block w-100"
            src={gone}
            alt="Premium Room"
          />
          {/* <Carousel.Caption> */}
            {/* <h5>Premium Room</h5> */}
            {/* <div style={{ backgroundColor: "white" }}> */}
              {/* <p className="ward" style={{ color:"black", font: "" }}>
                At The H-Control, we take pride in providing impeccable service
                that exceeds your expectations. Our dedicated staff is committed
                to ensuring your stay is flawless, from check-in to check-out.
                Your comfort and satisfaction are our top priorities.
              </p> */}
            {/* </div> */}
          {/* </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100vw", height: "40vw" }}
            className="d-block w-100"
            src={div}
            alt="Single Room"
          />
          {/* <Carousel.Caption> */}
            {/* <h5>Single Room</h5> */}
            {/* <p className="ward">
              Experience a world of luxury, comfort, and impeccable service at
              H-Control. Whether you're seeking a romantic getaway, a family
              vacation, or a business trip, our hotel offers an oasis of
              relaxation and indulgence. Book your stay today and embark on a
              journey of unparalleled hospitality and sophistication.
            </p> */}
          {/* </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100vw", height: "40vw" }}
            className="d-block w-100"
            src={good}
            alt="Single Room"
          />
          {/* <Carousel.Caption> */}
            {/* <h5>Premium Room</h5> */}
            {/* <p className="ward" style={{ backgroundColor: "red" }}>
              At The H-Control,Indulge in the lap of luxury with our spacious
              and elegantly appointed rooms and suites. Each room is designed to
              provide the utmost comfort, featuring plush bedding, modern
              amenities, and stunning views of the city skyline. Whether you're
              traveling for business or leisure, our accommodations cater to
              your every need.
            </p> */}
          {/* </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Caro;
