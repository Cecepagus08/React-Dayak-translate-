import AppNavbar from "./components/Navbar";

import FooterWithSitemap from "./components/Fotter"
import Hero from "./components/Hero"
import Form from "./components/form"
// import Input from "./components/Input"
export default function App() {
  return (
    <div>
      <AppNavbar />

        <Hero />
        <Form/>
      
      

      <FooterWithSitemap />
      
    </div>
  );
}
