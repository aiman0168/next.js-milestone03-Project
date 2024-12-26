import HeroSection from './Components/HeroSection';
import Today from './Components/Today';
import Products from './Components/Product';
import Category from './Components/Categories';
import BestSelling from './Components/BestSelling';
import Section from './Components/Section';
import Explore from './Components/Explore';
export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Today/>
      <Products/>
      <Category/>
      <BestSelling/>
      <Section/>
      <Explore/>
    </div>
  )
}