import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import word from "../../../imagesfolder/download (5).jpg"
import gone from "../../../imagesfolder/download (6).jpg"
import div from "../../../imagesfolder/download (7).jpg"

function Caro() {
  return (
    <Carousel style={{ width: "100vw", height: "10vw", marginBottom:"30vw"}} data-bs-theme="dark">
      <Carousel.Item>
        <img
          style={{ width: "100vw", height: "25vw" }}
          className="d-block w-100"
          src={word}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "100vw", height: "25vw" }}
          className="d-block w-100"
          src={gone}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "100vw", height: "25vw" }}
          className="d-block w-100"
          src={div}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Caro;
