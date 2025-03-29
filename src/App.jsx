import AppNavbar from "./components/Navbar";
import CardComponent from "./components/CardComponents";
import FooterWithSitemap from "./components/Fotter"
import Hero from "./components/Hero"
import Form from "./components/form"
// import Input from "./components/Input"
export default function App() {
  return (
    <div>
      <AppNavbar />
      <div className="flex flex-col justify-center items-center h-screen">
      <Hero />
        <CardComponent />
        <Form/>
      </div>
      <FooterWithSitemap />
    </div>
  );
}
