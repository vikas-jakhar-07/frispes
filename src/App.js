import PreLoader from './components/common/PreLoader';
import ScrollToTop from './components/common/ScrollToTop';
import Hero from './components/home/Hero';
import OurSpaces from './components/home/OurSpaces';
import WhyFrispes from './components/home/WhyFrispes';
import OurFacilities from './components/home/OurFacilities';
import FrispesGallery from './components/home/FrispesGallery';
import WhoUsesFrispes from './components/home/WhoUsesFrispes';
import CustomersReviews from './components/home/CustomersReviews';
import OurHelpCenter from './components/home/OurHelpCenter';
import NewsEvents from './components/home/NewsEvents';
import ReadyToTry from './components/home/ReadyToTry';
import Footer from './components/home/Footer';
import './App.css';

function App() {
  return (
    <>
      <Hero />
      <OurSpaces />
      <WhyFrispes />
      <OurFacilities />
      <FrispesGallery />
      <WhoUsesFrispes />
      <CustomersReviews />
      <OurHelpCenter />
      <NewsEvents />
      <ReadyToTry />
      <Footer />
      <ScrollToTop />
      <PreLoader />
    </>
  );
}

export default App;