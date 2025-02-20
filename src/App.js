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
      </switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
