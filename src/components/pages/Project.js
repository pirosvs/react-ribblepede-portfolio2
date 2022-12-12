import React from 'react';
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Project from "./components/Project";
import NarratoriumImg from '../../assets/narratorium.png';
import MovieSuggestGif from '../../assets/condensedFullDemo.gif';
import EcommerceImg from '../../assets/ecom-vid-img.png';
import PassGenImg from '../../assets/password-gen-img2.png';
import CodeQuizImg from '../../assets/js-quiz-img.png';
import SchedulerImg from '../../assets/scheduler-img.png';

// flex & wrap
export default function Project() {
  return (
    <div class="container-md">
      <h3>Projects</h3>

      <div class="container-md d-flex flex-wrap">
      <p className="col-sm-12 col-md-6 col-lg-4">
      <p>Narratorium</p>
        <p>Narratorium is a collaborative story-telling website designed to allow anyone
            on the site to contribute to a single story. Users can create an account and contribute
            a certain amount of deletions or additions per day at any point in the story using the Quill tooltip.
        </p>
            <a href="https://narratorium.herokuapp.com/">
            <img class="project-img" src={NarratoriumImg}
            title="Narratorium" alt="Homepage with description of the site and story"/></a>
        </p>
        <p className="col-sm-12 col-md-6 col-lg-4">
        <p>Movie Suggestor</p>
            <p>Movie Suggester frees up time spent searching for movies by finding movies
                similar to the title or genre a user searches using TMDB API. Users can
                also favorite certain movies to come back to them or click on movies to pull up the trailer.
            </p>
        <a href="https://fiaschettima.github.io/MovieSuggestion-Proj1">
            <img class= "project-img" src={MovieSuggestGif}
            title="Movie Suggestions" alt="Movie suggestion website"/></a>
        </p>
        <p className="col-sm-12 col-md-6 col-lg-4">
            <p>E-Commerce Back-End</p>
            <a href="https://github.com/pirosvs/ecommerce-izuchi"><img class="project-img" src={EcommerceImg}
            title="Ecommerce Backend" alt="Homepage with description of the site and story"/></a>
        </p>
        <p className="col-sm-12 col-md-6 col-lg-4">
        <p>Password Generator</p>
        <p>Need a secure password? Choose characters you want to include and receive a secure
            randomized password with this password generator.
        </p>
            <a href="https://pirosvs.github.io/password-generator/">
            <img class="project-img" src={PassGenImg}
            title="Password Generator" alt="Password generator with a randomized password"/></a>
        </p>
        <p className="col-sm-12 col-md-6 col-lg-4">
            <p>Coding Quiz</p>
            <p>Test your JavaScript knowledge with this basic coding quiz. How many can you get before
                the timer runs out?
            </p>
            <a href="https://pirosvs.github.io/code-quiz/">
            <img class= "project-img" src={CodeQuizImg}
            title="Code Quiz" alt="Code quiz question example"/></a>        
        </p>
        <p className="col-sm-12 col-md-6 col-lg-4">
        <p>Scheduler</p>
            <p>A simple scheduler for your 9-5 work day.</p>
            <a href="https://pirosvs.github.io/scheduler">
            <img class= "project-img" src={SchedulerImg}
            title="Scheduler" alt="Schedule color coded to current time"/></a>
        </p>
        </div>
    </div>
  );
}