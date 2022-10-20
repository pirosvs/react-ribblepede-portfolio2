import React from 'react';
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Project from "./components/Project";
import NarratoriumImg from '../../assets/narratorium.png';
import MovieSuggestGif from '../../assets/condensedFullDemo.gif';
import EcommerceImg from '../../assets/ecom-vid-img.png';
import PassGenImg from '../../assets/password-gen-img.png';
import CodeQuizImg from '../../assets/quiz-ip.png';
import SchedulerImg from '../../assets/manipulated-time-classes.png';

export default function Project() {
  return (
    <div>
      <h1>Projects</h1>
      <p className="1/3 col space">
      <h2>Narratorium</h2>
            <a href="https://narratorium.herokuapp.com/">
            <img class="" src={NarratoriumImg}
            title="Narratorium" alt="Homepage with description of the site and story"/></a>
        </p>
        <p className="col-sm-12 col-md-6 col-lg-3">
        <h2>Movie Suggestor</h2>
        <a href="https://fiaschettima.github.io/MovieSuggestion-Proj1">
            <img class= "project-img" src={MovieSuggestGif}
            title="Movie Suggestions" alt="Movie suggestion website"/></a>
        </p>
        <p className="col-sm-12 col-md-6 col-lg-3">
            <h2>E-Commerce Back-End</h2>
            <a href="https://github.com/pirosvs/ecommerce-izuchi"><img class="" src={EcommerceImg}
            title="Ecommerce Backend" alt="Homepage with description of the site and story"/></a>
        </p>
        <p className="col-sm-12 col-md-6 col-lg-3">
        <h2>Password Generator</h2>
            <a href="https://pirosvs.github.io/password-generator/">
            <img class="project-img" src={PassGenImg}
            title="Password Generator" alt="Password generator with a randomized password"/></a>
        </p>
        <p className="col-sm-12 col-md-6 col-lg-3">
            <h2>Coding Quiz</h2>
            <a href="https://pirosvs.github.io/code-quiz/">
            <img class= "project-img" src={CodeQuizImg}
            title="Code Quiz" alt="Code quiz question example"/></a>        
        </p>
        <p className="col-sm-12 col-md-6 col-lg-3">
        <h2>Scheduler</h2>
            <a href="https://pirosvs.github.io/scheduler">
            <img class= "project-img" src={SchedulerImg}
            title="Scheduler" alt="Schedule color coded to current time"/></a>
        </p>
    </div>
  );
}