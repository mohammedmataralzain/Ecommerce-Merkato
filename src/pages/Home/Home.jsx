import styled from "styled-components"
import HeroSection from "../../components/HeroSection/HeroSection";
import hero from "../../assets/hero.jpg"

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
    </Wrapper>
  );
};


const Wrapper = styled.section`
  /* background: ${({theme}) => theme.colors.bg}; */
  // this code right here is temprory to show home section until we start to work on it
  /* width:20rem; */
  /* height:20rem; */
  height: 100vh;
`;

export default Home