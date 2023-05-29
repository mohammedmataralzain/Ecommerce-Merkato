import HeroSection from "../../components/HeroSection/HeroSection";
import hero from "../../assets/hero2.jpg"
const About = () => {
  // hero section data
  const heroData = {
    name: "Our Store Info",
    heroBody: `Who we are? We are a small ecommerce website, 
      Our mission is to support local businesses and foster a sense of community. 
      By connecting you with neighborhood stores and independent sellers, 
      we help you discover hidden gems and support the growth of small businesses.
    `,
    btnTitle: "Shop Now",
    img: hero
  };

  return (
    <div>
      <HeroSection data={heroData} />
    </div>
  );
};

export default About;
