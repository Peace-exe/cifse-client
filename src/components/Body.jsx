import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutUs";

const Body = ()=>{
    return <div className="flex flex-col min-h-screen">
    <Header/>
    <div className="flex-1">
        <HeroSection/>
        <AboutSection/>
        
    </div>
    
    </div>
}

export default Body;