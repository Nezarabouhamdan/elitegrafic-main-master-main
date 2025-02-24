import React from "react";
import { Globalstyle } from "./Globalstyles";
import { BrowserRouter, Switch, Rotue, Route } from "react-router-dom";
import Home from "./Page/Home";
import Navbar from "./components/Navbar/Navbar";

import "./fonts/BebasNeue-Regular.ttf";
import "./fonts/style.css";
import Footer from "./components/Footer/Footer";
import Projectspage from "./Page/Projectspage";
import Faqs from "./Page/Faqs";
import ServicesPage from "./Page/ServicesPage";
import Aboutus from "./Page/Aboutus";
import Smooth from "./components/Codepen/Smooth";
import Architecture from "./Page/Architecture";
import ProjectManagement from "./Page/Projectmangment";
import Contact from "./Page/Contact";
import DevelpomentPlaning from "./Page/DevelpomentPlaning";
import Bulidingcontracting from "./Page/Bulidingcontracting";
import EngineeringConsultancy from "./Page/EngineeringConsultancy";
import Interiordesgin from "./Page/Interiordesgin";
import Landscaping from "./Page/Landscaping";
import Productpage from "./Page/Productpage";
function App() {
  return (
    <BrowserRouter>
      <Globalstyle />
      
      <Navbar />
      <a href="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." class="float" target="_blank">
<i class="fa fa-whatsapp my-float"></i>
</a>
      <switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/Projects" component={Projectspage}></Route>
        <Route exact path="/Faq" component={Faqs}></Route>
        <Route exact path="/service" component={ServicesPage}></Route>
        <Route exact path="/Aboutus" component={Aboutus}></Route>
        <Route exact path="/s" component={Smooth}></Route>
        <Route exact path="/Architecture" component={Architecture}></Route>
        <Route exact path="/ProjectManagement" component={ProjectManagement}></Route>
        <Route exact path="/Developmentplaning" component={DevelpomentPlaning}></Route>
        <Route exact path="/Bulidingcontracting" component={Bulidingcontracting}></Route>
        <Route exact path="/EngineeringConsultancy" component={EngineeringConsultancy}></Route>
        <Route exact path="/RealEstate" component={'RealEstate'}></Route>
        <Route exact path="/Landscaping" component={Landscaping}></Route>
        <Route exact path="/InteriorDesign" component={Interiordesgin}></Route>
        <Route exact path="/fit-out" component={'fit-out'}></Route>
        <Route exact path="/Contact" component={Contact}></Route>
        <Route exact path="/Product" component={Productpage}></Route>
        
        

      </switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
