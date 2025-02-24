import React from 'react'
import './smooth.css'
import { GSAPInfoBar } from "https://codepen.io/GreenSock/pen/vYqpyLg.js";
import gsap from "gsap-trial/dist/gsap";

import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import ScrollSmoother from 'gsap-trial/ScrollSmoother';
import SplitText from 'gsap-trial/SplitText';
import { useEffect } from 'react';
function Smooth() {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// create the smooth scroller FIRST!
  useEffect(() => {
const smoother = ScrollSmoother.create({
 wrapper: "#wrapper",
 content: "#content",
 smooth: 1,
 normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
 ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
 effects: true,
 preventDefault: false
});
window.addEventListener('load', () => {
  ScrollTrigger.refresh();

   
   let tl = gsap.timeline();
   let mySplitText = new SplitText("#split-stagger", { type: "words,chars" });
   let chars = mySplitText.chars;
   
   chars.forEach((char, i) => {
    smoother.effects(char, { speed: 1, lag: (i + 1) * 0.1 });
   });
   
});  }, []);


gsap.set(".heading", {
  yPercent: -150,
  opacity: 1
 });

return (
    <div><div id="wrapper">
 <section id="content">
  <div class="heading" aria-hidden="true">
   <p>smooooth</p>
   <div class="text-container">
    <p>scrolling</p>
    <p data-speed="0.95">scrolling</p>
    <p data-speed="0.9">scrolling</p>
    <p data-speed="0.85">scrolling</p>
    <p data-speed="0.8">scrolling</p>
    <p data-speed="0.75">scrolling</p>
    <p data-speed="0.7">scrolling</p>
   </div>
  </div>

  <section class="image-grid container">
   <div class="image_cont" data-speed="1">
    <img data-speed="auto" src="https://images.unsplash.com/photo-1556856425-366d6618905d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5lb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
   </div>
   <div class="image_cont" data-speed="1.7">
    <img data-speed="auto" src="https://images.unsplash.com/photo-1520271348391-049dd132bb7c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt=""/>
   </div>
   <div class="image_cont" data-speed="1.5">
    <img data-speed="auto" src="https://images.unsplash.com/photo-1609166214994-502d326bafee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt=""/>
   </div>
  </section>

  <section class="title container flow--lg">
   <h1><span class="eyebrow" aria-hidden="true">with </span>GSAP scrollsmoother</h1>
   <p>Seamlessly integrated with GSAP and ScrollTrigger. Leveraging native scrolling - no "fake" scrollbars or event hijacking.</p>
  </section>

  <section class="bars container">

   <div class="bars-text">
    <div class="flow content">
     <h2>Speed Control</h2>
     <p>Animate elements along at different speeds, slow them down or make them whizz past.</p>
    </div>

   </div>

   <div class="bars-cont">
    <div class="bar" data-speed="0.8">
     <p>0.8</p>
    </div>

    <div class="bar" data-speed="0.9">
     <p>0.9</p>
    </div>

    <div class="bar" data-speed="1">
     <p>1</p>
    </div>

    <div class="bar" data-speed="1.1">
     <p>1.1</p>
    </div>

    <div class="bar" data-speed="1.2">
     <p>1.2</p>
    </div>
   </div>

  </section>

  <section class="v-center">
   <div class="parallax-slab">
    <img data-speed="auto" src="https://assets.codepen.io/756881/smoothscroller-1.jpg" alt=""/>
   </div>
  </section>

  <section class="staggered container">

   <div class="staggered_text">
    <div class="flow content">
     <h2>Add some lag (the good kind!)</h2>
     <p>loosen the connection to the scroll to give a feeling of 'follow through.'</p>
    </div>

   </div>

   <div class="staggered_demo">
    <h3 id="split-stagger">stagger...</h3>
   </div>

  </section>

  <section class="parallax-images container">
   <div class="parallax-text">
    <div class="flow content">
     <h2>Easy parallax image effects</h2>
     <p>Pop your images in a container with overflow hidden, size them a little larger than the container and set data-speed to auto. GSAP does the rest.</p>
    </div>
   </div>

   <div class="image_cont">
    <img data-speed="auto" src="https://assets.codepen.io/756881/neon3.jpg" alt=""/>
   </div>
   <div class="image_cont">
    <img data-speed="auto" src="https://assets.codepen.io/756881/neon2.jpg" alt=""/>
   </div>
  </section>

  <section class="spacer"></section>
 </section>
</div></div>
  )
}

export default Smooth