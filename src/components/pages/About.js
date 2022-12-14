import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Project from "./components/Project";
import aboutImg from '../../assets/aboutimg.JPG';

// new text to test ssh key
export default function About() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={4}>
        <img src={aboutImg} class="img-thumbnail" alt="Damien, a short white 'boy' and owner of this site, sits on some rocks in a river with trees in
          the background. He has light blue glasses and a mask, a black jean jacket, pants, and boots, and a red shirt with a heart web design
           on it. There are some pins on the jacket and a crystal necklace."/>
        </Col>
        <Col xs={12} md={8}>
          <p>
             Damien Armstrong is an aspiring Web Developper living and working out of the Bay Area, having recently received a certificate
             for full-stack we development from the UC Berkeley coding bootcamp. And lucky for you, he is oh so very employable! Check out hir work on 
             <a href="https://github.com/pirosvs">Github </a> and <a href="https://www.linkedin.com/in/damien-armstrong-412319138/"> Linkedin</a>, or check the
             Portfolio or Resume tabs for examples of his work.
           </p>

           <p class="lg-text">Some extraneous knowledge about the developper:</p>
           <p>--- He has a sweet (but bitey!) cat Penny ---</p>
          <p>--- In his spare time he likes to find new queer and trans 
          comics and make tailored suggestions to hir friends ---</p>
          <p>--- Ze's fallen down the rhythm game rabbit hole, currently spending
          a truly outstanding amount of time on Project DIVA: Mega Mix and Future Tone ---
          </p>
        </Col>
      </Row>
    </Container>
  );
}

    // <div>
    //   <p class="lg-text">About Page</p>

    //   <div class="d-flex justify-content-between w-100">
    //   <div class="left-side w-30">
    //     <img src={aboutImg} class="img-thumbnail w-100" alt="Damien, a short white 'boy' and owner of this site, sits on some rocks in a river with trees in
    //       the background. He has light blue glasses and a mask, a black jean jacket, pants, and boots, and a red shirt with a heart web design
    //       on it. There are some pins on the jacket and a crystal necklace."/>
    //   </div>

    //   <div class="right-side w-55">
    //     {/* <div class="container-sm"> */}
    //       <p>
    //         Damien Armstrong is an aspiring Web Developper living and working out of the Bay Area, having recently received a certificate
    //         for full-stack we development from the UC Berkeley coding bootcamp. And lucky for you, he is oh so very employable! Check out hir work on 
    //         <a href="https://github.com/pirosvs">Github </a> and <a href="https://www.linkedin.com/in/damien-armstrong-412319138/"> Linkedin</a>, or check the
    //         Portfolio or Resume tabs for examples of his work.
    //       </p>
    //     {/* </div> */}

    //   <p class="lg-text">Some extraneous knowledge about the developper:</p>
    //     {/* <div class="container-sm"> */}
          // <p>--- He has a sweet (but bitey!) cat Penny ---</p>
          // <p>--- In his spare time he likes to find new queer and trans 
          // comics and make tailored suggestions to hir friends ---</p>
          // <p>--- Ze's fallen down the rhythm game rabbit hole, currently spending
          // a truly outstanding amount of time on Project DIVA: Mega Mix and Future Tone ---
          // </p>
    //     {/* </div> */}
    //   </div>
    //   </div>
    // </div>