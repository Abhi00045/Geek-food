import Cardcomponent from "../components/CardComponent"
import Footer from "../components/footer"
import Grid from "../components/GridComponent"
import Header from "../components/HeaderComponent"
import Hero from "../components/HeroComponent"
import "./index.css"

const Home = ()=>{
     return<>
     <Header/>
      <Hero/>
      <Cardcomponent />
      <Grid/>
      <Footer />
     </> 
}
export default Home;