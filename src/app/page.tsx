import ContactComponent from "./components/Contact";
import HeroSection from "./components/Hero";
import Navbar from "./components/Nav";
import SampleResourceList from "./components/Resource";
import TherapyServices from "./components/Services";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-sky-100">
      <Navbar/>
      <HeroSection/>
      <SampleResourceList/>
      <TherapyServices/>
      <ContactComponent/>
      <Footer/>
    </main>
  );
}
