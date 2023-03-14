import Carousel from "react-bootstrap/Carousel";
import Section from "../Section/Section";
import r1 from "../../../assets/remolques/remolque1.jpg";
import classes from "./CarouselC.module.scss";

import "bootstrap/dist/css/bootstrap.min.css";
function CarouselC() {
  const titleStyle = {
    color: "#502A1D",
  };

  return (
    <Section
      className={classes.carousel_wrapper}
      title="TOURS"
      titleStyle={titleStyle}
    >
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={r1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={r1} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={r1} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Section>
  );
}

export default CarouselC;
