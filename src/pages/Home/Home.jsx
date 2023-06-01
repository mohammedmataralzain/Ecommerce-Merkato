import HeroSection from "../../components/HeroSection/HeroSection";
import hero from "../../assets/hero.jpg"
import Services from "../../components/OurServices/Services";
import { Wrapper } from "./Home.styles";
import Trusted from "../../components/Trusted/Trusted";
import FeatureProducts from "../../components/FeatureProducts/FeatureProducts";

const Home = () => {
  // hero section data
  const heroData = {
    name: "Mercato Store",
    heroBody: `your ultimate destination for seamless online shopping! 
      We are an innovative and customer-centric ecommerce platform dedicated 
      to providing you with an exceptional shopping experience.
      take a look from the button down here.
    `,
    btnTitle: "Shop Now",
    img: hero
  };

  return (
    <Wrapper>
      <HeroSection data={heroData} />
      <FeatureProducts />
      <Services />
      <Trusted />
    </Wrapper>
  );
};



export default Home