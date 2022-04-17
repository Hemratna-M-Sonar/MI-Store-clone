import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar.js';
import NavOptions from './components/NavOptions.js';
import Slider from './components/Slider.js';
import Offers from './components/Offers.js';
import Heading from './components/Heading.js';
import StarProduct from './components/StarProduct.js';
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js';
import HotAccessories from './components/HotAccessories.js';
import ProductReviews from './components/ProductReviews.js';
import Videos from './components/Videos.js';
import Banner from './components/Banner.js';
import Footer from './components/Footer.js';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const data = require("./data/data.json");

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                <>
                    <PreNavbar />
                    <Navbar />
                    <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifestyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories} />
                    <Slider start={data.banner.start}/>
                    <Offers offers={data.offer}/>
                    <Heading text="STAR PRODUCTS"/>
                    <StarProduct  starProducts={data.starProduct}/>
                    <Heading text="HOT ACCESSORIES" />
                    <HotAccessoriesMenu />
                    <Heading text="PRODUCT REVIEWS" />
                    <ProductReviews productReviews={data.productReviews}/>
                    <Heading text="VIDEOS" />
                    <Videos videos={data.videos}/>
                    <Heading text="IN THE PRESS" />
                    <Banner banner={data.banner}/>
                    <Footer footer={data.footer}/>
                    </>} >
                    <Route path="music" element={
                        <HotAccessories 
                            music={data.hotAccessories.music} 
                            musicCover={data.hotAccessoriesCover.music}
                        />} 
                    />
                    <Route path="smartDevices" element={
                        <HotAccessories 
                            smartDevice={data.hotAccessories.smartDevice} 
                            smartDeviceCover={data.hotAccessoriesCover.smartDevice}
                        />} 
                    />
                    <Route path="home" element={
                        <HotAccessories 
                            home={data.hotAccessories.home} 
                            homeCover={data.hotAccessoriesCover.home}
                        />} 
                    />
                    <Route path="lifestyle" element={
                        <HotAccessories 
                            lifestyle={data.hotAccessories.lifeStyle} 
                            lifestyleCover={data.hotAccessoriesCover.lifeStyle}
                        />} 
                    />
                    <Route path="mobileAccessories" element={
                        <HotAccessories 
                            mobileAccessories={data.hotAccessories.mobileAccessories} 
                            mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}
                        />} 
                    />
                </Route>
                
            </Routes>
        </Router>
    );
    
}
export default App;