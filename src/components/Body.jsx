import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutUs";
import Courses from "./Courses";
import WhyChooseUs from "./WhyChooseUs";
import Contact from "./Contact";

const Body = ()=>{
    return <div className="flex flex-col min-h-screen">
    <Header/>
    <div className="flex-1">
        <HeroSection/>
        <AboutSection/>
        <Courses/>
        <WhyChooseUs/>
        <Contact/>
        
    </div>
    
    </div>
}

export default Body;